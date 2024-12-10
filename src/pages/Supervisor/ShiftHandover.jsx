import React from "react";
import "./ShiftHandover.css";

const ShiftHandover = ({ handoverData }) => {
  return (
    <div className="handover-container">
      <h2>Coal Mine Shift Handover Details</h2>

      {/* Supervisor Details */}
      <div className="section">
        <h3>Supervisor Details</h3>
        <p>
          <strong>Name:</strong> {handoverData.supervisor || "N/A"}
        </p>
        <p>
          <strong>Date & Time:</strong>{" "}
          {handoverData.dateTime
            ? new Date(handoverData.dateTime).toLocaleString()
            : "N/A"}
        </p>
        <p>
          <strong>Shift:</strong> {handoverData.shift || "N/A"}
        </p>
      </div>

      {/* Location Details */}
      <div className="section">
        <h3>Location</h3>
        <p>
          <strong>Latitude:</strong> {handoverData.latitude || "N/A"}
        </p>
        <p>
          <strong>Longitude:</strong> {handoverData.longitude || "N/A"}
        </p>
      </div>

      {/* Safety Observations */}
      <div className="section">
        <h3>Safety Observations</h3>
        {handoverData.observations && handoverData.observations.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>Observation</th>
                <th>Action Taken</th>
              </tr>
            </thead>
            <tbody>
              {handoverData.observations.map((observation, index) => (
                <tr key={index}>
                  <td>{observation.safetyObservation}</td>
                  <td>{observation.actionTaken}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No safety observations available.</p>
        )}
      </div>

      {/* Red Flags */}
      <div className="section">
        <h3>Red Flags</h3>
        {handoverData.redFlags && handoverData.redFlags.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Severity</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {handoverData.redFlags.map((redFlag, index) => (
                <tr key={index}>
                  <td>{redFlag.description}</td>
                  <td>{redFlag.severity}</td>
                  <td>{redFlag.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No red flags reported.</p>
        )}
      </div>
    </div>
  );
};

export default ShiftHandover;
