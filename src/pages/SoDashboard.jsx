import React, { useState, useEffect } from "react";
import "./SoDashboard.css"; // Optional: Add your custom CSS for styling

const SoDashboard = () => {
  const [alerts, setAlerts] = useState([]);
  const [shiftData, setShiftData] = useState([]);
  const [incidentReports, setIncidentReports] = useState([]);

  // Fetch data from API (mocked here for demonstration)
  useEffect(() => {
    fetchSafetyAlerts();
    fetchShiftData();
    fetchIncidentReports();
  }, []);

  const fetchSafetyAlerts = async () => {
    // Replace with your API endpoint
    const mockAlerts = [
      { id: 1, message: "Gas levels critical in Zone 3", severity: "High" },
      { id: 2, message: "Worker missing in Zone 7", severity: "Medium" },
    ];
    setAlerts(mockAlerts);
  };

  const fetchShiftData = async () => {
    // Replace with your API endpoint
    const mockShiftData = [
      { id: 1, workerName: "John Doe", shift: "Day", zone: "Zone 3" },
      { id: 2, workerName: "Jane Smith", shift: "Night", zone: "Zone 5" },
    ];
    setShiftData(mockShiftData);
  };

  const fetchIncidentReports = async () => {
    // Replace with your API endpoint
    const mockReports = [
      { id: 1, date: "2024-12-01", description: "Minor injury in Zone 1" },
      { id: 2, date: "2024-12-03", description: "Equipment failure in Zone 4" },
    ];
    setIncidentReports(mockReports);
  };

  return (
    <div className="dashboard">
      <h1>Coal Mine Safety Officer Dashboard</h1>

      <div className="section">
        <h2>Real-Time Safety Alerts</h2>
        <ul className="alerts-list">
          {alerts.map((alert) => (
            <li key={alert.id} className={`alert alert-${alert.severity.toLowerCase()}`}>
              {alert.message} <span>({alert.severity} Severity)</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Shift Management</h2>
        <table className="shift-table">
          <thead>
            <tr>
              <th>Worker Name</th>
              <th>Shift</th>
              <th>Zone</th>
            </tr>
          </thead>
          <tbody>
            {shiftData.map((shift) => (
              <tr key={shift.id}>
                <td>{shift.workerName}</td>
                <td>{shift.shift}</td>
                <td>{shift.zone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>Incident Reports</h2>
        <ul className="incident-list">
          {incidentReports.map((report) => (
            <li key={report.id}>
              <strong>Date:</strong> {report.date} - <strong>Details:</strong> {report.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SoDashboard;
