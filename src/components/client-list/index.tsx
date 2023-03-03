import React from 'react';
import { Link } from 'gatsby';
import Logo from '../logo';

import './client-list.scss';

interface ClientItem {
  name: string;
  image: string;
}

interface ClientListProps {
  clients: ClientItem[];
}

const ClientList = ({ clients }: ClientListProps) => (
  <div className="client-list grid">
    { clients.map(({ name, image }) => (
      <div className="client-list-item" key={name}>
        <img
          src={`/images/clients/${image}`}
          alt={name}
          title={name}
          loading="lazy"
        />
      </div>
    ))}
    <div className="client-list-item client-list-item--logo">
      <Link to="/studio#contact-us">
        <Logo text="Work with us • Work with us •" fontSize={31.3} animated animationDuration={10} />
      </Link>
    </div>
  </div>
);

export default ClientList;
