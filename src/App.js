import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Resume from './components/photos/ResumeCopy.pdf';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title={<Link style={{textDecoration: 'none', color:'white'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/projects">Projects</Link>
                <a href={Resume} rel ="noopener noreferrer" target="_blank">Resume</a>
                <Link to="/aboutme">About</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/projects">Projects</Link>
              <a href={Resume} rel ="noopener noreferrer" target="_blank">Resume</a>
              <Link to="/aboutme">About</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
