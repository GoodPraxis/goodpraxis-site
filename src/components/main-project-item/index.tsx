import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ProjectItem from '../project-item';

const MainProjectItemPure = ({
  data: {
    markdownRemark:
    {
      frontmatter: {
        title, mainImage, slug, description,
      },
    },
  },
} : any) => (
  <ProjectItem
    title={title}
    image={mainImage}
    slug={slug}
    description={description}
    large
  />
);

const MainProjectItem = () => (
  <StaticQuery
    query={graphql`
  query {
    markdownRemark(frontmatter: {main_featured: {eq: true}}) {
      frontmatter {
        mainImage: main_image {
          publicURL
          extension
          childImageSharp {
            gatsbyImageData(
              width: 1570
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
`}
    render={(data) => (
      <MainProjectItemPure data={data} />
    )}
  />
);

export default MainProjectItem;
