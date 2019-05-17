import React, { useCallback } from 'react';
import {
  FiBook,
  FiLogOut,
  FiPlus,
  FiPlusCircle,
  FiRotateCcw,
  FiUsers
} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { toggleNavDrawer } from '../../actions/NavDrawer';
import { routes } from '../../constants/HomeConstants';
import { StoreState } from '../../types';
import './Sidenav.css';

type Props = RouteComponentProps;

const Sidenav: React.FC<Props> = props => {
  const {
    history,
    location: { pathname }
  } = props;

  const navDrawer: boolean = useSelector(
    (state: StoreState) => state.navDrawer
  );

  const dispatch = useDispatch();
  const toggleDrawer = useCallback(() => dispatch(toggleNavDrawer()), [
    dispatch
  ]);

  const logout = () => history.push('/login');

  const onNavItemClick = (from: string) => () => {
    if (!navDrawer || (navDrawer && from === pathname)) {
      toggleDrawer();
    }
  };

  return (
    <div className="zen-sidenav">
      <div className="zen-sidenav-top">
        <NavLink
          to={routes.newAppointment}
          className="zen-sidenav-item"
          activeClassName="active"
          onClick={onNavItemClick(routes.newAppointment)}
        >
          <FiPlusCircle size="32" />
          <span className="title">New Appointment</span>
        </NavLink>
        <NavLink
          to={routes.appointmentHistory}
          className="zen-sidenav-item"
          activeClassName="active"
          onClick={onNavItemClick(routes.appointmentHistory)}
        >
          <FiRotateCcw size="32" />
          <span className="title">Appointment History</span>
        </NavLink>
        <NavLink
          to={routes.newClient}
          className="zen-sidenav-item"
          activeClassName="active"
          onClick={onNavItemClick(routes.newClient)}
        >
          <FiPlus size="32" />
          <span className="title">New Client</span>
        </NavLink>
        <NavLink
          to={routes.clientList}
          className="zen-sidenav-item"
          activeClassName="active"
          onClick={onNavItemClick(routes.clientList)}
        >
          <FiUsers size="32" />
          <span className="title">Client List</span>
        </NavLink>
        <NavLink
          to={routes.monthlyStats}
          className="zen-sidenav-item"
          activeClassName="active"
          onClick={onNavItemClick(routes.monthlyStats)}
        >
          <FiBook size="32" />
          <span className="title">Monthly Stats</span>
        </NavLink>
      </div>
      <div className="zen-sidenav-bottom">
        <div className="zen-sidenav-item" onClick={logout}>
          <FiLogOut size="32" />
          <span className="title">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Sidenav);
