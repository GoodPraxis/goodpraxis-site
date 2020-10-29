import React from 'react';

import { ProjectPromo } from '@goodpraxis/components';
import Layout from '../components/layout';
import SEO from '../components/seo';

import './main.scss';

const IndexPage = () => (
  <Layout activeItem="Work">
    <SEO title="Work" />
    <section className="project-promos">
      <ProjectPromo
        image=""
        projectName="Test"
        industry="Testing"
        capabilities="Design"
        className="grid-lines"
        backgroundColor="#4CFF8B"
        promoStyle="light"
        isNewWork
      />
      <ProjectPromo
        image=""
        projectName="Test"
        industry="Testing"
        capabilities="Design"
        className="grid-lines"
      />
    </section>
  </Layout>
);

export default IndexPage;
