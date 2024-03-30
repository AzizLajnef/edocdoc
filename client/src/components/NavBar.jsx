import React from 'react';
// import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/overview">Overview</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/my-patients">My Patients</Link></li>
        <li><Link to="/edit-profile">Edit Profile</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
