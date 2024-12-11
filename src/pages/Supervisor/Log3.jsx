import React from "react";
import "./Log3.css";

const LogbookForm = ({ devices, setDevices }) => {
  const handleDeviceChange = (id, field, value) => {
    const updatedDevices = devices.map((device) =>
      device.id === id ? { ...device, [field]: value } : device
    );
    setDevices(updatedDevices);
  };

  return (
    <div className="ventilation-devices">
      <h2>Ventilation Devices</h2>
      <table>
        <thead>
          <tr>
            <th>Device</th>
            <th>Condition</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id}>
              <td>{device.name}</td>
              <td>
                <select
                  value={device.condition}
                  onChange={(e) =>
                    handleDeviceChange(device.id, "condition", e.target.value)
                  }
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
                    onChange={(e) =>
                      handleDeviceChange(device.id, "action", e.target.value)
                    }
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

export default LogbookForm;
