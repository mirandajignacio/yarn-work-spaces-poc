import React, { FunctionComponent } from 'react';
import AuthController from '../../controllers/AuthController';
import { useAppDispatch, useAppState } from '../context/AppContext';

const Profile: FunctionComponent = () => {
  const fireApp = AuthController.fireApp();
  const { user } = useAppState();
  console.log('profile');
  const handleSignOut = () => {
    fireApp.signOut();
  };

  return (
    <div>
      Profile
      {/* <pre>
        <code>
          {JSON.stringify(user, null, 4)}
        </code>
      </pre> */}
      <button type="button" onClick={handleSignOut}>signout</button>
    </div>
  );
};

export default Profile;
