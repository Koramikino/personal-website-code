import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import {Link} from 'gatsby';

export default () => (

  <Layout>
    <Header tab="home"/>
    <div id="projectPanel">
      <div className="projectSidePanel">
      all projects
      <Link to="/projects">
        <span className="divLink" >
        </span>
      </Link>
      </div>
      <div className="divider" />
      <div className="projectsContainer">
        <div className="projectLink">
        project here
        </div>
        
      </div> 
    </div>
  </Layout>

)