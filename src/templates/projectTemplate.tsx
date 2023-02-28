import React, { useEffect } from 'react';
import { graphql } from 'gatsby';

import { DetailsBox } from '@goodpraxis/components';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
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
        frontmatter: any
      }
    }[]
  }
}

const getOGImage = (images: {publicURL: string}[]) => {
  const filtered = images.filter((i) => i).map(({ publicURL }) => publicURL || '')
    .filter((img) => img.endsWith('png') || img.endsWith('jpg'));

  if (filtered.length > 0) {
    return `https://goodpraxis.coop${filtered[0]}`;
  }

  return null;
};

const createImageElement = (image : any) => {
  if (Array.isArray(image)) {
    const images = withArtDirection(getImage(image[1]), [
      {
        media: '(max-width: 768px)',
        image: getImage(image[0]),
      },
    ]);

    return <GatsbyImage image={images} alt="" />;
  }
  if (!image) {
    return '';
  }
  if (image.extension === 'svg') {
    return <img src={image.publicURL} alt="" />;
  }
  return <GatsbyImage image={getImage(image)} alt="" />;
};

const Template = ({
  data,
}: { data: TemplateData }) => {
  const { markdownRemark, allMarkdownRemark: { edges: relatedNodes } } = data;
  const {
    frontmatter: {
      client, title, heroImage, heroVideo, image1, image1Mobile, image2,
      image2Mobile, liveUrl, services, image1Border, image2Border,
      mainImage, slug, testimonial, testimonialAuthor, heroImageMobile,
    }, html,
  } = markdownRemark;
  // eslint-disable-next-line
  const articleHtml = parse(html) as JSX.Element[];
  // eslint-disable-next-line
  let firstParagraph: JSX.Element;
  // eslint-disable-next-line
  let restOfParagraphs: JSX.Element[] | string;

  const gatsbyHeroImage = createImageElement(
    heroImageMobile ? [heroImageMobile, heroImage] : heroImage,
  );
  const gatsbyImage1 = createImageElement(image1Mobile ? [image1Mobile, image1] : image1);
  const gatsbyImage2 = createImageElement(image2Mobile ? [image2Mobile, image2] : image2);

  // eslint-disable-next-line
  let processedTestimonialAuthor = <></>;

  if (testimonialAuthor) {
    const authorParts = testimonialAuthor.split(', ').concat([client]);
    processedTestimonialAuthor = (
      <>
        {authorParts[0]}
        ,
        <br />
        {authorParts[1]}
      </>
    );
  }

  useEffect(() => {
    const className = `project-${slug}`;
    document.body.classList.add(className);
    return () => {
      document.body.classList.remove(className);
    };
  });

  const relatedItems = relatedNodes.map(({
    node: {
      frontmatter: {
        title: itemTitle, slug: itemSlug, mainImage: itemImage,
      },
    },
  }) => (
    {
      title: itemTitle, image: itemImage, slug: itemSlug,
    }
  ));

  try {
    [firstParagraph] = articleHtml;
    restOfParagraphs = articleHtml.slice(1);
  } catch (e) {
    // eslint-disable-next-line
    firstParagraph = parse(html) as JSX.Element;
    restOfParagraphs = '';
  }
  return (
    <Layout activeItem="Work" description="Work" descriptionTo="/work">
      <SEO
        title={`GOOD PRAXIS • ${client}: ${title}`}
        metaTitle={`GOOD PRAXIS • ${client}: ${title}`}
        image={getOGImage([mainImage, heroImage || {}, image1, image2])}
        description={`A project for ${client} created by Good Praxis`}
      />
      <div className="project-page grid">
        <div className="project-page-title">{title}</div>
        <div
          className="project-page-description"
        >
          { firstParagraph }
        </div>
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
        <div className="project-page-images">
          <div className="project-page-image --main">
            { heroVideo ? (
              <video src={heroVideo} muted loop autoPlay />
            ) : (
              gatsbyHeroImage
            )}
          </div>
        </div>
        <div className="project-page-images">
          <div className={`project-page-image${image1Border ? ' --with-border' : ''}`}>
            { gatsbyImage1 }
          </div>
          <div className={`project-page-image${image2Border ? ' --with-border' : ''}`}>
            { gatsbyImage2 }
          </div>
        </div>
        <div className="project-page-description --more">
          { restOfParagraphs }
        </div>
        { testimonial ? (
          <figure className="project-page-testimonial">
            <blockquote className="project-page-testimonial-blockquote">
              {testimonial}
            </blockquote>
            <figcaption>{ processedTestimonialAuthor }</figcaption>
          </figure>
        ) : ''}
      </div>
      <section className="bar-links">
        <BarLink to="/studio#contact-us">Work with us on your next project</BarLink>
      </section>
      <hr />
      <RelatedItemList items={relatedItems} />
    </Layout>
  );
};

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
        testimonial
        testimonialAuthor: testimonial_author
        liveUrl: live_url
        mainImage: main_image {
          publicURL
        }
        heroImage: hero_image {
          publicURL
          extension
          childImageSharp {
            gatsbyImageData(
              width: 1538
              quality: 99
              placeholder: BLURRED
            )
          }
        }

        heroImageMobile: hero_image_mobile {
          publicURL
          extension
          childImageSharp {
            gatsbyImageData(
              width: 1538
              quality: 99
              placeholder: BLURRED
            )
          }
        }

        heroVideo: hero_video
        image1: image_1 {
          publicURL
          extension
          childImageSharp {
            gatsbyImageData(
              width: 1538
              quality: 98
              placeholder: BLURRED
            )
          }
        }
        image1Border: image_1_border
        image1Mobile: image_1_mobile {
          publicURL
          extension
          childImageSharp {
            gatsbyImageData(
              width: 716
              quality: 95
              placeholder: BLURRED
            )
          }
        }
        image2: image_2 {
          publicURL
          extension
          childImageSharp {
            gatsbyImageData(
              width: 1538
              quality: 98
              placeholder: BLURRED
            )
          }
        }
        image2Border: image_2_border
        image2Mobile: image_2_mobile {
          publicURL
          extension
          childImageSharp {
            gatsbyImageData(
              width: 716
              quality: 95
              placeholder: BLURRED
            )
          }
        }
      }
    }
    allMarkdownRemark(limit: 4, filter: {frontmatter: {slug: {ne: $slug}}}) {
      edges {
        node {
          frontmatter {
            slug
            title
            client
            mainImage: main_image {
              publicURL
              extension
              childImageSharp {
                gatsbyImageData(
                  width: 716
                  quality: 95
                  placeholder: BLURRED
                  aspectRatio: 1.7777
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default Template;
