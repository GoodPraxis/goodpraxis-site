import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './main.scss';
import ProjectPromoList from '../components/project-promo-list';

const IndexPage = () => (
  <Layout activeItem="Work">
    <SEO title="Work" />
    <ProjectPromoList />
  </Layout>
);

export default IndexPage;
