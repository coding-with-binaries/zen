import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { routes } from '../../constants/HomeConstants';
import { StoreState } from '../../types';
import ClientList from '../client-list';
import NavDrawer from '../nav-drawer';
import NewAppointment from '../new-appointment';
import Sidenav from '../side-nav';
import './Home.css';

const Home: React.FC = () => {
  const navDrawer: boolean = useSelector(
    (state: StoreState) => state.navDrawer
  );
  return (
    <div className="zen-home">
      <Sidenav />
      <NavDrawer open={navDrawer}>
        {navDrawer && (
          <>
            <Route path={routes.newAppointment} component={NewAppointment} />
            <Route path={routes.clientList} component={ClientList} />
          </>
        )}
      </NavDrawer>
    </div>
  );
};

export default Home;
