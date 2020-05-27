import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Map from '../components/map';

import './main.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <p>Hello world</p>
    <Map />
  </Layout>
);

export default IndexPage;
