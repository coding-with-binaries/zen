import React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps
} from 'react-router-dom';

type Props = {
  authenticated: boolean;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
} & RouteProps;

const ProtectedRoute: React.FC<Props> = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  const renderComponent = (props: any) =>
    authenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    );
  return <Route {...rest} render={renderComponent} />;
};

export default ProtectedRoute;
