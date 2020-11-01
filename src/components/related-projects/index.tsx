import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import RelatedItemList from '../related-items';

interface ProjectInformation {
  slug: string;
  client: string;
}

interface MarkdownProject {
  frontmatter: {
    slug: string;
    title: string;
    client: string;
    thumbnail: string;
  }
}

const RelatedProjectsPure = ({ data, project } : { data: any, project: ProjectInformation }) => {
  const { edges } = data.allMarkdownRemark;

  const processedItems = edges.sort((a : {node: MarkdownProject}, b : {node: MarkdownProject}) => {
    const aClient = a.node.frontmatter.client === project.client;
    const bClient = b.node.frontmatter.client === project.client;
    if (aClient && !bClient) {
      return -1;
    } if (!aClient && bClient) {
      return 1;
    }
    return 0;
  })
    .filter((a : {node: MarkdownProject}) => a.node.frontmatter.slug !== project.slug)
    .slice(0, 4);

  const items = processedItems.map(({
    node: {
      frontmatter: {
        title, slug, thumbnail,
      },
    },
  }: { node: MarkdownProject }) => (
    { name: title, image: thumbnail, href: `/work/${slug}` }
  ));

  return (
    <RelatedItemList items={items} />
  );
};

const RelatedProjects = ({ project } : { project: ProjectInformation }) => (
  <StaticQuery
    query={graphql`
  query {
    allMarkdownRemark(
      limit: 100
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            client
            thumbnail
          }
        }
      }
    }
  }
`}
    render={(data) => (
      <RelatedProjectsPure data={data} project={project} />
    )}
  />
);

export default RelatedProjects;
