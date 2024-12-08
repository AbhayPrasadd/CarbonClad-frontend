import React from 'react';
import { BsJustify, BsPersonCircle, BsBell } from 'react-icons/bs';
import './Header.css';

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      {/* Left Section: Logo and Hamburger Icon */}
      <div className="header-left">
        
        <div className="logo">
          <img src="/logo-preview.png" alt="Logo" />
        </div>
        <BsJustify className="hamburger-icon" onClick={toggleSidebar} />
      </div>

      {/* Right Section: Notification and Profile Icons */}
      <div className="header-right">
        <BsBell className="icon" title="Notification" />
        <BsPersonCircle className="icon" title="Profile" />
      </div>
    </header>
  );
}

export default Header;
