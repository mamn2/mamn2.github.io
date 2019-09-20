import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
        <div className='projects-grid'>
          <Card shadow={5} style={{width: '450', height:'300', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontWeight: 'bold', height: '200px', background: 'url(https://miro.medium.com/max/738/1*60gs-SFYyooZZBxatuoNJw.jpeg) center / cover'}}>Handwriting Classification (Machine Learning)</CardTitle>
            <CardText>A handwriting classification system that uses a Naïve Bayes algorithm to correctly identify different letters given a training set.</CardText>
            <CardActions border>
              <Button colored href="https://github.com/mamn2/TextClassifier" target="_blank">Github</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{width: '450', height:'300', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '200px', background: 'url(http://www.buttonsny.com/wp-content/uploads/2019/05/digital-audio-waveform-animation-as-motion-graphic-for-sound-recording-equipment_h8lqlqfug_thumbnail-full08.png) center / cover'}}>Delay VST Plugin</CardTitle>
            <CardText>A VST/AudioUnit plugin programmed with the JUCE C++ audio framework using DSP algorithms to manipulate audio.</CardText>
            <CardActions border>
              <Button colored href="https://github.com/mamn2/DelayVST" target="_blank">Github</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{width: '450', height:'300', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontWeight: 'bold', height: '200px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXaTllNLHR0aT4TpJF1OdOZjLN1579MpuVGJ_IvwqFr1fUCo6IQ) center / cover'}}>Plant Classification (Machine Learning)</CardTitle>
            <CardText>A machine learning approach to analyzing drone-scraped spectral data for Tundra species classification. Not publicly available.</CardText>
            <CardActions border>
              <Button colored>Github</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{width: '450', height:'300', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/62eedd20427215.56c8b97d255ec.png) center / cover'}}>Instant Sudoku Solver</CardTitle>
            <CardText>A Sudoku solving system that can solve a puzzle in under a second using intelligent backtracking algorithms.</CardText>
            <CardActions border>
              <Button colored href="https://github.com/mamn2/SudokuSolver" target="_blank">Github</Button>
            </CardActions>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 1) {
      return(
        <div className='projects-grid'>

          <Card shadow={5} style={{width: '600', height:'300', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontWeight: 'bold', height: '200px', background: 'url(https://ichef.bbci.co.uk/news/912/cpsprodpb/A571/production/_107135324_gettyimages-939062314.jpg) center / cover'}}>GameAI</CardTitle>
            <CardText>A computer-driven AI strategy that is used to defeat other strategies in the computer game "Wood the Gathering."</CardText>
            <CardActions border>
              <Button colored href="https://github.com/mamn2/Wood-the-Gathering" target="_blank">Github</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{width: '600', height:'300', margin: 'auto'}}>
            <CardTitle style={{color: '#000', fontWeight: 'bold', height: '200px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSjhd4j0k5Ke0o043e8CfI_ZqafSoVEAN2VopZ6x-RBF1zC-qFQ) center / cover'}}>Classical Piano App</CardTitle>
            <CardText>An android application that implements the Spotify SDK to create a library of classical piano music.</CardText>
            <CardActions border>
              <Button colored href="https://github.com/mamn2/ClassicalPianoLibrary" target="_blank">Github</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{width: '800', height:'800', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontWeight: 'bold', height: '200px', background: 'url(https://robbreportedit.files.wordpress.com/2018/02/5d4c679f-1df9-4c7b-ab1f-40b7b2853b7c-2621-0000017cc6a12b02_tmp.jpg?w=1000) center / cover'}}>Crazy 8s</CardTitle>
            <CardText>Command-line game for playing the Crazy Eights card game with an intelligent computer-run strategy.</CardText>
            <CardActions border>
              <Button colored href="https://github.com/mamn2/CrazyEights" target="_blank">Github</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{width: '800', height:'800', margin: 'auto'}}>
            <CardTitle style={{color: '#000', fontWeight: 'bold', height: '200px', background: 'url(https://img.freepik.com/free-vector/colorful-tv_23-2147503407.jpg?size=338&ext=jpg) center / cover'}}>TVData</CardTitle>
            <CardText>Data structure that parses information from web-hosted JSON files regarding information about popular TV shows.</CardText>
            <CardActions border>
              <Button colored href="https://github.com/mamn2/TvData" target="_blank">Github</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{width: '800', height:'800', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontWeight: 'bold', height: '200px', background: 'url(https://cdn2.macpaw.com/images%2Fcontent%2Fhow-to-new%2FMac+Terminal+commands_+Have+fun+with+Mac’s+least-known+program+G+1200x670.jpg) center / cover'}}>Adventure Open World</CardTitle>
            <CardText>Open world command line game that learns information about its environment by parsing JSON objects.</CardText>
            <CardActions border>
              <Button colored href="https://github.com/mamn2/Adventure" target="_blank">Github</Button>
            </CardActions>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 2) {
      return(
        <div className = 'projects-grid'>

          <Card shadow={5} style={{width: '800', height:'800', margin: 'auto'}}>
            <CardTitle style={{color: '#000', fontWeight: 'bold', height: '200px', background: 'url(https://yt3.ggpht.com/a/AGF-l7_FycTwXc9yWHX21yMHs9tkuHtt1033X5HowA=s900-c-k-c0xffffffff-no-rj-mo) center / cover'}}>CV Plant Classifier</CardTitle>
            <CardText>Computer Vision approach to plant classification. Uses TensorFlow and Keras to determine the species of an Alaskan plant and provide an estimate on what is left. Not yet publicly available.</CardText>
          </Card>

          <Card shadow={5} style={{width: '800', height:'800', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontWeight: 'bold', height: '200px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mcFrlzB2VDfoj4CsbDA6Q_xBP3_J8Ecp6dXHwES6N-SWpMe_dA) center / cover'}}>Music Theory Analysis</CardTitle>
            <CardText>Ongoing project to create an open-source MIDI based library for music theory analysis. All packages (including MIDI) are created from scratch. Will be made publicly available in December 2019. Please contact if you would like to contribute.</CardText>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 3) {
      return(
        <div className = 'projects-grid'>

          <Card shadow={5} style={{width: '800', height:'800', margin: 'auto'}}>
            <CardTitle style={{color: '#000', fontWeight: 'bold', height: '200px', background: 'url(https://www.squarechilli.co.uk/wp-content/uploads/2019/02/services-1024x594.jpg) center / cover'}}>Portfolio Website</CardTitle>
            <CardText>If you are interested to see how I made this website, feel free to check out my Github link. For this website I used React.JS, an excellent front-end development software by Facebook.</CardText>
            <CardActions border>
              <Button colored href="https://github.com/mamn2/MyPortfolioWebsite" target="_blank">Github</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{width: '800', height:'800', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontWeight: 'bold', height: '200px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfqmMficGK8Zibdz0CgVqo0X692HdJ-S0C9iNmd1LPpDn2BvLhA) center / cover'}}>FishPeek Vendors App</CardTitle>
            <CardText>An ongoing mobile app project written in React Native to allow aquarium retailers and breeders to buy and sell rare acquatic species. This app is being worked on for a business and will not be made publicly available.</CardText>
          </Card>

        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>C++</Tab>
          <Tab>Java</Tab>
          <Tab>Python</Tab>
          <Tab>JavaScript</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
