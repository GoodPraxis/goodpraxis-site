import React from 'react';
import { graphql } from 'gatsby';

import { DetailsBox } from '@goodpraxis/components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import RelatedProjects from '../components/related-projects';
import parse from '../utils/parse';

import './project-page.scss';
import BarLink from '../components/bar-link';

interface TemplateData {
  markdownRemark: {
    frontmatter: any;
    html: string;
  };
}

const getOGImage = (images: string[]) => {
  const filtered = images.filter((img) => img.endsWith('png') || img.endsWith('jpg'));

  if (filtered.length > 0) {
    return `https://goodpraxis.coop${filtered[0]}`;
  }

  return null;
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: { data: TemplateData }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const {
    frontmatter: {
      client, title, slug, image_1: image1, image_2: image2, image_3: image3,
      live_url: liveUrl, services,
    }, html,
  } = markdownRemark;
  const articleHtml = parse(html) as JSX.Element[];
  let firstParagraph: JSX.Element;
  let restOfParagraphs: JSX.Element[] | string;

  try {
    [firstParagraph] = articleHtml;
    restOfParagraphs = articleHtml.slice(1);
  } catch (e) {
    firstParagraph = parse(html) as JSX.Element;
    restOfParagraphs = '';
  }
  return (
    <Layout activeItem="Work" description="Work" descriptionTo="/work">
      <SEO
        title={`${title} – Good Praxis`}
        metaTitle={`${title} – Good Praxis`}
        image={getOGImage([image1, image2, image3])}
        description={`A project for ${client} created by Good Praxis`}
      />
      <div className="project-page grid">
        <div className="project-page-title">{title}</div>
        <div className="project-page-details">
          <DetailsBox title="Client">{client}</DetailsBox>
          <DetailsBox title="Services">
            {
            services.map((service: string) => (
              <span key={service}>
                {service}
                <br />
              </span>
            ))
          }

          </DetailsBox>
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
        >
          { firstParagraph }
        </div>
        <div className="project-page-images">
          <div className="project-page-image --main">
            <img src={image1} alt="" />
          </div>
        </div>
        <div className="project-page-description">
          { restOfParagraphs }
        </div>
        <div className="project-page-images">
          <div className="project-page-image">
            <img src={image2} alt="" />
          </div>
          <div className="project-page-image">
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
      <section className="bar-links">
        <BarLink to="/studio#contact-us">Work with us on your next project</BarLink>
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
        services
        live_url
        image_1
        image_2
        image_3
      }
    }
  }
`;
