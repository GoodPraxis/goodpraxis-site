import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './project-page.scss';

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

interface TemplateData {
  markdownRemark: {
    frontmatter: any;
    html: string;
  };
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: { data: TemplateData }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout activeItem="Work">
      <SEO title="Work" />
      <div className="project-page grid">
        <div className="project-page-title">{frontmatter.title}</div>
        <ul className="project-page-details">
          <li>Lorem ipsum</li>
          <li>Dolor sit</li>
          <li>Amet</li>
        </ul>
        <div
          className="project-page-description"
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="project-page-images">
          <div className="project-page-image" />
          <div className="project-page-image" />
          <div className="project-page-image" />
        </div>
      </div>
      <hr />
      <RelatedItemList items={relatedProjects} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
