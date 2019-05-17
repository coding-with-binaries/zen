import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../types';
import { Client } from '../../types/Client';
import Clients from '../common/clients';

const ClientList: React.FC = () => {
  const clients: Client[] = useSelector(
    (state: StoreState) => state.clients.payload.data
  );
  return (
    <div className="zen-nav-drawer">
      <div className="nav-drawer-header">
        <span className="nav-drawer-title">View List of Clients</span>
      </div>
      <div className="zen-client-list">
        <Clients clients={clients} />
      </div>
    </div>
  );
};

export default ClientList;
