import React from "react";
import './BasicDetails.css'

function BasicDetails({ details, setDetails, fetchGeolocation }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  return (
    <div className="basic-details">
      <h2>Basic Details</h2>
      <div className="row">
        <div className="form-group">
          <label>Supervisor Name:</label>
          <input
            type="text"
            name="supervisorName"
            value={details.supervisorName}
            onChange={handleChange}
            placeholder="Enter supervisor name"
          />
        </div>
        <div className="form-group">
          <label>Inspection Date & Time:</label>
          <input
            type="datetime-local"
            name="inspectionTime"
            value={details.inspectionTime}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label>Shift:</label>
          <select
            name="shift"
            value={details.shift}
            onChange={handleChange}
          >
            <option>Shift 1</option>
            <option>Shift 2</option>
            <option>Shift 3</option>
          </select>
        </div>
        <div className="form-group">
          <label>Geolocation:</label>
          <input
            type="text"
            name="geolocation"
            value={details.geolocation}
            readOnly
            placeholder="Click to fetch geolocation"
          />
          <button type="button" onClick={fetchGeolocation}>
            Fetch Location
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicDetails;
