import React from "react";

import './Sidebar.css';

const SidebarPrimary = () => {
  return (
    <nav className="sidebar">
      <div>
        <a href="/" className="sidebar-link">DASHBOARD</a>
      </div>
      <div>
        <a href="/" className="sidebar-link">MY COURSE</a>
      </div>
    </nav>
  );
}


export default SidebarPrimary;