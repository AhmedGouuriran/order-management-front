// src/components/Sidebar.jsx
import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>Dashboard</li>
        <li>Products</li>
        <li>Orders</li>
        <li>Users</li>
        <li>History</li>
      </ul>
    </div>
  );
}

export default Sidebar;