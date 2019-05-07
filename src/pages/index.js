import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

export default () => (

  <Layout>
    <Header/>
    <div className="big-div-intro">hi</div>
    <h1 className="center"><span className="title-green">me</span></h1>
      <div className="wrap-center">
        <p className="center">my name is <span id="em">kora</span>. i am a high school student that has been teaching herself 
        coding for the past few years. i was first introduced to coding when i was very young, on a website called <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer">scratch</a>.
      it sparked my interest in programming and when i got to ninth grade, i decided to start learning real programming.</p></div>
    <h1 className="center"><span className="title-orange">skills</span></h1>
    <div className="wrap-center">
      <p className="center">
      currently i know javascript, css, html, react, java, python, lua, moonscript, node.js, sql, mysql, and i am trying to learn much more.
      </p>
    </div>
    <h1 className="center"><span className="title-purple">about</span></h1>
    <div className="wrap-center">
      <p className="center">
      this website was created to practice my front-end abilities. there is no back-end or server-side code in this website.
      it was created using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">react</a>, which is a 
      library for creating user interfaces, and <a href="https://www.gatsbyjs.org" target="blank" rel="noopener noreferrer">gatsby</a>, which 
      is a framework that helps compile your code into a format that works with a normal static web host. the website also is a place to keep up and 
      document my skills and past projects.
      </p>
    </div>
    <Header />
  </Layout>

)