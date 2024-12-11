import React, { useState } from "react";
import "./LogbookBuilder.css";

const LogbookBuilder = () => {
  const [fields, setFields] = useState([]); // Manage dynamic fields
  const [selectedField, setSelectedField] = useState(""); // Track selected field type
  const [label, setLabel] = useState(""); // Track label for the current field

  const addField = () => {
    if (!selectedField || !label) {
      alert("Please select a field type and enter a label!");
      return;
    }

    const newField = {
      id: Date.now(),
      type: selectedField,
      label: label,
      options: selectedField === "dropdown" ? ["Option 1", "Option 2", "Option 3"] : null,
    };

    setFields([...fields, newField]);
    setSelectedField("");
    setLabel("");
  };

  const deleteField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const saveLogbook = () => {
    if (fields.some((field) => !field.label)) {
      alert("All fields must have a label!");
      return;
    }
    console.log("Logbook Structure:", fields);
    alert("Logbook saved! Check the console for the structure.");
  };

  return (
    <div className="logbook-builder">
      {/* Sidebar */}
      <div className="logbook-sidebar">
        <h2>Field Types</h2>
        <select
          value={selectedField}
          onChange={(e) => setSelectedField(e.target.value)}
          className="field-select"
        >
          <option value="">-- Select Field Type --</option>
          <option value="text">Text Input</option>
          <option value="number">Number Input</option>
          <option value="date">Date Picker</option>
          <option value="checkbox">Checkbox</option>
          <option value="dropdown">Dropdown</option>
        </select>

        <input
          type="text"
          placeholder="Enter Field Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="field-label-input"
        />
        <button onClick={addField} className="add-field-button">
          Add Field
        </button>
        <button onClick={saveLogbook} className="save-logbook-button">
          Save Logbook
        </button>
      </div>

      {/* Workspace */}
      <div className="logbook-workspace">
        <h2>Design Your Logbook</h2>
        <div className="logbook-area">
          {fields.length === 0 ? (
            <p>No fields added yet.</p>
          ) : (
            fields.map((field) => (
              <div key={field.id} className="logbook-field">
                <label>{field.label}</label>
                {field.type === "text" && <input type="text" />}
                {field.type === "number" && <input type="number" />}
                {field.type === "date" && <input type="date" />}
                {field.type === "checkbox" && <input type="checkbox" />}
                {field.type === "dropdown" && (
                  <select>
                    {field.options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
                <button
                  onClick={() => deleteField(field.id)}
                  className="delete-field-button"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LogbookBuilder;
