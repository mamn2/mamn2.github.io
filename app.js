async function init() {

    var div = d3.select('body').append('div').attr('class', 'tooltip-donut').style('opacity', 0)

    data = await d3.csv("https://raw.githubusercontent.com/ilyankou/passport-index-dataset/master/legacy/2019-11-23/passport-index-matrix.csv")
    hdi_data = Object.entries(await d3.csv("https://raw.githubusercontent.com/bromero26/human-development-index/master/hdi_human_development_index.csv"))
    countries_topo = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')


    let changeNames = new Map()
    changeNames.set("Slovak Republic", "Slovakia").set("St. Kitts and Nevis", "Saint Kitts and Nevis")
        .set("St. Vincent and the Grenadines", "Saint Vincent and the Grenadines").set("St. Lucia", "Saint Lucia")
        .set("Macedonia, FYR", "North Macedonia").set("Micronesia, Fed. Sts.", "Micronesia").set("Kyrgyz Republic", "Kyrgyzstan")
        .set("Cote d'Ivoire", "Ivory Coast").set("Côte d'Ivoire", "Ivory Coast").set("Lao", "Laos").set("Congo, Rep.", "Congo").set("Congo, Dem. Rep.", "DR Congo")
        .set("United States of America", "United States").set("Dem. Rep. Congo", "DR Congo").set("Dominican Rep.", "Dominican Republic")
        .set("Central African Rep.", "Central African Republic").set("Eq. Guinea", "Equatorial Guinea").set("eSwatini", "Swaziland")
        .set("Bosnia and Herz.", "Bosnia and Herzegovina").set("Macedonia", "North Macedonia").set("S. Sudan", "South Sudan")
        .set("Greenland", "Denmark")
        
        
    let hdiMap = new Map()
    for (let i = 1; i < hdi_data.length - 1; i++) {
        country = hdi_data[i]["1"]["geo"]
        if (changeNames.has(country)) {
            hdi_data[i]["1"]["geo"] = changeNames.get(country)
        }
        hdiMap.set(hdi_data[i]["1"]["geo"], hdi_data[i]["1"]["2015"])
    }

    let countrySet = new Set()
    let excludeCountries = new Set()
    excludeCountries.add("Monaco").add("Hong Kong").add("San Marino").add("Vatican").add("Macao").add("Taiwan").add("Tuvalu").add("Nauru")
        .add("Marshall Islands").add("Kosovo").add("North Korea").add("Somalia").add("Afghanistan")
    let arr = new Array();
    for (let i = 0; i < data.length; i++) {
        passportData = Object.entries(data[i])
        visaOnArrivalList = []
        visaLimitedList = []
        visaRequiredList = []
        visaFreeList = []
        for (let j = 1; j < passportData.length; j++) {
            if (passportData[j][1] === "3") {
                visaFreeList.push(passportData[j][0]);
            } else if (passportData[j][1] === "2") {
                visaOnArrivalList.push(passportData[j][0]);
            } else if (passportData[j][1] === "1") {
                visaLimitedList.push(passportData[j][0])
            } else if (passportData[j][1] === "0") {
                visaRequiredList.push(passportData[j][0])
            }
        }
        country = passportData[0][1]
        hdi = hdiMap.get(country)
        if (!excludeCountries.has(country)) {
            arr.push({country, visaFreeList, visaOnArrivalList, visaLimitedList, visaRequiredList, hdi});
            countrySet.add(country)
        }
    }

    function sortFunction(a, b) {
        if ((a.visaFreeList.length + a.visaOnArrivalList.length) === (b.visaFreeList.length + b.visaOnArrivalList.length)) { return 0 }
        else { return ((a.visaFreeList.length + a.visaOnArrivalList.length) < (b.visaFreeList.length + b.visaOnArrivalList.length)) ? 1 : -1 }
    }
    arr.sort(sortFunction)

    
    countriesList = new Array();
    hdiList = new Array();
    for (var i = 0; i < arr.length; i++) {
        countriesList.push(arr[i].country)
        hdiList.push(arr[i].hdi)
    }

    xdomain = [0, 173]
    xrange = [0, 400]
    xScale = d3.scaleLinear().domain(xdomain).range(xrange)


    svg1 = d3.select('body').append('svg').attr('width', '800').attr('height', '2000').attr('id', 'passports')
        svg1.append('g').attr('id', 'rect')
            .attr('transform', 'translate(180,50)')
            .selectAll('rect')
            .data(arr).enter().append('rect')
            .attr('width', d => (xScale(d.visaFreeList.length + d.visaOnArrivalList.length) + 'px'))
            .attr('height', '10px')
            .attr('y', function(d, i) { return i * 10 + 'px' })
            .on('click', clickCountry)
            .attr('fill', 'lightblue')
            .attr('stroke', 'black')
            .attr('id', function(d, i) { return 'id' + i })
            .on('mouseover', function (d, i) {
                d3.select(this).transition()
                     .duration('50')
                     .attr('opacity', '.6')
                div.transition().duration('50').style('opacity', 1)
                div.html('Visa Free: ' + d.visaFreeList.length + ' Visa On Arrival: ' + d.visaOnArrivalList.length + ' E-Visa: ' + d.visaLimitedList.length + ' Visa Required: ' + d.visaRequiredList.length)
                    .style("left", (d3.event.pageX + 10) + "px")
                    .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                     .duration('50')
                     .attr('opacity', '1');
                div.transition().duration('50').style('opacity', 0)
                }
            )

    previousSelectionRect = null
    previousSelectionCircle = null

    function clickCountry() {
        if (previousSelectionRect != null) {
            previousSelectionRect.attr('fill', 'lightblue')
        }
        if (previousSelectionCircle != null) {
            previousSelectionCircle.attr('fill', 'darkblue').attr('r', '3')
        }
        let id = d3.select(this).attr('id')
        previousSelectionRect = d3.select('#passports').select('#rect').select('#' + id).attr('fill', 'green')
        previousSelectionCircle = d3.select('#scatter').select('#circ').select('#' + id).attr('fill', 'green').attr('r', '6')

        visaFree = arr[parseInt(id.substring(2))].visaFreeList
        for (let i = 0; i < visaFree.length; i++) {
            let thisCountry = visaFree[i]
            d3.select('#worldmap').select('.map').selectAll('#' + thisCountry.replace(/\s/g, "")).attr('fill', 'green')
        }
        visaOnArrival = arr[parseInt(id.substring(2))].visaOnArrivalList
        for (let i = 0; i < visaOnArrival.length; i++) {
            let thisCountry = visaOnArrival[i]
            d3.select('#worldmap').select('.map').selectAll('#' + thisCountry.replace(/\s/g, "")).attr('fill', 'blue')
        }
        visaLimited = arr[parseInt(id.substring(2))].visaLimitedList
        for (let i = 0; i < visaLimited.length; i++) {
            let thisCountry = visaLimited[i]
            d3.select('#worldmap').select('.map').selectAll('#' + thisCountry.replace(/\s/g, "")).attr('fill', 'orange')
        }
        visaRequired = arr[parseInt(id.substring(2))].visaRequiredList
        for (let i = 0; i < visaRequired.length; i++) {
            let thisCountry = visaRequired[i]
            if (thisCountry === "United Kingdom") {
                console.log("FOUND")
            }
            d3.select('#worldmap').select('.map').selectAll('#' + thisCountry.replace(/\s/g, "")).attr('fill', 'red')
        }

        d3.select('#worldmap').select('.map').selectAll('#' + arr[parseInt(id.substring(2))].country.replace(/\s/g, "")).attr('fill', 'black')
        
    }

    svg1.append('g')
            .attr('transform', 'translate(180,50)')
            .call(d3.axisLeft(d3.scaleBand().domain(countriesList).range([0, countriesList.length * 10])))

    svg1.append('g')
            .attr('transform', 'translate(180, 50)')
            .call(d3.axisTop(xScale))

    d3.select('body').append('p').attr('width', '800px').attr('word-wrap', 'break-word').attr('id', 'worldmapP')
        .html('Here is your countries passport power map. The green represents all the countries you can go to visa-free. The blue represents all the countries where you can get a visa upon arrival without too many complications (usually). The orange represents all the countries where you will need to get an electronic visa prior to departing. The red represents all the countries that you will need to seek a physical visa (typically stamped in your passport) prior to departure. Your country should be in black.')


    const projection = d3.geoMercator().scale(70).translate([500 / 2, 200 / 1.4]);
    const path = d3.geoPath(projection);
    await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
        .then(data => {

            for (let i = 0; i < data.objects.countries.geometries.length; i++) {
                if (changeNames.has(data.objects.countries.geometries[i].properties.name)) {
                    data.objects.countries.geometries[i].properties.name = changeNames.get(data.objects.countries.geometries[i].properties.name)
                }
            }
            const countries = topojson.feature(data, data.objects.countries);
            countries.features.splice(159, 1)
            console.log(data)
            let svg2 = d3.select('body').append('svg').attr('width', '900').attr('height', '400').attr('id', 'worldmap')
                svg2.append('g')
                    .attr('class', 'map')
                    .attr('transform', 'translate(100, 100)')
                        .selectAll('path').data(countries.features).enter().append('path')
                            .attr('class', 'country')
                            .attr('fill', '#ccc')
                            .attr('stroke', '#999')
                            .attr('d', path)
                            .attr('id', dta => dta.properties.name.replace(/\s/g, "") )
                            .on('mouseover', function (d, i) {
                                d3.select(this).transition()
                                     .duration('50')
                                     .attr('opacity', '.6')
                                div.transition().duration('50').style('opacity', 1)
                                div.html(d.properties.name)
                                    .style("left", (d3.event.pageX + 10) + "px")
                                    .style("top", (d3.event.pageY - 15) + "px");
                            })
                            .on('mouseout', function (d, i) {
                                d3.select(this).transition()
                                     .duration('50')
                                     .attr('opacity', '1');
                                div.transition().duration('50').style('opacity', 0)
                                }
                            )
            svg2.append("circle").attr("cx",620).attr("cy",100).attr("r", 6).style("fill", "black")
            svg2.append("circle").attr("cx",620).attr("cy",120).attr("r", 6).style("fill", "green")
            svg2.append("circle").attr("cx",620).attr("cy",140).attr("r", 6).style("fill", "blue")
            svg2.append("circle").attr("cx",620).attr("cy",160).attr("r", 6).style("fill", "orange")
            svg2.append("circle").attr("cx",620).attr("cy",180).attr("r", 6).style("fill", "red")
            svg2.append("text").attr("x", 640).attr("y", 100).text("Home Country").style("font-size", "15px").attr("alignment-baseline","middle")
            svg2.append("text").attr("x", 640).attr("y", 120).text("Visa Free").style("font-size", "15px").attr("alignment-baseline","middle")
            svg2.append("text").attr("x", 640).attr("y", 140).text("Visa On Arrival").style("font-size", "15px").attr("alignment-baseline","middle")
            svg2.append("text").attr("x", 640).attr("y", 160).text("Electronic Visa").style("font-size", "15px").attr("alignment-baseline","middle")
            svg2.append("text").attr("x", 640).attr("y", 180).text("Visa Required").style("font-size", "15px").attr("alignment-baseline","middle")
    });

    d3.select('body').append('p').attr('width', '800px').attr('word-wrap', 'break-word')
        .html('Interestingly enough, someone from another country, who has similar economic means and an equal moral standing may have a completely different map from you. Perhaps their map allows them to go to more places, or perhaps less places. Perhaps they are allowed to work in more places than you, perhaps less. Either way, those circumstances are largely out of people\'s control. To see how large of a difference nationality affects freedom of travel, click next.')

    let invoked = false
    d3.select('body').append('a').attr('href', '#scatter').html('Next').on('click', function () {if (!invoked) scatterPlot()})

    function scatterPlot() {
        invoked = true
        d3.select('body').select('a').remove()
        let svg3 = d3.select('body').append('svg').attr('width', '800').attr('height', '450').attr('id', 'scatter')
            svg3.append('g').attr('id', 'circ')
                .attr('transform', 'translate(50, 50)')
                .selectAll("circle")
                .data(arr).enter().append('circle')
                    .attr('cx', dta => (dta.hdi - 0.3) * 400/0.7)
                    .attr('cy', dta => 360 -  2*(dta.visaFreeList.length + dta.visaOnArrivalList.length))
                    .attr('r', '3')
                    .attr('fill', 'darkblue')
                    .on('click', clickCountry)
                    .attr('id', function(d, i) { return 'id' + i })
                    .on('mouseover', function (d, i) {
                        d3.select(this).transition()
                            .duration('50')
                            .attr('opacity', '.6')
                        div.transition().duration('50').style('opacity', 1)
                        div.html(d.country)
                            .style("left", (d3.event.pageX + 10) + "px")
                            .style("top", (d3.event.pageY - 15) + "px");
                    })
                    .on('mouseout', function (d, i) {
                        d3.select(this).transition()
                            .duration('50')
                            .attr('opacity', '1');
                        div.transition().duration('50').style('opacity', 0)
                        }
                    )

        svg3.append('g')
                .attr('transform', 'translate(50, 50)')
                .call(d3.axisLeft(d3.scaleLinear().domain([180, 0]).range([0, 360])))

        svg3.append('g')
                .attr('transform', 'translate(50, 410)')
                .call(d3.axisBottom(d3.scaleLinear().domain([0.3, 1]).range([0, 400])))

        d3.select('body').append('p').attr('width', '800px').attr('word-wrap', 'break-word')
            .html('This chart shows a trend in a countries passport power based on its HDI (human development index). As we can see, citizens of more developed countries have significantly more travelling freedom than those from less developed areas. This is an example of nationality privilege and systemic inequality on the basis of nationality.')
        
            
    }
    
}