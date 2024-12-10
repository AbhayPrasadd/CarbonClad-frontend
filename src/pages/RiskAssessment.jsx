import React, { useEffect, useState } from "react";
import "./RiskAssessment.css";

const RiskAssessment = ({ severity, setSeverity, likelihood, setLikelihood }) => {
  const [riskLevel, setRiskLevel] = useState("Low");
  const [selectedHazard, setSelectedHazard] = useState("");

  // Predefined list of hazards
  const hazards = [
    "Roof Collapse",
    "Gas Explosion",
    "Flooding",
    "Machinery Malfunction",
    "Fire",
  ];

  // DGMS Risk Matrix
  const riskMatrix = [
    ["Low", "Low", "Medium", "High", "Critical"],
    ["Low", "Medium", "Medium", "High", "Critical"],
    ["Medium", "Medium", "High", "High", "Critical"],
    ["High", "High", "High", "Critical", "Critical"],
    ["High", "High", "Critical", "Critical", "Critical"],
  ];

  // Calculate the risk level whenever severity and likelihood change
  useEffect(() => {
    if (severity && likelihood) {
      const calculatedRisk = riskMatrix[likelihood - 1][severity - 1];
      setRiskLevel(calculatedRisk);
    } else {
      setRiskLevel("Low");
    }
  }, [severity, likelihood]);

  return (
    <div className="risk-assessment-container">
      <h2>Risk Assessment</h2>

      {/* Hazard Dropdown */}
      <div className="input-group">
        <label htmlFor="hazard-dropdown">Select Hazard</label>
        <select
          id="hazard-dropdown"
          value={selectedHazard}
          onChange={(e) => setSelectedHazard(e.target.value)}
          className="dropdown"
        >
          <option value="">Select a Hazard</option>
          {hazards.map((hazard, index) => (
            <option key={index} value={hazard}>
              {hazard}
            </option>
          ))}
        </select>
      </div>

      {/* Severity Dropdown */}
      <div className="input-group">
        <label htmlFor="severity-dropdown">Severity</label>
        <select
          id="severity-dropdown"
          value={severity}
          onChange={(e) => setSeverity(Number(e.target.value))}
          className="dropdown"
          disabled={!selectedHazard} // Disable until a hazard is selected
        >
          <option value="">Select Severity</option>
          <option value="1">1 - Insignificant</option>
          <option value="2">2 - Minor</option>
          <option value="3">3 - Moderate</option>
          <option value="4">4 - Major</option>
          <option value="5">5 - Catastrophic</option>
        </select>
      </div>

      {/* Likelihood Dropdown */}
      <div className="input-group">
        <label htmlFor="likelihood-dropdown">Likelihood</label>
        <select
          id="likelihood-dropdown"
          value={likelihood}
          onChange={(e) => setLikelihood(Number(e.target.value))}
          className="dropdown"
          disabled={!selectedHazard} // Disable until a hazard is selected
        >
          <option value="">Select Likelihood</option>
          <option value="1">1 - Rare</option>
          <option value="2">2 - Unlikely</option>
          <option value="3">3 - Possible</option>
          <option value="4">4 - Likely</option>
          <option value="5">5 - Almost Certain</option>
        </select>
      </div>

      {/* Risk Level Display */}
      <div className={`risk-level ${riskLevel.toLowerCase()}`}>
        <p>
          Risk Level: <strong>{riskLevel}</strong>
        </p>
      </div>
    </div>
  );
};

export default RiskAssessment;
