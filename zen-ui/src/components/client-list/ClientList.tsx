import React, { useEffect, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { FormikActions } from '../../../node_modules/formik';
import { fetchClients } from '../../actions/client/Actions';
import { editClient } from '../../api/Client';
import { StoreState } from '../../types';
import { Client, Clients as ClientsType } from '../../types/Client';
import ClientForm from '../common/client-form';
import Clients from '../common/clients';
import Spinner from '../common/spinner';
import './ClientList.css';

type Mode = 'view' | 'edit';

const ClientList: React.FC = () => {
  const clientState: ClientsType = useSelector(
    (state: StoreState) => state.clientState
  );

  const [mode, setMode] = useState<Mode>('view');
  const [client, setClient] = useState<Client>();
  const [status, setStatus] = useState({ submitting: false, failed: false });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  const onEditClientClick = (c: Client) => {
    setMode('edit');
    setClient(c);
  };

  const submitClientData = (values: Client, actions: FormikActions<Client>) => {
    setStatus({ submitting: true, failed: false });
    editClient(values)
      .then(res => {
        setStatus({ submitting: false, failed: false });
        actions.resetForm();
        setMode('view');
      })
      .catch(err => {
        setStatus({ submitting: false, failed: true });
      });
  };

  return (
    <div className="zen-nav-drawer">
      <div className="nav-drawer-header">
        <span className="nav-drawer-title">
          {mode === 'view' ? 'View List of Clients' : 'Edit Client'}
        </span>
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
      {mode === 'view' ? (
        <div className="zen-client-list">
          <Clients
            clients={clientState.clients}
            editable={true}
            onEditClick={onEditClientClick}
          />
        </div>
      ) : (
        client && (
          <div className="zen-client-edit">
            <ClientForm
              initialValues={client}
              submitting={status.submitting}
              cancelable={true}
              failed={status.failed}
              onCancel={() => setMode('view')}
              onSubmit={submitClientData}
            />
          </div>
        )
      )}
    </div>
  );
};

export default ClientList;
