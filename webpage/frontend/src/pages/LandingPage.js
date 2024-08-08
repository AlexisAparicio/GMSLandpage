import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Bienvenido a Global Mind Solutions</h1>
      <img src="https://www.globalmindsolutions.com/wp-content/uploads/2021/06/Global-Mind-Solutions-Logo-1.png" alt="Global Mind Solutions" />
      <a href="/login">Iniciar Sesión</a>
    </div>
  );
};

export default LandingPage;
