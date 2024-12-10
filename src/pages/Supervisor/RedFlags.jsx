import React, { useState } from "react";
import "./RedFlags.css";

function RedFlags({ redFlags, setRedFlags }) {
  const [newRedFlag, setNewRedFlag] = useState({
    description: "",
    severity: "",
    location: "",
  });

  const handleRedFlagChange = (event) => {
    const { name, value } = event.target;
    setNewRedFlag({ ...newRedFlag, [name]: value });
  };

  const addRedFlag = () => {
    if (newRedFlag.description && newRedFlag.severity && newRedFlag.location) {
      setRedFlags([...redFlags, newRedFlag]);
      setNewRedFlag({ description: "", severity: "", location: "" });
    } else {
      alert("Please fill out all fields before adding a red flag.");
    }
  };

  return (
    <div className="red-flag-section">
      <h2>Critical Operational Updates (Red Flags)</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Severity</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {redFlags.map((flag, index) => (
            <tr key={index}>
              <td>{flag.description}</td>
              <td>{flag.severity}</td>
              <td>{flag.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Input Fields Row */}
      <div className="red-flag-form-row">
        <input
          type="text"
          name="description"
          value={newRedFlag.description}
          onChange={handleRedFlagChange}
          placeholder="Enter description"
        />
        <select
          name="severity"
          value={newRedFlag.severity}
          onChange={handleRedFlagChange}
        >
          <option value="">Select Severity</option>
          <option value="Critical">Critical</option>
          <option value="High">High</option>
          <option value="Moderate">Moderate</option>
          <option value="Low">Low</option>
        </select>
        <input
          type="text"
          name="location"
          value={newRedFlag.location}
          onChange={handleRedFlagChange}
          placeholder="Enter location"
        />
      </div>

      {/* Button Row */}
      <div className="red-flag-form-button">
        <button onClick={addRedFlag} className="add-red-flag-btn">
          Add Red Flag
        </button>
      </div>
    </div>
  );
}

export default RedFlags;
