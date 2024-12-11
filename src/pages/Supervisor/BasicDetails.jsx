import React, { useEffect } from "react";
import './BasicDetails.css';

const BasicDetails = ({ details, setDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setDetails((prevDetails) => ({
            ...prevDetails,
            latitude: latitude.toFixed(6),
            longitude: longitude.toFixed(6),
          }));
        },
        (error) => {
          console.error("Error fetching geolocation: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [setDetails]);

  return (
    <div className="basic-details">
      <div className="form-group">
        <label>Name of Mine:</label>
        <input
          type="text"
          name="mineName"
          value={details.mineName || ""}
          onChange={handleChange}
          placeholder="Enter name of mine"
        />
      </div>
      <div className="form-group">
        <label>Name of Seam:</label>
        <input
          type="text"
          name="seamName"
          value={details.seamName || ""}
          onChange={handleChange}
          placeholder="Enter name of seam"
        />
      </div>
      <div className="form-group">
        <label>Name of District (1):</label>
        <input
          type="text"
          name="district1"
          value={details.district1 || ""}
          onChange={handleChange}
          placeholder="Enter name of district (1)"
        />
      </div>
      <div className="form-group">
        <label>Name of District (2):</label>
        <input
          type="text"
          name="district2"
          value={details.district2 || ""}
          onChange={handleChange}
          placeholder="Enter name of district (2)"
        />
      </div>
      <div className="row">
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={details.date || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Shift and Shift Hours:</label>
          <input
            type="text"
            name="shiftHours"
            value={details.shiftHours || ""}
            onChange={handleChange}
            placeholder="Enter shift and hours"
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label>Latitude:</label>
          <input
            type="text"
            name="latitude"
            value={details.latitude || ""}
            readOnly
            placeholder="Fetching latitude..."
          />
        </div>
        <div className="form-group">
          <label>Longitude:</label>
          <input
            type="text"
            name="longitude"
            value={details.longitude || ""}
            readOnly
            placeholder="Fetching longitude..."
          />
        </div>
      </div>
      <div className="form-group">
        <label>Parts of Mine Inspected:</label>
        <textarea
          name="partsInspected"
          value={details.partsInspected || ""}
          onChange={handleChange}
          placeholder="List parts of mine inspected"
          rows="5"
        ></textarea>
      </div>
    </div>
  );
};

export default BasicDetails;
