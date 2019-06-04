import { FormikActions } from 'formik';
import React, { useState } from 'react';
import { addClient } from '../../api/Client';
import { Client } from '../../types/Client';
import ClientForm from '../common/client-form';
import './NewClient.css';

const NewClient: React.FC = () => {
  const [status, setStatus] = useState({ submitting: false, failed: false });

  const initialClient = {
    email: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: 'male',
    phoneNumber: ''
  };

  const submitClientData = (values: Client, actions: FormikActions<Client>) => {
    setStatus({ submitting: true, failed: false });
    addClient(values)
      .then(res => {
        setStatus({ submitting: false, failed: false });
        actions.resetForm();
      })
      .catch(err => {
        setStatus({ submitting: false, failed: true });
      });
  };

  return (
    <div className="zen-nav-drawer">
      <div className="nav-drawer-header">
        <span className="nav-drawer-title">Add a New Client</span>
      </div>
      <div className="zen-new-client">
        <ClientForm
          initialValues={initialClient}
          submitting={status.submitting}
          failed={status.failed}
          resetable={true}
          onSubmit={submitClientData}
        />
      </div>
    </div>
  );
};

export default NewClient;
