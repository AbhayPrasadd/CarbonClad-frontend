import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

//main components
import LandingPage from './components/LandingPage.jsx';
import Login from './components/LoginPage.jsx';
import Header from './components/Header';
import Registration from "./components/Registration.jsx";
import Sidebar from './components/Sidebar';
import Chatbot from './components/Chatbot';
import ReportGeneration from './pages/Safety-Officer/ReportGeneration.jsx';


//Supervisor interface
import Dashboard from './pages/Supervisor/Dashboard';
import Logbook from './pages/Supervisor/Logbook';
import Checklist from './pages/Supervisor/Checklist.jsx';
import SMPModule from './pages/Supervisor/SMPModule.jsx';
import Hazard from './pages/Supervisor/Hazard';

//Safety-Officer
import SoDashboard from './pages/Safety-Officer/SoDashboard.jsx';
//inspection logbook for safety officer
import SMPmanagement from './pages/Safety-Officer/SMPmanagment.jsx';
//control measures page
//task assignement module 
//report generation page 
import NewHazards from './pages/Safety-Officer/NewHazards.jsx';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated') === 'true';
    const storedRole = localStorage.getItem('userRole');
    setIsAuthenticated(storedAuth);
    setUserRole(storedRole);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleLogin = (response) => {

    //supervisor or Saffety-officer
    const role = response.data.userRole; 
    setIsAuthenticated(true);
    setUserRole(role);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userRole', role);
  };

  const ProtectedRoute = ({ element, requiredRole }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    if (requiredRole && userRole !== requiredRole) {
      return <Navigate to="/login" replace />;
    }
    return element;
  };

  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Registration />} />

        {/* Supervisor ROUTES*/}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute
              requiredRole="ADMIN"
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <Dashboard />
                  </main>
                  <Chatbot />
                </div>
              }
            />
          }
        />
        
        <Route
          path="/logbook"
          element={
            <ProtectedRoute
              requiredRole="ADMIN"
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <Logbook />
                  </main>
                </div>
              }
            />
          }
        />
          <Route
          path="/shiftHandover"
          element={
            <ProtectedRoute
              requiredRole="ADMIN"
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <Logbook />
                  </main>
                </div>
              }
            />
          }
        />
         <Route
          path="/smpModule"
          element={
            <ProtectedRoute
              requiredRole="ADMIN"
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <SMPModule />
                  </main>
                </div>
              }
            />
          }
        />
        
        
        <Route
          path="/report"
          element={
            <ProtectedRoute
              requiredRole="USER"
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <ReportGeneration />
                  </main>
                </div>
              }
            />
          }
        />
        <Route
          path="/smp"
          element={
            <ProtectedRoute
              requiredRole="ADMIN"
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <Checklist />
                  </main>
                </div>
              }
            />
          }
        />
        <Route
          path="/hazard"
          element={
            <ProtectedRoute
              requiredRole="ADMIN"
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <Hazard />
                  </main>
                  <Chatbot />
                </div>
              }
            />
          }
        />

        {/*SAFETY OFFICER ROUTES */}
        <Route
          path="/user/home"
          element={
            <ProtectedRoute
              requiredRole="USER"
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <SoDashboard />
                  </main>
                </div>
              }
            />
          }
        />
        <Route
          path="/SMPmanagement"
          element={
            <ProtectedRoute
              requiredRole="USER"
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <SMPmanagement />
                  </main>
                 
                </div>
              }
            />
          }
        />
        <Route
          path="/controlMeasures"
          element={
            <ProtectedRoute
              requiredRole="USER"
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <SMPmanagement />
                  </main>
                 
                </div>
              }
            />
          }
        />
        <Route
          path="/newHazards"
          element={
            <ProtectedRoute
              requiredRole="USER"
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <NewHazards/>
                  </main>
                 
                </div>
              }
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
