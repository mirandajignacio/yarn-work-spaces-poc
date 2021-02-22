import React, { FuncionComponent } from 'react';
import { Link } from 'react-router-dom';

const PlatformLayout: FuncionComponent = ({ children }) => {
  console.log('Platform Layout');

  return (
    <div>
      <ul>
        <li>
          <Link to="/">dashboard</Link>
        </li>
        <li>
          <Link to="/desarrollo">carrera</Link>
        </li>
        <li>
          <Link to="/desarrollo/desarrollo">curso</Link>
        </li>
        <li>
          <Link to="/desarrollo/desarrollo/desarrollo">modulo</Link>
        </li>
        <li>
          <Link to="/desarrollo/desarrollo/desarrollo/desarrollo">capitulo</Link>
        </li>
        <li>
          <Link to="/perfil">profile</Link>
        </li>

      </ul>
      {children}
    </div>
  );
};

export default PlatformLayout;
