import React from 'react';
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
        <img src={`/images/clients/${image}`} alt={name} title={name} />
      </div>
    ))}
  </div>
);

export default ClientList;
