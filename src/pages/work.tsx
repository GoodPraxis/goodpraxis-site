import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ProjectWorkList, { ProjectWorkListProps } from '../components/project-work-list';
import SEO from '../components/seo';

const IndexPage = ({ data }: ProjectWorkListProps) => (
  <Layout activeItem="Our Work" description="Our Work">
    <SEO title="GOOD PRAXIS • Our Work" metaTitle="GOOD PRAXIS • Our Work" />
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
                  width: 755
                  quality: 90
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
