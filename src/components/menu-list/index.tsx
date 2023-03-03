// eslint-disable-next-line no-unused-vars
import React, { ReactNode } from 'react';

import './menu-list.scss';

interface Link {
  href: string;
  title: string;
}

interface MenuListProps {
  data: Link[];
  active?: number;
  renderer?: (link: Link) => ReactNode;
}

const MenuList = ({ data, active, renderer } : MenuListProps) => (
  <ol className="menu-list">
    {data.map(({ href, title }, index) => (
      <li key={title} className={`menu-list-item${index === active ? ' is-active' : ''}`}>
        {renderer && renderer({ href, title })}
      </li>
    ))}
  </ol>
);

MenuList.defaultProps = {
  active: 0,
  renderer: ({ href, title }: Link) => <a href={href}>{title}</a>,
};

export default MenuList;
