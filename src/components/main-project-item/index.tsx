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
    showLogo
    logoPosition="right"
  />
);

const MainProjectItem = () => (
  <StaticQuery
    query={graphql`
  query {
    markdownRemark(frontmatter: {main_featured: {eq: true}}) {
      frontmatter {
        mainImage: main_featured_image {
          publicURL
          extension
          childImageSharp {
            gatsbyImageData(
              width: 1570
              quality: 95
              placeholder: BLURRED
              aspectRatio: 2
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
