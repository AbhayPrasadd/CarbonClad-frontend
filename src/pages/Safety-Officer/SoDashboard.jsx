import React, { useState } from "react";
import "./SoDashboard.css";

const SafetyOfficerDashboard = () => {
  const [alerts, setAlerts] = useState([
    "High-risk hazard reported: ID #12345",
    "Control measure overdue: Hazard #67890",
  ]);

  const [recentHazards, setRecentHazards] = useState([
    {
      id: "H123",
      description: "Loose electrical wiring in shaft 3",
      reportedBy: "Operator - Jane Smith",
      date: "2024-12-08",
      riskLevel: 12,
      status: "Pending",
    },
    {
      id: "H124",
      description: "Slippery floor near conveyor belt",
      reportedBy: "Supervisor - John Doe",
      date: "2024-12-07",
      riskLevel: 15,
      status: "In Progress",
    },
  ]);

  const [trainingStats, setTrainingStats] = useState({
    trained: 45,
    total: 60,
  });

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Safety Officer Dashboard</h1>
        <p>{new Date().toLocaleString()}</p>
      </header>

      {/* Key Metrics */}
      <section className="metrics">
        <div className="metric">
          <h2>Total Hazards</h2>
          <p>25</p>
        </div>
        <div className="metric">
          <h2>High-Risk Hazards</h2>
          <p>5</p>
        </div>
        <div className="metric">
          <h2>Control Measures Pending</h2>
          <p>10</p>
        </div>
        <div className="metric">
          <h2>Training Progress</h2>
          <p>
            {trainingStats.trained}/{trainingStats.total} Workers Trained
          </p>
        </div>
      </section>

      {/* Alerts */}
      <section className="alerts">
        <h2>Alerts & Notifications</h2>
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>{alert}</li>
          ))}
        </ul>
      </section>

      {/* Recent Hazards */}
      <section className="recent-hazards">
        <h2>Recent Hazards</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Reported By</th>
              <th>Date</th>
              <th>Risk Level</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentHazards.map((hazard) => (
              <tr key={hazard.id}>
                <td>{hazard.id}</td>
                <td>{hazard.description}</td>
                <td>{hazard.reportedBy}</td>
                <td>{hazard.date}</td>
                <td>{hazard.riskLevel}</td>
                <td>{hazard.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Compliance Progress */}
      <section className="compliance">
        <h2>Compliance Monitoring</h2>
        <p>Inspection progress: 80% completed</p>
        <p>Audit logs: 10 pending</p>
      </section>

      {/* Training Management */}
      <section className="training">
        <h2>Training Management</h2>
        <p>
          {trainingStats.trained} out of {trainingStats.total} workers trained.
        </p>
        <p>Next scheduled training: 2024-12-15</p>
      </section>
    </div>
  );
};

export default SafetyOfficerDashboard;
