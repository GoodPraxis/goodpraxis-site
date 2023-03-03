import React from 'react';
import ProjectItem from '../project-item';

import './related-items.scss';

export interface RelatedItem {
  image: any;
  slug: string;
  title: string;
}

const RelatedItemList = ({ items }: {items: RelatedItem[]}) => (
  <div className="related-items">
    { items.map(({
      slug, title, image,
    }) => (
      <ProjectItem key={slug} title={title} image={image} slug={slug} />
    ))}
  </div>
);

export default RelatedItemList;
