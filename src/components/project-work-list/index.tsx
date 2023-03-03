import React from 'react';
import ProjectItem from '../project-item';

import './project-work-list.scss';

export interface ProjectWorkListProps {
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

export const ProjectWorkList = (
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

export default ProjectWorkList;
