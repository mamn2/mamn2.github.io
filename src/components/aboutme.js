import React, { Component } from 'react';
import JuchePic from './photos/JucheFull.jpg';
import FlumeGorge from './photos/FlumeGorge.jpg';
import FlumeGorge2 from './photos/FlumeGorge2.jpg';
import HungarianPic from './photos/HungarianSquare.png';
import { Grid, Cell } from 'react-mdl';
import BusinessPic from './photos/Business Pic 2 Copy.jpg';


class About extends Component {
  render() {
    return(
      <div className='about-body'>
        <Grid className='about-grid'>
          <Cell col={6}>
            <h3>About Me</h3>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              Hey there!
              I'm Mohamed, an enthusiastic musician, traveller, and software engineer.
              I'm so glad to see that you've stumbled upon my page! :)<br></br><br></br>
              If you know me, you'll know that I talk a lot... maybe a bit too much.
              If you know me even better you'll know that it's because I'm a deeply passion-driven
              person. You'll often find me asleep in the music rooms three hours past
              midnight... or asleep next to my laptop in Grainger Library at two in the morning...
              perhaps even planning a trip to North Korea.
              <br></br><br></br>
              While I am a history nut, having travelled
              to over two dozen countries, I am in a constant state of excitement over what the
              future brings, and therefore, would like to do my part in engineering it!

            </p>

          </Cell>
          <Cell col={6}>

            <div className='pics'>

            <img
              className='aboutme-pic1'
              src={HungarianPic}
              alt="avatar"
            />
            <img
              className='aboutme-pic2'
              src={FlumeGorge2}
              alt="avatar"
            />

              {/*<List>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton',}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    1 (331) 643 6832
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton',}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    /in/mohamedamn
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton',}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    mamn2@illinois.edu
                  </ListItemContent>
                </ListItem>

              </List>*/}

            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
