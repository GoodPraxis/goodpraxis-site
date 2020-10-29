import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout activeItem="Home">
    <SEO title="404: Not found" />
    <div className="grid not-found-area">
      <div>4</div>
      <div>0</div>
      <div>4</div>
      <div className="not-found-smaller">NOT</div>
      <div className="not-found-smaller">FOUND</div>
    </div>
  </Layout>
);

export default NotFoundPage;
