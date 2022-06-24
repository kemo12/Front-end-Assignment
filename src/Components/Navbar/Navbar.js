import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Common/logo192.png';
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/compare">Comparsion</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
