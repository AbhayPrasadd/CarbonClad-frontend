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
  BsExclamationTriangle,
  BsPersonFill
} from 'react-icons/bs';
import './Sidebar.css';

const Sidebar = ({ isExpanded }) => {
  const navigationItems = [

    //supervisor sidebar
    { path: '/admin/dashboard', icon: <BsFillHouseDoorFill />, label: 'DASHBOARD', roles: ['ADMIN'] },
    { path: '/logbook', icon: <BsFillBoxFill />, label: 'LOGBOOK', roles: ['ADMIN'] },
    { path: '/shiftHandover', icon: <BsFillBoxFill />, label: 'CUSTOM LOGS', roles: ['ADMIN'] },
    { path: '/hazard', icon: <BsFileText />, label: 'HAZARD', roles: ['ADMIN'] },
    { path: '/smpModule', icon: <BsExclamationOctagon />, label: 'SAFETY MANAGEMENT', roles: ['ADMIN'] },
   

     //safety officer sidebar
    { path: '/user/home', icon: <BsFillHouseDoorFill />, label: 'Dashboard', roles: ['USER'] },
    { path: '/inspectionReport', icon: <BsExclamationOctagon />, label: 'Inspection Logbook', roles: ['USER'] },
    { path: '/SMPmanagement', icon: <BsExclamationOctagon />, label: 'Safety Mangement ', roles: ['USER'] },
    { path: '/controlMeasures', icon: <BsExclamationOctagon />, label: 'Control Measures ', roles: ['USER'] },
    { path: '/newHazards', icon: <BsExclamationOctagon />, label: 'Hazards', roles: ['USER'] },
    { path: '/compliance', icon: <BsExclamationOctagon />, label: 'Compliance', roles: ['USER'] },
    { path: '/report', icon: <BsExclamationTriangle />, label: 'REPORT', roles: ['USER'] },


     // Manager Sidebar
     { path: '/manager/dashboard', icon: <BsPersonFill />, label: 'Dashboard', roles: ['MANAGER'] },
     { path: '/customLogBook', icon: <BsFileText />, label: 'Custom Log', roles: ['MANAGER'] },
     
    
     
    //common to supervisor and safety-officer
    { path: '/erp', icon: <BsDisplay />, label: 'ERP', roles: ['ADMIN'] },
    { path: '/help', icon: <BsQuestionCircle />, label: 'HELP', roles: ['ADMIN', 'USER'] },
    { path: '/settings', icon: <BsFillGearFill />, label: 'SETTINGS', roles: ['ADMIN', 'USER'] },
  ];
  
   // Fetch user role from localStorage
  const userRole = localStorage.getItem('userRole'); 
  const filteredNavigation = navigationItems.filter((item) => item.roles.includes(userRole));

  return (
    //sidebar adjustment + sidebar labels 
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
