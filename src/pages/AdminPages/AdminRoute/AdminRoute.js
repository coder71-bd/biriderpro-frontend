import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AdminRoute = ({ children, ...rest }) => {
  // const { user, admin, isLoading } = useAuth();
  const user = { email: true };
  const admin = true;
  const isLoading = false;
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
