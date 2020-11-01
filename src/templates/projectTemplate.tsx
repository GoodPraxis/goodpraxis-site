import React from 'react';
import { graphql } from 'gatsby';

import { DetailsBox } from '@goodpraxis/components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import RelatedProjects from '../components/related-projects';

import './project-page.scss';
import BarLink from '../components/bar-link';

interface TemplateData {
  markdownRemark: {
    frontmatter: any;
    html: string;
  };
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: { data: TemplateData }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const {
    frontmatter: {
      client, title, slug, image_1: image1, image_2: image2, image_3: image3,
      live_url: liveUrl, type,
    }, html,
  } = markdownRemark;
  return (
    <Layout activeItem="Work">
      <SEO title="Work" />
      <div className="project-page grid">
        <div className="project-page-title">{title}</div>
        <div className="project-page-details">
          <DetailsBox title="Client">{client}</DetailsBox>
          <DetailsBox title="Type of work">{type}</DetailsBox>
          { liveUrl
            ? (
              <DetailsBox title="Website">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  {liveUrl}
                </a>
              </DetailsBox>
            )
            : ''}
        </div>
        <div
          className="project-page-description"
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="project-page-images">
          <div className="project-page-image">
            <img src={image1} alt="" />
          </div>
          <div className="project-page-image">
            <img src={image2} alt="" />
          </div>
          <div className="project-page-image">
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
      <section className="bar-links">
        <BarLink to="/studio#contact-us">Work with is on your next project</BarLink>
      </section>
      <hr />
      <RelatedProjects project={{ client, slug }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        type
        client
        live_url
        image_1
        image_2
        image_3
      }
    }
  }
`;
