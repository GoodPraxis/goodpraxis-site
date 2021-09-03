import React from 'react';
import './project-work-list.scss';
import { StaticQuery, graphql } from 'gatsby';
import ProjectItem from '../project-item';

interface ProjectWorkListProps {
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

const ProjectWorkListPure = (
  { data: { allMarkdownRemark: { edges } } }: ProjectWorkListProps,
) => (
  <ul className="project-work-list">
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

const ProjectWorkList = () => (
  <StaticQuery
    query={graphql`
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
`}
    render={(data) => (
      <ProjectWorkListPure data={data} />
    )}
  />
);

export default ProjectWorkList;
