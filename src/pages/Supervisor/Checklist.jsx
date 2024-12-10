import React, { useState } from "react";
import './Checklist.css';

const SafetyMaterials = () => {
  const [materials, setMaterials] = useState([
    { id: 1, name: "Roof bolts, bearing plates", status: "Yes", action: "" },
    { id: 2, name: "Nuts, Grouting capsule", status: "Yes", action: "" },
    { id: 3, name: "Timber", status: "Yes", action: "" },
    { id: 4, name: "Brattice", status: "Yes", action: "" },
    { id: 5, name: "Sprags", status: "Yes", action: "" },
    { id: 6, name: "Other safety material (Specify)", status: "Yes", action: "" },
  ]);

  const handleChange = (id, field, value) => {
    const updatedMaterials = materials.map((material) =>
      material.id === id ? { ...material, [field]: value } : material
    );
    setMaterials(updatedMaterials);
  };

  return (
    <div className="safety-materials">
      <h2>Safety Materials</h2>
      <table>
        <thead>
          <tr>
            <th>Safety Material</th>
            <th>Condition (Yes/No)</th>
            <th>Remedial Action (if No)</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.id}>
              <td>{material.name}</td>
              <td>
                <select
                  value={material.status}
                  onChange={(e) => handleChange(material.id, "status", e.target.value)}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </td>
              <td>
                {material.status === "No" && (
                  <input
                    type="text"
                    placeholder="Enter action taken"
                    value={material.action}
                    onChange={(e) => handleChange(material.id, "action", e.target.value)}
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

export default SafetyMaterials;
