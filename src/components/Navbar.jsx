import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import CSS file for styling

function NavBar() {
  return (
    <nav className="topbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sort">Sort</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;