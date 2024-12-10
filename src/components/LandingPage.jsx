import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';



function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">CarbonClad</div>
        <div className="navbar-links">
          <button className="navbar-link" onClick={() => navigate('/about')}>
            About
          </button>
          <button className="navbar-link" onClick={() => navigate('/product')}>
            Product
          </button>
          <button className="navbar-link" onClick={() => navigate('/contact')}>
            Contact
          </button>
          <button className="navbar-button" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="landing-content">
        {/* Left Section: Image */}
        <div className="landing-image">
        <img
  src="https://cdn.example.com/images/coal-mine.jpg"
  alt="Coal Mine"
/>

        </div>

        {/* Right Section: Text */}
        <div className="landing-text">
          <h1>Welcome to the Mining Dashboard</h1>
          <p>
            CarbonClad provides a seamless and comprehensive solution for managing your mining operations. 
            Optimize productivity, ensure safety, and achieve efficiency with our cutting-edge tools.
          </p>
          <button className="cta-button" onClick={() => navigate('/login')}>
            Proceed to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
