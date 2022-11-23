import React from "react";

import './Sidebar.css';

const SidebarPrimary = () => {
  return (
    <nav className="sidebar">
      <div>
        <a href="/" className="sidebar-link">DASHBOARD</a>
      </div>
      <div>
        <a href="/" className="sidebar-link">LEARNER PROFILE</a>
      </div>
      <div>
        <a href="/" className="sidebar-link">SUPPORT</a>
      </div>
      <div>
        <a href="/" className="sidebar-link">PROJECTS</a>
      </div>
      <div>
        <a href="/" className="sidebar-link">EXAMINATION</a>
      </div>
    </nav>
  );
}


export default SidebarPrimary;