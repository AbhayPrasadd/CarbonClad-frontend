import React, { useState } from "react";
import "./HazardIdentification.css";

const HazardIdentification = ({
  hazardDescription,
  setHazardDescription,
  hazardType,
  setHazardType,
  addHazard,
}) => {
  const [commonHazards] = useState([
    "Roof collapse",
    "Gas explosion",
    "Flooding",
    "Machinery malfunction",
    "Other",
  ]);
  const [selectedHazard, setSelectedHazard] = useState("");
  const [newHazard, setNewHazard] = useState("");
  const [mechanism, setMechanism] = useState("");
  const [hazardLocation, setHazardLocation] = useState("");

  const handleAddHazard = () => {
    const hazardName = selectedHazard === "Other" ? newHazard : selectedHazard;
    if (!hazardName.trim()) {
      alert("Please enter a valid hazard.");
      return;
    }
    addHazard({ hazardName, hazardType, hazardLocation, mechanism, hazardDescription });
  };

  return (
    <div>
      {/* Common Hazards Dropdown */}
      <div className="input-group">
        <label htmlFor="common-hazards">Common Hazard Name</label>
        <select
          id="common-hazards"
          value={selectedHazard}
          onChange={(e) => setSelectedHazard(e.target.value)}
          className="input-field"
        >
          <option value="">Select a common hazard</option>
          {commonHazards.map((hazard, index) => (
            <option key={index} value={hazard}>
              {hazard}
            </option>
          ))}
        </select>
      </div>

      {/* New Hazard Input (visible only if "Other" is selected) */}
      {selectedHazard === "Other" && (
        <div className="input-group">
          <label htmlFor="new-hazard">Add a New Hazard</label>
          <input
            type="text"
            id="new-hazard"
            placeholder="Enter new hazard"
            value={newHazard}
            onChange={(e) => setNewHazard(e.target.value)} // Correctly updates state
            className="input-field"
          />
        </div>
      )}

      {/* Hazard Type Dropdown */}
      <div className="input-group">
        <label htmlFor="hazard-type">Hazard Type</label>
        <select
          id="hazard-type"
          value={hazardType}
          onChange={(e) => setHazardType(e.target.value)} // Correctly updates state
          className="input-field"
        >
          <option value="">Select Hazard Type</option>
          <option value="Physical">Physical</option>
          <option value="Chemical">Chemical</option>
          <option value="Ergonomic">Ergonomic</option>
        </select>
      </div>

      {/* Mechanism Dropdown */}
      <div className="input-group">
        <label htmlFor="mechanism">Mechanism</label>
        <select
          id="mechanism"
          value={mechanism}
          onChange={(e) => setMechanism(e.target.value)} // Correctly updates state
          className="input-field"
        >
          <option value="">Select how the hazard is caused</option>
          <option value="Human Error">Human Error</option>
          <option value="Equipment Failure">Equipment Failure</option>
          <option value="Environmental Factors">Environmental Factors</option>
          <option value="Poor Maintenance">Poor Maintenance</option>
        </select>
      </div>

      {/* Hazard Location */}
      <div className="input-group">
        <label htmlFor="hazard-location">Hazard Location</label>
        <input
          type="text"
          id="hazard-location"
          placeholder="Enter hazard location"
          value={hazardLocation}
          onChange={(e) => setHazardLocation(e.target.value)} // Correctly updates state
          className="input-field"
        />
      </div>

      {/* Hazard Description */}
      <div className="input-group">
        <label htmlFor="hazard-description">Hazard Description</label>
        <textarea
          id="hazard-description"
          placeholder="Describe the hazard..."
          value={hazardDescription}
          onChange={(e) => setHazardDescription(e.target.value)} // Correctly updates state
          className="textarea-field"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button className="submit-btn" onClick={handleAddHazard}>
        Add Hazard
      </button>
    </div>
  );
};

export default HazardIdentification;
