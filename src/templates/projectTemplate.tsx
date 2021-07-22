import React from 'react';
import { graphql } from 'gatsby';

import { DetailsBox } from '@goodpraxis/components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import parse from '../utils/parse';

import './project-page.scss';
import BarLink from '../components/bar-link';
import RelatedItemList from '../components/related-items';

interface TemplateData {
  markdownRemark: {
    frontmatter: any;
    html: string;
  }
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          slug: string;
          title: string;
          client: string;
          thumbnail: string;
        }
      }
    }[]
  }
}

const getOGImage = (images: string[]) => {
  const filtered = images.filter((img) => img.endsWith('png') || img.endsWith('jpg'));

  if (filtered.length > 0) {
    return `https://goodpraxis.coop${filtered[0]}`;
  }

  return null;
};

export default function Template({
  data,
}: { data: TemplateData }) {
  const { markdownRemark, allMarkdownRemark: { edges: relatedNodes } } = data;
  const {
    frontmatter: {
      client, title, hero_image: heroImage, hero_video: heroVideo,
      image_1: image1, image_2: image2, live_url: liveUrl, services,
    }, html,
  } = markdownRemark;
  const articleHtml = parse(html) as JSX.Element[];
  let firstParagraph: JSX.Element;
  let restOfParagraphs: JSX.Element[] | string;

  const relatedItems = relatedNodes.map(({
    node: {
      frontmatter: {
        title: itemTitle, slug: itemSlug, thumbnail: itemThumbnail,
      },
    },
  }) => (
    { name: itemTitle, image: itemThumbnail, href: `/work/${itemSlug}` }
  ));

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
        title={`GOOD PRAXIS • ${client}: ${title}`}
        metaTitle={`GOOD PRAXIS • ${client}: ${title}`}
        image={getOGImage([heroImage || '', image1, image2])}
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
                  {liveUrl.split('://')[1]}
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
            { heroVideo ? (
              <video src={heroVideo} muted loop autoPlay />
            ) : (
              <img src={heroImage} alt="" />
            )}
          </div>
        </div>
        <div className="project-page-description">
          { restOfParagraphs }
        </div>
        <div className="project-page-images">
          <div className="project-page-image">
            <img src={image1} alt="" />
          </div>
          <div className="project-page-image">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
      <section className="bar-links">
        <BarLink to="/studio#contact-us">Work with us on your next project</BarLink>
      </section>
      <hr />
      <RelatedItemList items={relatedItems} />
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
        hero_image
        hero_video
        image_1
        image_2
      }
    }
    allMarkdownRemark(limit: 4, filter: {frontmatter: {slug: {ne: $slug}}}) {
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
`;
