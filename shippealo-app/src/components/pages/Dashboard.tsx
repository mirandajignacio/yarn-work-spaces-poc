import React, { FunctionComponent } from 'react';
import {
  Link,
} from 'react-router-dom';

const Dashboard: FunctionComponent = () => (
  <div>
    <ul>
      <li>
        <Link to="/autentificacion">sign</Link>
      </li>
      <li>
        <Link to="/perfil">profile</Link>
      </li>
    </ul>
    <div>Dashboard</div>
  </div>
);

export default Dashboard;
