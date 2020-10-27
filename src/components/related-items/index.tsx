import React from 'react';
import { Link } from 'gatsby';
import { ItemList } from '@goodpraxis/components';

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
      renderer={({ children, href } : any) => <Link to={href}>{children}</Link>}
    />
  </div>
);

export default RelatedItemList;
