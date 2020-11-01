import React from 'react';
import { Link } from 'gatsby';
import './bar-link.scss';

interface BarLinkProps {
  to: string;
  children: React.ReactNode;
}

const BarLink = ({ to, children }: BarLinkProps) => (
  <Link className="bar-link grid" to={to}>
    <span className="bar-link-content">{children}</span>
  </Link>
);

export default BarLink;
