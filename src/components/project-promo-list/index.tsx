import React from 'react';
import './project-promo-list.scss';
import { StaticQuery, graphql } from 'gatsby';
import ProjectItem from '../project-item';
import useIsRevealed from '../../utils/is-revealed';

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
) => {
  const [ref, isRevealed] = useIsRevealed({ threshold: 0.1 });
  return (
    <ul
      className={`featured-promos${isRevealed ? ' is-visible' : ''}`}
      ref={ref}
    >
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
};

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
                  width: 754
                  quality: 98
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
