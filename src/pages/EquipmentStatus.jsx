import React, { useState } from "react";
import "./EquipmentStatus.css";

function EquipmentStatus({ equipment, setEquipment }) {
  const [equipmentName, setEquipmentName] = useState("");
  const [equipmentStatus, setEquipmentStatus] = useState("");

  const handleAddEquipment = () => {
    if (!equipmentName || !equipmentStatus) {
      alert("Please select equipment and its status!");
      return;
    }

    setEquipment((prev) => [
      ...prev,
      { name: equipmentName, status: equipmentStatus },
    ]);

    // Reset fields
    setEquipmentName("");
    setEquipmentStatus("");
  };

  return (
    <div className="equipment-status-container">
      <h2>Equipment Status</h2>

      <div className="input-group">
        <label htmlFor="equipment-dropdown">Equipment Name</label>
        <select
          id="equipment-dropdown"
          value={equipmentName}
          onChange={(e) => setEquipmentName(e.target.value)}
          className="input-field"
        >
          <option value="">Select Equipment</option>
          <option value="Ventilation Fan">Ventilation Fan</option>
          <option value="Conveyor Belt">Conveyor Belt</option>
          <option value="Drill Machine">Drill Machine</option>
          <option value="Pump">Pump</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="equipment-status-dropdown">Status</label>
        <select
          id="equipment-status-dropdown"
          value={equipmentStatus}
          onChange={(e) => setEquipmentStatus(e.target.value)}
          className="input-field"
        >
          <option value="">Select Status</option>
          <option value="Working">Working</option>
          <option value="Needs Repair">Needs Repair</option>
          <option value="Not Operational">Not Operational</option>
        </select>
      </div>

      <button onClick={handleAddEquipment} className="add-btn">
        Add Equipment
      </button>

      {/* List of Added Equipment */}
      <ul className="equipment-list">
        {equipment.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EquipmentStatus;
