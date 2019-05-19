import React from 'react';
import { Client } from '../../../types/Client';
import './Clients.css';

interface Props {
  clients: Client[];
  onClick?: (client: Client) => void;
}

const Clients: React.FC<Props> = props => {
  const { clients } = props;
  return (
    <div className="zen-clients">
      {clients.map(c => (
        <div key={c.clientId} className="zen-client">
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
