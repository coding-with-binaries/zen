import React, { useEffect, useState } from 'react';
import { Client } from '../../types/Client';
import Clients from '../common/clients';
import './NewAppointment.css';

const NewAppointment: React.FC = () => {
  const [pattern, setPattern] = useState('');

  const [clients, setClients] = useState<Client[]>([]);

  const onClientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setPattern(e.target.value);
  };

  useEffect(() => {
    if (pattern !== '') {
      setClients([
        {
          clientId: 1,
          email: 'coding.with.binaries@gmail.com',
          dateOfBirth: '1995-09-06',
          firstName: 'Varun',
          gender: 'Male',
          lastName: 'Sharma',
          phoneNumber: '9686991295'
        },
        {
          clientId: 2,
          email: 'apoorvamishra211@gmail.com',
          dateOfBirth: '1994-12-04',
          firstName: 'Apoorva',
          gender: 'Female',
          lastName: 'Sharma',
          phoneNumber: '7087242143'
        }
      ]);
    }
  }, [pattern]);

  return (
    <div className="zen-nav-drawer">
      <div className="nav-drawer-header">
        <span className="nav-drawer-title">Book an appointment</span>
      </div>
      <div className="zen-new-appointment">
        <div className="zen-search-client">
          <input
            type="text"
            placeholder="Search Client"
            value={pattern}
            onChange={onClientChange}
          />
        </div>
        <div className="zen-clients-result">
          <Clients clients={clients} />
        </div>
      </div>
    </div>
  );
};

export default NewAppointment;
