import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './main.scss';
import ProjectPromoList from '../components/project-promo-list';

const IndexPage = () => (
  <Layout activeItem="Work" description="Work">
    <SEO title="GOOD PRAXIS • Our Work" metaTitle="GOOD PRAXIS • Our Work" />
    <ProjectPromoList />
  </Layout>
);

export default IndexPage;
