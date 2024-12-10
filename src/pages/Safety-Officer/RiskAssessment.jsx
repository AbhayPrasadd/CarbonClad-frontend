import React, { useState } from "react";
import "./RiskAssessment.css";

const RiskAssessment = ({ hazards, setHazards }) => {
  const [selectedHazard, setSelectedHazard] = useState("");
  const [exposure, setExposure] = useState(1);
  const [consequence, setConsequence] = useState(1);

  const calculateRiskScore = () => {
    const riskScore = exposure * consequence;
    const updatedHazards = hazards.map((hazard) =>
      hazard.description === selectedHazard
        ? { ...hazard, riskScore }
        : hazard
    );
    setHazards(updatedHazards);
  };

  return (
    <div className="risk-assessment">
      <h2>Risk Assessment</h2>
      <div className="input-group">
        <label>Select Hazard</label>
        <select
          value={selectedHazard}
          onChange={(e) => setSelectedHazard(e.target.value)}
        >
          <option value="">Select a Hazard</option>
          {hazards.map((hazard, index) => (
            <option key={index} value={hazard.description}>
              {hazard.description}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <label>Exposure</label>
        <select
          value={exposure}
          onChange={(e) => setExposure(Number(e.target.value))}
        >
          <option value="1">1 - Rare</option>
          <option value="2">2 - Unlikely</option>
          <option value="3">3 - Possible</option>
          <option value="4">4 - Likely</option>
          <option value="5">5 - Almost Certain</option>
        </select>
      </div>
      <div className="input-group">
        <label>Consequence</label>
        <select
          value={consequence}
          onChange={(e) => setConsequence(Number(e.target.value))}
        >
          <option value="1">1 - Insignificant</option>
          <option value="2">2 - Minor</option>
          <option value="3">3 - Moderate</option>
          <option value="4">4 - Major</option>
          <option value="5">5 - Catastrophic</option>
        </select>
      </div>
      <button onClick={calculateRiskScore}>Calculate Risk</button>
    </div>
  );
};

export default RiskAssessment;
