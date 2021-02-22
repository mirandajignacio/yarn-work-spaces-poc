import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import AuthController from '../../controllers/AuthController';
import { useAppState } from '../context/AppContext';

const Auth: FunctionComponent = () => {
  const fireApp = AuthController.fireApp();
  const { user } = useAppState();

  const handleGoogleSignIn = () => {
    fireApp.googleSignIn();
  };

  if (user === undefined) {
    return <div>loading</div>;
  }

  if (user === null) {
    return (
      <div>
        Auth
        <button type="button" onClick={handleGoogleSignIn}>google</button>
      </div>
    );
  }

  return (
    <Redirect
      to={{
        pathname: '/',
      }}
    />
  );
};

export default Auth;
