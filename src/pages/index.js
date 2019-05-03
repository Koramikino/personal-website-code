import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

export default () => (

  <Layout>
    <Header/>
    <section className="center">
      <h1 className="title">hi</h1>
      <div className="text-box">
        <p className="text-box-text">
        my name is kora. i have been teaching myself coding for a few years now.
        i started learning html, css, and javascript when i was in 9th grade.
        i am now a senior in high school, and i am still trying to learn as much as i can.
        i am currently aiming to be a full stack developer, and also trying to learn c# and c++ to make software and hopefully games.
        </p>
      </div>
      </section>
      <section className="center alt-section">
        <h1 className="title">stuff i know</h1>
        <p>html. css. javascript. java. python. lua. moonscript. sql. react. node.js.</p>
      </section>
  </Layout>

)