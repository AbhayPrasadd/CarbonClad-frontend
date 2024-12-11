import React from "react";
import "./Log2.css";

const Safetycheck = ({ materials, setMaterials }) => {
  const handleMaterialChange = (id, field, value) => {
    const updatedMaterials = materials.map((material) =>
      material.id === id ? { ...material, [field]: value } : material
    );
    setMaterials(updatedMaterials);
  };

  return (
    <div className="safety-and-ventilation">
      <h2>Safety Materials</h2>
      <table>
        <thead>
          <tr>
            <th>Material</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.id}>
              <td>{material.name}</td>
              <td>
                <select
                  value={material.status}
                  onChange={(e) =>
                    handleMaterialChange(material.id, "status", e.target.value)
                  }
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
                    onChange={(e) =>
                      handleMaterialChange(material.id, "action", e.target.value)
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

export default Safetycheck;
