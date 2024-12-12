import React, { useState } from 'react';
import { BsJustify, BsPersonCircle, BsBell } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ toggleSidebar }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

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
        <div className="profile-container">
          <BsPersonCircle
            className="icon"
            title="Profile"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          />
          {dropdownVisible && (
            <div className="dropdown-menu">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
