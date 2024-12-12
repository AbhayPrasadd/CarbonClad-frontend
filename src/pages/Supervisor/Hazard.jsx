import React, { useState } from "react";
import axios from "axios";
import "./Hazard.css";

const Hazard = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      reportDate: e.target.reportDate.value,
      name: e.target.name.value,
      mineName: e.target.mineName.value,
      hazardLocation: e.target.hazardLocation.value,
      natureOfHazard: e.target.natureOfHazard.value,
      hazardDescription: e.target.hazardDescription.value,
      actionTaken: e.target.actionTaken.value || "None",
    };

    try {
      const response = await axios.post("http://localhost:3000/api/hazards", formData);
      if (response.status === 201) {
        setMessage("Hazard report submitted successfully!");
        e.target.reset(); // Clear the form
      } else {
        setMessage(`Error: ${response.data.message}`);
      }
    } catch (error) {
      setMessage(
        error.response
          ? `Error: ${error.response.data.message}`
          : "Network Error. Please check the backend server."
      );
    }
  };

  return (
    <div className="container">
      <h1>Hazard Reporting Form</h1>
      <form onSubmit={handleSubmit} id="hazardForm">
        <div className="form-group">
          <label htmlFor="reportDate">Report Date</label>
          <input type="date" id="reportDate" name="reportDate" required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Supervisor Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="mineName">Mine Name</label>
          <input type="text" id="mineName" name="mineName" placeholder="Enter mine name" required />
        </div>
        <div className="form-group">
          <label htmlFor="hazardLocation">Hazard Location</label>
          <input
            type="text"
            id="hazardLocation"
            name="hazardLocation"
            placeholder="Enter hazard location"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="natureOfHazard">Nature of Hazard</label>
          <select id="natureOfHazard" name="natureOfHazard" required>
            <option value="Ventilation">Ventilation Issues</option>
            <option value="Roof">Unstable Roof/Sides</option>
            <option value="Mechanical">Mechanical Faults</option>
            <option value="LooseMaterials">Loose Rocks/Materials</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="hazardDescription">Hazard Description</label>
          <textarea
            id="hazardDescription"
            name="hazardDescription"
            rows="4"
            placeholder="Describe the hazard"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="actionTaken">Immediate Action Taken</label>
          <textarea
            id="actionTaken"
            name="actionTaken"
            rows="4"
            placeholder="Describe actions taken (if any)"
          ></textarea>
        </div>
        <button type="submit">Submit Report</button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default Hazard;
