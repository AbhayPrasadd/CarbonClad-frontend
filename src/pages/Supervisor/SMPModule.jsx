import React, { useState } from "react";

import AssignedTasks from "./AssignedTasks";
import ReportsFeedback from "./ReportsFeedback";
import ComplianceMonitoring from "./ComplianceMonitoring";
import IncidentLog from "./IncidentLog";
import "./SMPModule.css";

const SMPModule = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <Overview />;
      case "AssignedTasks":
        return <AssignedTasks />;
      case "ReportsFeedback":
        return <ReportsFeedback />;
      case "ComplianceMonitoring":
        return <ComplianceMonitoring />;
      case "IncidentLog":
        return <IncidentLog />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="smp-module">
      <h1>Safety Management Plan</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab("Overview")} className={activeTab === "Overview" ? "active" : ""}>
          Overview
        </button>
        <button onClick={() => setActiveTab("AssignedTasks")} className={activeTab === "AssignedTasks" ? "active" : ""}>
          Assigned Tasks
        </button>
        <button onClick={() => setActiveTab("ReportsFeedback")} className={activeTab === "ReportsFeedback" ? "active" : ""}>
          Reports & Feedback
        </button>
        <button onClick={() => setActiveTab("ComplianceMonitoring")} className={activeTab === "ComplianceMonitoring" ? "active" : ""}>
          Compliance Monitoring
        </button>
        <button onClick={() => setActiveTab("IncidentLog")} className={activeTab === "IncidentLog" ? "active" : ""}>
          Incident Log
        </button>
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default SMPModule;
