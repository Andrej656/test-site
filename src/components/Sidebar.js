// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside>
      {/* Sidebar content */}
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/settings">Settings</a></li>
        {/* Add more sidebar links */}
      </ul>
    </aside>
  );
};

export default Sidebar;
