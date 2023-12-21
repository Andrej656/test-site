// Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Your header content */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          {/* Add more navigation links */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
