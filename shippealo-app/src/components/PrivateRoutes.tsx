import React, { FunctionComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAppState } from './context/AppContext';
import PlatformLayout from './PlatformLayout';

const PrivateRoute: FunctionComponent = ({ children, path }) => {
  const { user } = useAppState();

  if (user === undefined) {
    return <div>loading</div>;
  }

  if (user === null) {
    return (
      <Redirect
        to={{
          pathname: '/autentificacion',
        }}
      />
    );
  }

  return (
    <Route path={path} exact>
      <PlatformLayout>
        {children}
      </PlatformLayout>
    </Route>
  );
};

export default PrivateRoute;
