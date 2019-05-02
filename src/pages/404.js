import React from 'react';
import Header from '../components/header'
import Layout from '../components/layout'
import ColorScheme from '../components/colorScheme'
import {Link} from 'gatsby';

const h1Style = {
    color: ColorScheme.darkPurple
}

export default () => (

  <Layout>
    <Header />
    <div id="indent">
        <h1 style={h1Style}>This page doesnt exist!</h1>
        <p>Go <Link to="" id="body">home</Link>.</p>
    </div>
  </Layout>

)