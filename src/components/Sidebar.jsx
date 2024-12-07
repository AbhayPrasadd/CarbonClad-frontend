import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BsFillHouseDoorFill,
  BsFillGearFill,
  BsFillBoxFill,
  BsQuestionCircle,
  BsFileText,
  BsDisplay,
  BsExclamationOctagon,
  BsExclamationTriangle
} from 'react-icons/bs';
import './Sidebar.css';

const Sidebar = ({ isExpanded }) => {
  // Navigation items for dynamic rendering
  const navigationItems = [
    { path: '/admin/dashboard', icon: <BsFillHouseDoorFill />, label: 'DASHBOARD', roles: ['USER'] },
    { path: '/user/home', icon: <BsFillHouseDoorFill />, label: 'HOME', roles: ['USER'] },
    { path: '/logbook', icon: <BsFillBoxFill />, label: 'LOGBOOK', roles: ['USER'] },
    { path: '/report', icon: <BsExclamationTriangle />, label: 'REPORT', roles: ['ADMIN'] },
    { path: '/smp', icon: <BsExclamationOctagon />, label: 'SMP', roles: ['ADMIN'] },
    { path: '/hazard', icon: <BsFileText />, label: 'HAZARD', roles: ['ADMIN'] },
    { path: '/erp', icon: <BsDisplay />, label: 'ERP', roles: ['ADMIN', 'USER'] },
    { path: '/help', icon: <BsQuestionCircle />, label: 'HELP', roles: ['ADMIN', 'USER'] },
    { path: '/settings', icon: <BsFillGearFill />, label: 'SETTINGS', roles: ['ADMIN', 'USER'] }
  ];

  // Filter navigation based on roles
  const userRole = localStorage.getItem('userRole'); // Fetch userRole from localStorage
  const filteredNavigation = navigationItems.filter((item) => item.roles.includes(userRole));

  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>

      <ul className="sidebar-list">
        {filteredNavigation.map((item, index) => (
          <li className="sidebar-list-item" key={index}>
            <NavLink to={item.path} className={({ isActive }) => (isActive ? 'active-link' : '')}>
              {item.icon}
              {isExpanded && <span className="sidebar-text">{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
