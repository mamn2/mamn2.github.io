import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css'
import GreatWall from './photos/GreatWallPic.png'

class LandingPage extends Component {
  render() {
    return(
      <div style = {{width : '100%', margin: 'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src={GreatWall}
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Mohamed Amn</h1>

              <hr/>
              <p>Java | C++ | Python | ReactJS | Verilog | JUCE</p>
              <div className='social-links'>
                <a href="https://www.linkedin.com/in/mohamedamn/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a href="https://github.com/mamn2" rel="noopener noreferrer" target="_blank">
                  <i className='fa fa-github-square' aria-hidden="true" />
                </a>

                <a href="https://www.youtube.com/channel/UCPG9nQ5hg9yOGrKxqmv6NyA?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                  <i className='fa fa-youtube-square' aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;
