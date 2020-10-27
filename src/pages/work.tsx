import React from 'react';

import { ProjectPromo } from '@goodpraxis/components';
import Layout from '../components/layout';
import SEO from '../components/seo';

import './main.scss';
import RelatedItemList from '../components/related-items';

const relatedProjects = [
  {
    name: 'Test Project',
    image: '/images/building.jpg',
    href: 'test',
  },
  {
    name: 'Test Project 2',
    image: '/images/building.jpg',
    href: 'test2',
  },
  {
    name: 'Test Project 3',
    image: '/images/building.jpg',
    href: 'test',
  },
  {
    name: 'Test Project 4',
    image: '/images/building.jpg',
    href: 'test2',
  },
];

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
    <hr />
    <RelatedItemList items={relatedProjects} />
  </Layout>
);

export default IndexPage;
