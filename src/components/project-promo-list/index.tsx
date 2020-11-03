import React from 'react';
import './project-promo-list.scss';
import { StaticQuery, graphql, Link } from 'gatsby';
import { ProjectPromo } from '@goodpraxis/components';

interface ProjectPromoListProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            client: string;
            color: string;
            services: string[];
            // eslint-disable-next-line
            main_image: string;
            // eslint-disable-next-line
            new_work: boolean;
            slug: string;
            style: 'light' | 'dark';
            title: string;
            type: string;
            featured: boolean;
          }
        }
      }[]
    }
  };
  featured: boolean;
}

const ProjectPromoListPure = (
  { data: { allMarkdownRemark: { edges } }, featured }: ProjectPromoListProps,
) => (
  <ul className="featured-promos">
    { edges
      .filter(({ node: { frontmatter: project } }) => !featured || project.featured)
      .map(({ node: { frontmatter: project } }) => (
        <li key={project.slug}>
          <Link to={`/work/${project.slug}`}>
            <ProjectPromo
              image={project.main_image}
              projectName={project.title}
              industry={project.client}
              capabilities={project.type}
              className="grid-lines"
              backgroundColor={project.color}
              promoStyle={project.style}
              isNewWork={project.new_work}
            />
          </Link>
        </li>
      )) }
  </ul>
);

const ProjectPromoList = ({ featured }: {featured?: boolean}) => (
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
            client
            color
            date(formatString: "MMMM DD, YYYY")
            featured
            services
            main_image
            new_work
            slug
            style
            thumbnail
            title
            type
          }
        }
      }
    }
  }
`}
    render={(data) => (
      <ProjectPromoListPure data={data} featured={featured} />
    )}
  />
);

ProjectPromoList.defaultProps = {
  featured: false,
};

export default ProjectPromoList;
