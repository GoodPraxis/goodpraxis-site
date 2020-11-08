import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './main.scss';
import ProjectPromoList from '../components/project-promo-list';

const IndexPage = () => (
  <Layout activeItem="Work" description="Work">
    <SEO title="Good Praxis • Our Work" metaTitle="Good Praxis • Our Work" />
    <ProjectPromoList />
  </Layout>
);

export default IndexPage;
