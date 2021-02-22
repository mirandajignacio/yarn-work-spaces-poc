import React, { FunctionComponent } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Career from './src/components/pages/learning/Career';
import Course from './src/components/pages/learning/Course';
import Module from './src/components/pages/learning/Module';
import Chapter from './src/components/pages/learning/Chapter';
import Dashboard from './src/components/pages/Dashboard';
import Auth from './src/components/pages/Auth';
import PrivateRoute from './src/components/PrivateRoutes';
import Profile from './src/components/pages/Profile';

const App: FunctionComponent = () => {
  console.log('App');

  return (
    <Router>
      <Switch>
        <Route path="/autentificacion" exact>
          <Auth />
        </Route>

        <Route path="/perfil/:mote" exact>
          <Profile />
        </Route>

        <PrivateRoute path="/perfil">
          <Profile />
        </PrivateRoute>

        <PrivateRoute path="/:career/:course/:module/:chapter">
          <Chapter />
        </PrivateRoute>

        <PrivateRoute path="/:career/:course/:module">
          <Module />
        </PrivateRoute>

        <PrivateRoute path="/:career/:course">
          <Course />
        </PrivateRoute>

        <PrivateRoute path="/:career">
          <Career />
        </PrivateRoute>

        <PrivateRoute path="/">
          <Dashboard />
        </PrivateRoute>

      </Switch>

    </Router>
  );
};

export default App;
