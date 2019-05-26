import React, { useEffect } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients } from '../../actions/client/Actions';
import { StoreState } from '../../types';
import { Clients as ClientsType } from '../../types/Client';
import Clients from '../common/clients';
import Spinner from '../common/spinner';

const ClientList: React.FC = () => {
  const clientState: ClientsType = useSelector(
    (state: StoreState) => state.clientState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  return (
    <div className="zen-nav-drawer">
      <div className="nav-drawer-header">
        <span className="nav-drawer-title">View List of Clients</span>
        {clientState.fetching ? (
          <Spinner size="sm" />
        ) : (
          clientState.failed && (
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
        <Clients clients={clientState.clients} />
      </div>
    </div>
  );
};

export default ClientList;
