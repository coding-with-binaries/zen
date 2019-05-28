import React from 'react';
import { Client } from '../../../types/Client';
import './Clients.css';

interface Props {
  clients: Client[];
  onClick?: (client: Client) => void;
}

const Clients: React.FC<Props> = props => {
  const { clients, onClick } = props;

  const onClientClick = (index: number) => () => {
    if (onClick) {
      onClick(clients[index]);
    }
  };

  return (
    <div className="zen-clients">
      {clients.map((c, i) => (
        <div key={c.zenId} className="zen-client" onClick={onClientClick(i)}>
          <div className="primary">
            <div className="name">{c.firstName + ' ' + c.lastName}</div>
            <div className="gender">{c.gender}</div>
            <div className="phone">{c.phoneNumber}</div>
          </div>
          <div className="secondary">
            <div className="dob">{c.dateOfBirth}</div>
            <div className="email">{c.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clients;
