import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ReportGeneration from './components/ReportGeneration.jsx';
import Dashboard from './pages/Dashboard';
import SoDashboard from './pages/SoDashboard';
import Logbook from './pages/Logbook';
import Hazard from './pages/Hazard';
import LandingPage from './pages/LandingPage';
import Login from './pages/LoginPage';
import Checklist from './pages/Checklist.jsx';
import Chatbot from './components/Chatbot';

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
    const role = response.data.userRole; // 'ADMIN' or 'USER'
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

        {/* Role-Based Authenticated Routes */}
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
      </Routes>
    </Router>
  );
}

export default App;
