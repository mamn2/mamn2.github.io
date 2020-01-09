import React, { Component } from 'react'
import FlumeGorge2 from './photos/FlumeGorge2.jpg';
import HungarianPic from './photos/HungarianSquare.png';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div className='about-body'>
        <Grid className='about-grid'>
          <Cell style={{width: '40%', height: '80%'}} col={6}  className='parent'>
            <h3>About Me</h3>
            <p className='child'>
              Hey there, I'm Mohamed, an enthusiastic musician, traveller, and software engineer.
              I'm so glad to see that you've stumbled upon my page!
              As you may know, I am a student at UIUC, majoring in computer science and music. That's right,
              the two coolest majors on campus. I have the privilege of being able to combine
              my two favorite things, and do it for a living!
              <br></br><br></br>Alongside my love for science and music, I am a history nut, having travelled
              to over two dozen countries. Yet despite my infatuation over what once was,
              I am in a constant state of excitement over what the future brings us, and therefore,
              would like to do my part in engineering it! If you share my goals, please feel free
              to contact me about potential projects/jobs.

            </p>

          </Cell>
          <Cell col={6}>

            <div className='pics'>

              <img
                className='aboutme-pic1'
                src={HungarianPic}
                alt="avatar"
              />
              <hr></hr>
              <img
                className='aboutme-pic2'
                src={FlumeGorge2}
                alt="avatar"
              />

            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
