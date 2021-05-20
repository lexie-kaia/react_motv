import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Movie</Link>
      </li>
      <li>
        <Link to="/tv">Tv</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
      <li>
        <Link to="/detail">Detail</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
