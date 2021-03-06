import React from 'react';
import ReactDOM from 'react-dom';
import WaitTime from './waitTime.jsx';

const Nav = ({statistic, user}) => (
  <nav className="navbar navbar-default navbar-inverse">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Help Reactor</a>

      { user && user.role !== 'admin' ? <WaitTime statistic={statistic}/> : null }

      <div className="dropdown navbar-right">
        <div className="dropdown-toggle navbar-profile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <img src="http://placehold.it/40x40" />
        </div>
        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="/api/logout">Logout</a></li>
        </ul>
      </div>

    </div>
  </nav>
);

export default Nav;
