import { FormikActions } from 'formik';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClient } from '../../actions/client/Actions';
import { StoreState } from '../../types';
import { Client, Clients } from '../../types/Client';
import ClientForm from '../common/client-form';
import './NewClient.css';

const NewClient: React.FC = () => {
  const initialClient = {
    email: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: 'male',
    phoneNumber: ''
  };

  const dispatch = useDispatch();
  const { submitting, submitFailed }: Clients = useSelector(
    (state: StoreState) => state.clientState
  );

  const actionsRef = useRef<FormikActions<Client>>();
  useEffect(() => {
    if (!submitting) {
      if (actionsRef.current) {
        actionsRef.current.resetForm();
      }
    }
  }, [submitting]);

  const submitClientData = (values: Client, actions: FormikActions<Client>) => {
    dispatch(addClient(values));
    actionsRef.current = actions;
  };

  return (
    <div className="zen-nav-drawer">
      <div className="nav-drawer-header">
        <span className="nav-drawer-title">Add a New Client</span>
      </div>
      <div className="zen-new-client">
        <ClientForm
          initialValues={initialClient}
          resetable={true}
          submitting={submitting}
          failed={submitFailed}
          onSubmit={submitClientData}
        />
      </div>
    </div>
  );
};

export default NewClient;
