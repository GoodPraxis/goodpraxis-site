import React from 'react';
import './project-promo-list.scss';
import { StaticQuery, graphql } from 'gatsby';
import ProjectItem from '../project-item';

interface ProjectPromoListProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            mainImage: any;
            slug: string;
            title: string;
            description: string;
          }
        }
      }[]
    }
  };
}

const ProjectPromoListPure = (
  { data: { allMarkdownRemark: { edges } } }: ProjectPromoListProps,
) => (
  <ul className="featured-promos">
    { edges
      .map(({
        node: {
          frontmatter: {
            slug, title, mainImage, description,
          },
        },
      }) => (
        <li key={slug}>
          <ProjectItem
            title={title}
            image={mainImage}
            slug={slug}
            description={description}
          />
        </li>
      )) }
  </ul>
);

const ProjectPromoList = () => (
  <StaticQuery
    query={graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
      filter: {frontmatter: {featured: {eq: true}, main_featured: {eq: false}}}
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
`}
    render={(data) => (
      <ProjectPromoListPure data={data} />
    )}
  />
);

export default ProjectPromoList;
