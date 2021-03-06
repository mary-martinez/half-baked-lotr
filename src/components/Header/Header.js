import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/films">
            Films
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/characters">
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/books">
            Books
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
