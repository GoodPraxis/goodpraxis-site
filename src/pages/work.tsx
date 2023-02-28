import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ProjectWorkList, { ProjectWorkListProps } from '../components/project-work-list';
import SEO from '../components/seo';
import { WorkHeroSection } from '../components/hero-image-text';

const IndexPage = ({ data }: ProjectWorkListProps) => (
  <Layout activeItem="Our Work" description="Our Work">
    <SEO title="GOOD PRAXIS • Our Work" metaTitle="GOOD PRAXIS • Our Work" />
    <WorkHeroSection />
    <div className="grid">
      <h2 className="heading recent-work-heading">Recent work ↓</h2>
    </div>
    <ProjectWorkList data={data} />
  </Layout>
);

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 100
    ) {
      edges {
        node {
          frontmatter {
            mainImage: main_image {
              publicURL
              extension
              childImageSharp {
                gatsbyImageData(
                  width: 754
                  quality: 95
                  placeholder: BLURRED
                  aspectRatio: 1.7777
                )
              }
            }
            slug
            title
            description
          }
        }
      }
    }
  }
`;

export default IndexPage;
