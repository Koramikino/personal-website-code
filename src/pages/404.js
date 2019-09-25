import React from 'react';
import Header from '../components/header'
import Layout from '../components/layout'
import ColorScheme from '../components/colorScheme'
import {Link} from 'gatsby';

const h1Style = {
    color: ColorScheme.darkPurple
}
const center = {
  textAlign: 'center'
}

export default () => (

  <Layout>
    <Header />
    <div id="indent">
        <h1 style={h1Style, center}>This page doesnt exist!</h1>
        <p style={center}>Go <Link to="" id="body">home</Link>.</p>
    </div>
  </Layout>

)