import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

export default () => (

  <Layout>
    <Header/>
    <div className="intro-div">hi</div>
    <h1 className="center"><span className="title">about</span></h1>
    <div className="wrap-center">
      <p className="center">my name is kora. i am a high school student that has been teaching herself 
      coding for the past few years. i built this website for practice and to show off some of the 
      font-end skills that i know. this website is built with react, which is a library for building 
      user interfaces, and gatsby, which is a framework which includes react and webpack to generate static 
      websites. this site does not feature any back-end or server side code, but in addtion to html, css, react, and javascript, 
      i also know java, python, lua, moonscript, sql, node.js, and i am still learning more. </p></div>
    <div className="wrap-center">
      <p className="center">currently, my goal is to become either a full-stack developer or a software engineer. i also hope to 
      make games as a hobby.</p>
    </div>
  </Layout>

)