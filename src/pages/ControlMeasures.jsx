import React from "react";
import "./ControlMeasures.css";

const ControlMeasures = ({ controlMeasures, setControlMeasures }) => {
  return (
    <div className="section">
      <h2>Control Measures</h2>
      <textarea
        placeholder="Describe control measures..."
        value={controlMeasures}
        onChange={(e) => setControlMeasures(e.target.value)}
      />
    </div>
  );
};

export default ControlMeasures;
