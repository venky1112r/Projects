import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = ({ email }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 p-3">
      {/* <a className="navbar-brand fw-bold text-success" href="#">G.A.G.E.</a> */}
      <h1 className="display-4 fw-bold text-success">G.A.G.E.</h1>
      
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink to="/dashboard" className="nav-link nav-link-custom">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sourcing" className="nav-link nav-link-custom">Sourcing</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/reporting" className="nav-link nav-link-custom">Reporting</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings" className="nav-link nav-link-custom">Settings</NavLink>
          </li>
        </ul>
      </div>

      <div className="d-flex align-items-center text-dark">
        <span className="me-3"><strong>User:</strong> {email}</span>
        <div className="rounded-circle bg-success text-white fw-bold d-flex justify-content-center align-items-center" style={{ width: 50, height: 50 }}>
          {email.charAt(0).toUpperCase()}
        </div>
      </div>
    </nav>
  );
};

export default Header;
