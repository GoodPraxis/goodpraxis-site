import React from 'react';

import './details-box.scss';

interface DetailsBoxProps {
  title: string;
  children: React.ReactNode;
}

const DetailsBox = ({ title, children }: DetailsBoxProps) => (
  <dl className="details-box">
    <dt>{title}</dt>
    <dd>{children}</dd>
  </dl>
);

export default DetailsBox;
