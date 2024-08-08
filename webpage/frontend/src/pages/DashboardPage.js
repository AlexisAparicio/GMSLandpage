import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/">Item 1</Link></li>
          <li><Link to="/">Item 2</Link></li>
          <li><Link to="/">Item 3</Link></li>
          <li><Link to="/">Item 4</Link></li>
          <li><Link to="/">Item 5</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </nav>
      <main className="main-content">
        <h1>Dashboard</h1>
        {/* Aquí iría el contenido del dashboard */}
      </main>
    </div>
  );
};

export default DashboardPage;
