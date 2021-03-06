import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { routes } from '../../constants/HomeConstants';
import { StoreState } from '../../types';
import AppointmentHistory from '../appointment-history';
import ClientList from '../client-list';
import MonthlyStats from '../monthly-stats';
import NavDrawer from '../nav-drawer';
import NewAppointment from '../new-appointment';
import NewClient from '../new-client';
import OrderHistory from '../orders/order-receipts';
import OrderSchedules from '../orders/order-schedules';
import Sidenav from '../side-nav';
import './Home.css';

const Home: React.FC = () => {
  const navDrawer = useSelector<StoreState, boolean>(state => state.navDrawer);
  return (
    <div className="zen-home">
      <Sidenav />
      <NavDrawer open={navDrawer}>
        {navDrawer && (
          <>
            <Route path={routes.newAppointment} component={NewAppointment} />
            <Route
              path={routes.appointmentHistory}
              component={AppointmentHistory}
            />
            <Route path={routes.newClient} component={NewClient} />
            <Route path={routes.clientList} component={ClientList} />
            <Route path={routes.monthlyStats} component={MonthlyStats} />
          </>
        )}
      </NavDrawer>
      <Route path={routes.newAppointment} component={OrderSchedules} />
      <Route path={routes.appointmentHistory} component={OrderHistory} />
    </div>
  );
};

export default Home;
