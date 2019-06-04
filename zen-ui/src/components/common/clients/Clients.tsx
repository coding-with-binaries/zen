import React from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Client } from '../../../types/Client';
import './Clients.css';

interface Props {
  clients: Client[];
  editable?: boolean;
  onEditClick?: (client: Client) => void;
  onClick?: (client: Client) => void;
}

const Clients: React.FC<Props> = props => {
  const { clients, onClick, onEditClick } = props;

  const onClientClick = (index: number) => () => {
    if (onClick) {
      onClick(clients[index]);
    }
  };

  const onEditClientClick = (index: number) => () => {
    if (onEditClick) {
      onEditClick(clients[index]);
    }
  };

  return (
    <div className="zen-clients">
      {clients.map((c, i) => (
        <div key={c.zenId} className="zen-client-wrapper">
          <div className="zen-client" onClick={onClientClick(i)}>
            <span className="client-name">{`${c.firstName} ${
              c.lastName
            }`}</span>
            <div className="client-social">
              <span className="client-email">
                <strong>Email: </strong>
                {c.email}
              </span>
              <span className="client-phone">
                <strong>Phone: </strong>
                {c.phoneNumber}
              </span>
            </div>
            <div className="client-details">
              <span className="client-dob">
                <strong>Date of Birth: </strong>
                {new Date(c.dateOfBirth).toLocaleDateString()}
              </span>
              <span className="client-gender">
                <strong>Gender: </strong>
                {c.gender}
              </span>
            </div>
          </div>
          <div className="client-edit" onClick={onEditClientClick(i)}>
            <FiEdit3 />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clients;
