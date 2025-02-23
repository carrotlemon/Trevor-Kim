import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import CSS file for styling

function NavBar() {
  return (
    <div>
      <nav className="z-10 fixed top-0 left-0 w-full h-[60px] bg-gray-900 flex items-center justify-center px-5">
        <ul className="flex space-x-6 list-none m-0 p-0">
          <Link to="/"
            className="text-white px-4 py-2 block hover:text-white hover:bg-gray-600 rounded-md transition">
            Home
          </Link>
          <Link to="/sort"
            className="text-white px-4 py-2 block hover:text-white hover:bg-gray-600 rounded-md transition">
            Sort
          </Link>
          <Link to="/js"
            className="text-white px-4 py-2 block hover:text-white hover:bg-gray-600 rounded-md transition">
            JS
          </Link>
        </ul>
      </nav>
    </div>
      
  );
}

export default NavBar;