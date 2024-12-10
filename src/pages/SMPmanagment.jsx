import React, { useState } from "react";
import HazardIdentification from "./HazardIdentification";
import RiskAssessment from "./RiskAssessment";
import ControlMeasures from "./ControlMeasures";
import "./SMPmanagement.css";

const SMPmanagement = () => {
  const [activeComponent, setActiveComponent] = useState("HazardIdentification");

  // State for Hazard Identification
  const [hazardDescription, setHazardDescription] = useState("");
  const [hazardType, setHazardType] = useState("");
  const [hazards, setHazards] = useState([]);

  // State for Risk Assessment
  const [severity, setSeverity] = useState(1);
  const [likelihood, setLikelihood] = useState(1);

  // Function to handle adding a hazard
  const handleAddHazard = (hazardData) => {
    setHazards([...hazards, hazardData]);
    console.log("Hazard added:", hazardData);
  };

  // Function to render the active component
  const renderComponent = () => {
    switch (activeComponent) {
      case "HazardIdentification":
        return (
          <HazardIdentification
            hazardDescription={hazardDescription}
            setHazardDescription={setHazardDescription}
            hazardType={hazardType}
            setHazardType={setHazardType}
            addHazard={handleAddHazard}
          />
        );
      case "RiskAssessment":
        return (
          <RiskAssessment
            severity={severity}
            setSeverity={setSeverity}
            likelihood={likelihood}
            setLikelihood={setLikelihood}
          />
        );
      case "ControlMeasures":
        return (
          <ControlMeasures
            controlMeasures=""
            setControlMeasures={() => {}}
          />
        );
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
          className={activeComponent === "ControlMeasures" ? "active" : ""}
          onClick={() => setActiveComponent("ControlMeasures")}
        >
          Control Measures
        </button>
        <button
          className={activeComponent === "Summary" ? "active" : ""}
          onClick={() => setActiveComponent("Summary")}
        >
          Summary
        </button>
      </div>

      <div className="component-container">{renderComponent()}</div>
    </div>
  );
};

export default SMPmanagement;
