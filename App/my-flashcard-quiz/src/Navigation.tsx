// Navigation.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
      <ul>
        {/* <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        </li> */}
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={({ isActive }) => isActive ? 'active' : ''}>Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;