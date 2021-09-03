import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './main.scss';
import ProjectWorkList from '../components/project-work-list';

const IndexPage = () => (
  <Layout activeItem="Work" description="Work">
    <SEO title="GOOD PRAXIS • Our Work" metaTitle="GOOD PRAXIS • Our Work" />
    <ProjectWorkList />
  </Layout>
);

export default IndexPage;
