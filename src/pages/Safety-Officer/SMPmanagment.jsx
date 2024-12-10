import React, { useState } from "react";
import "./SMPmanagement.css";
import HazardIdentification from "./HazardIdentification";
import RiskAssessment from "./RiskAssessment";
import Results from "./Results";

const SMPmanagement = () => {
  const [activeComponent, setActiveComponent] = useState("HazardIdentification");
  const [hazards, setHazards] = useState([]);

  const renderComponent = () => {
    switch (activeComponent) {
      case "HazardIdentification":
        return <HazardIdentification hazards={hazards} setHazards={setHazards} />;
      case "RiskAssessment":
        return <RiskAssessment hazards={hazards} setHazards={setHazards} />;
      case "Results":
        return <Results hazards={hazards} />;
      default:
        return <div>Select a Component from above!</div>;
    }
  };

  return (
    <div className="smp-container">
      <div className="tab-container">
        <button
          className={activeComponent === "HazardIdentification" ? "active" : ""}
          onClick={() => setActiveComponent("HazardIdentification")}
        >
          Hazard Identification
        </button>
        <button
          className={activeComponent === "RiskAssessment" ? "active" : ""}
          onClick={() => setActiveComponent("RiskAssessment")}
        >
          Risk Assessment
        </button>
        <button
          className={activeComponent === "Results" ? "active" : ""}
          onClick={() => setActiveComponent("Results")}
        >
          Results
        </button>
      </div>
      <div className="component-container">{renderComponent()}</div>
    </div>
  );
};

export default SMPmanagement;
