import React, { useState } from "react";
import './VentilationDevices.css';

const VentilationDevices = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: "Air crossing", condition: "Yes", action: "" },
    { id: 2, name: "Stopping", condition: "Yes", action: "" },
    { id: 3, name: "Doors", condition: "Yes", action: "" },
  ]);

  const handleChange = (id, field, value) => {
    const updatedDevices = devices.map((device) =>
      device.id === id ? { ...device, [field]: value } : device
    );
    setDevices(updatedDevices);
  };

  return (
    <div className="ventilation-devices">
      <h2>Ventilation Devices/Appliances</h2>
      <table>
        <thead>
          <tr>
            <th>Device/Appliance</th>
            <th>Condition (Yes/No)</th>
            <th>Remedial Action (if No)</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id}>
              <td>{device.name}</td>
              <td>
                <select
                  value={device.condition}
                  onChange={(e) => handleChange(device.id, "condition", e.target.value)}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </td>
              <td>
                {device.condition === "No" && (
                  <input
                    type="text"
                    placeholder="Enter action taken"
                    value={device.action}
                    onChange={(e) => handleChange(device.id, "action", e.target.value)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VentilationDevices;
