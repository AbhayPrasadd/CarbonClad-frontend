import React, { useState } from "react";
import "./HazardIdentification.css";

const HazardIdentification = ({ hazards, setHazards }) => {
  const [hazardDescription, setHazardDescription] = useState("");
  const [hazardType, setHazardType] = useState("");
  const [hazardMechanism, setHazardMechanism] = useState("");
  const [hazardLocation, setHazardLocation] = useState("");

  const handleAddHazard = () => {
    const newHazard = {
      description: hazardDescription,
      type: hazardType,
      mechanism: hazardMechanism,
      location: hazardLocation,
      riskScore: 0,
    };
    setHazards([...hazards, newHazard]);
    setHazardDescription("");
    setHazardType("");
    setHazardMechanism("");
    setHazardLocation("");
  };

  return (
    <div className="hazard-identification">
      <h2>Hazard Identification</h2>
      <div className="input-group">
        <label>Description</label>
        <input
          type="text"
          value={hazardDescription}
          onChange={(e) => setHazardDescription(e.target.value)}
          placeholder="Enter hazard description"
        />
      </div>
      <div className="input-group">
        <label>Type</label>
        <select value={hazardType} onChange={(e) => setHazardType(e.target.value)}>
          <option value="">Select Hazard Type</option>
          <option value="Physical">Physical</option>
          <option value="Chemical">Chemical</option>
          <option value="Biological">Biological</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="input-group">
        <label>Mechanism</label>
        <select value={hazardMechanism} onChange={(e) => setHazardMechanism(e.target.value)}>
          <option value="">Select Mechanism</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Electrical">Electrical</option>
          <option value="Explosive">Explosive</option>
        </select>
      </div>
      <div className="input-group">
        <label>Location</label>
        <select value={hazardLocation} onChange={(e) => setHazardLocation(e.target.value)}>
          <option value="">Select Location</option>
          <option value="Surface">Surface</option>
          <option value="Underground">Underground</option>
          <option value="Offsite">Offsite</option>
        </select>
      </div>
      <button onClick={handleAddHazard}>Add Hazard</button>
    </div>
  );
};

export default HazardIdentification;
