import React, { useState } from "react";
import "./Log1.css";

const BasicDetails = ({ details, setDetails }) => {
  const [formState, setFormState] = useState(details);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = () => {
    // Update the parent state when input loses focus
    setDetails(formState);
  };

  return (
    <div className="basic-details">
      <h2>Basic Details</h2>
      <div className="form-group">
        <label>Supervisor Name:</label>
        <input
          type="text"
          name="supervisorName"
          value={formState.supervisorName || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter supervisor's name"
        />
      </div>

      <div className="form-group">
        <label>Inspection Time:</label>
        <input
          type="time"
          name="inspectionTime"
          value={formState.inspectionTime || ""}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <div className="form-group">
        <label>Shift:</label>
        <select
          name="shift"
          value={formState.shift || ""}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="Shift 1">Shift 1</option>
          <option value="Shift 2">Shift 2</option>
          <option value="Shift 3">Shift 3</option>
        </select>
      </div>

      <div className="form-group">
        <label>Name of Mine:</label>
        <input
          type="text"
          name="mineName"
          value={formState.mineName || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter name of mine"
        />
      </div>

      <div className="form-group">
        <label>Name of Seam:</label>
        <input
          type="text"
          name="seamName"
          value={formState.seamName || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter name of seam"
        />
      </div>

      <div className="form-group">
        <label>District 1:</label>
        <input
          type="text"
          name="district1"
          value={formState.district1 || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter district 1"
        />
      </div>

      <div className="form-group">
        <label>District 2:</label>
        <input
          type="text"
          name="district2"
          value={formState.district2 || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter district 2"
        />
      </div>

      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formState.date || ""}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <div className="form-group">
        <label>Shift Hours:</label>
        <input
          type="text"
          name="shiftHours"
          value={formState.shiftHours || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter shift hours"
        />
      </div>

      <div className="form-group">
        <label>Parts of Mine Inspected:</label>
        <textarea
          name="partsInspected"
          value={formState.partsInspected || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter parts of mine inspected"
          rows="4"
        ></textarea>
      </div>
    </div>
  );
};

export default BasicDetails;
