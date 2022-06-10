import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import './project-item.scss';

interface ProjectItemProps {
  image: any;
  slug: string;
  title: string;
  description?: string;
  large?: boolean;
}

const ProjectItem = ({
  image, slug, title, description, large,
} : ProjectItemProps) => {
  let imageComponent = <img src={image.publicURL} alt="" />;

  if (image.extension !== 'svg') {
    imageComponent = <GatsbyImage image={getImage(image)} alt="" />;
  }

  const viewProjectLink = (
    <span className="project-item-link-wrapper">
      <Link to={`/work/${slug}`} className="project-item-link">View project</Link>
      {' →'}

    </span>
  );
  return (
    <div className={`project-item${large ? ' --large' : ''}`}>
      <div className="project-item-image">
        <Link to={`/work/${slug}`}>
          {imageComponent}
        </Link>
      </div>
      <div className="project-details-wrapper">
        <div className="project-details">
          <div className="project-item-title">
            <Link to={`/work/${slug}`}>{title}</Link>
            {' '}
            {large ? (
              <>
                –
                {' '}
                {description}
                {' '}
                {viewProjectLink}
              </>
            ) : ''}
          </div>
          { !large && description ? (
            <div className="project-item-description">
              {description}
              {' '}
              {viewProjectLink}
            </div>
          ) : '' }
        </div>
      </div>
    </div>
  );
};

ProjectItem.defaultProps = {
  large: false,
  description: null,
};

export default ProjectItem;
