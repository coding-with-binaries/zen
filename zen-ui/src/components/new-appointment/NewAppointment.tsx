import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrderBlueprint } from '../../actions/order/blueprints/Actions';
import { searchClient } from '../../api/Client';
import { Client } from '../../types/Client';
import Clients from '../common/clients';
import './NewAppointment.css';

const NewAppointment: React.FC = () => {
  const [pattern, setPattern] = useState('');

  const [clients, setClients] = useState<Client[]>([]);

  const dispatch = useDispatch();

  const onClientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setPattern(e.target.value);
  };

  const onClientClick = (client: Client) => {
    dispatch(addOrderBlueprint(client));
  };

  useEffect(() => {
    if (pattern !== '') {
      searchClient(pattern).then(res => {
        setClients(res);
      });
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
          {pattern !== '' && (
            <Clients clients={clients} onClick={onClientClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NewAppointment;
