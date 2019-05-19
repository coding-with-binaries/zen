import React, { useEffect } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients } from '../../actions/client/Actions';
import { StoreState } from '../../types';
import { Clients as ClientsType } from '../../types/Client';
import Clients from '../common/clients';
import Spinner from '../common/spinner';

const ClientList: React.FC = () => {
  const clients: ClientsType = useSelector(
    (state: StoreState) => state.clients
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  return (
    <div className="zen-nav-drawer">
      <div className="nav-drawer-header">
        <span className="nav-drawer-title">View List of Clients</span>
        {clients.fetching ? (
          <Spinner size="sm" />
        ) : (
          clients.failed && (
            <FiAlertCircle
              size="32"
              fill="honeydew"
              color="39983d"
              title="Failed to fetch client list"
            />
          )
        )}
      </div>
      <div className="zen-client-list">
        <Clients clients={clients.payload.data} />
      </div>
    </div>
  );
};

export default ClientList;
