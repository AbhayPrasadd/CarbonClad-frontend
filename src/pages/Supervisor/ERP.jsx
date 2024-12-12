import React from "react";
import "./ERP.css";

const ERP = () => {
  return (
    <div className="erp-container">
      <h1 className="erp-title">ERP Dashboard</h1>
      <div className="erp-cards">
        <div className="erp-card">
          <h2>Employee Management</h2>
          <p>View and manage employee records, attendance, and payroll.</p>
          <button className="erp-button">Manage Employees</button>
        </div>
        <div className="erp-card">
          <h2>Inventory Management</h2>
          <p>Track stock levels, manage suppliers, and update inventory details.</p>
          <button className="erp-button">Manage Inventory</button>
        </div>
        <div className="erp-card">
          <h2>Finance</h2>
          <p>Monitor expenses, generate invoices, and view financial reports.</p>
          <button className="erp-button">View Finance</button>
        </div>
        <div className="erp-card">
          <h2>Project Management</h2>
          <p>Assign tasks, track progress, and manage project timelines.</p>
          <button className="erp-button">Manage Projects</button>
        </div>
        <div className="erp-card">
          <h2>Reports</h2>
          <p>Generate and download custom reports for analysis.</p>
          <button className="erp-button">Generate Reports</button>
        </div>
      </div>
    </div>
  );
};

export default ERP;
