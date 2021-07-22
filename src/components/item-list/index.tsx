import React from 'react';
import { Link } from 'gatsby';

import './item-list.scss';

export interface ItemMember {
  name: string;
  photo: string;
  description: string | React.ReactNode;
  href?: string;
}

interface ItemLink {
  href: string;
  children: React.ReactNode;
}

interface ItemListProps {
  members: ItemMember[];
}

const ItemList = ({ members }: ItemListProps) => (
  <div className="item-list">
    { members.map(({
      photo, description, href,
    }) => {
      const image = <img className="item-list-member-photo" src={photo} alt="" />;
      return (
        <div className="item-list-member" key={href}>
          { href ? <Link to={href}>{image}</Link> : image}
          { description }
        </div>
      );
    })}
  </div>
);

export default ItemList;
