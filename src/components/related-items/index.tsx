import React from 'react';
import ItemList from '../item-list';

import './related-items.scss';

export interface RelatedItem {
  name: string;
  image: string;
  href: string;
}

const RelatedItemList = ({ items }: {items: RelatedItem[]}) => (
  <div className="related-items">
    <ItemList
      members={items.map(({ name, image, href }) => ({
        name,
        photo: image,
        href,
        description: name,
      }))}
    />
  </div>
);

export default RelatedItemList;
