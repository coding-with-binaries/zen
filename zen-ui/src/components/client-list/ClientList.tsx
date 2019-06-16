import React, { useEffect, useRef, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { FormikActions } from '../../../node_modules/formik';
import { editClient, fetchClients } from '../../actions/client/Actions';
import { StoreState } from '../../types';
import { Client, Clients as ClientsType } from '../../types/Client';
import ClientForm from '../common/client-form';
import Clients from '../common/clients';
import Spinner from '../common/spinner';
import './ClientList.css';

type Mode = 'view' | 'edit';

const ClientList: React.FC = () => {
  const clientState = useSelector<StoreState, ClientsType>(
    state => state.clientState
  );

  const [mode, setMode] = useState<Mode>('view');
  const [client, setClient] = useState<Client>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  const onEditClientClick = (c: Client) => {
    setMode('edit');
    setClient(c);
  };

  const actionsRef = useRef<FormikActions<Client>>();
  useEffect(() => {
    if (!clientState.submitting) {
      if (actionsRef.current) {
        actionsRef.current.resetForm();
      }
      setMode('view');
    }
  }, [clientState.submitting]);

  const submitClientData = (values: Client, actions: FormikActions<Client>) => {
    dispatch(editClient(values));
    actionsRef.current = actions;
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
              cancelable={true}
              submitting={clientState.submitting}
              failed={clientState.submitFailed}
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
