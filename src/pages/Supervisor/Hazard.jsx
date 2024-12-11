import React, { useState } from 'react';
import './Hazard.css';

const Hazard= () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Hazard report submitted successfully!');
  };

  return (
    <div className="container">
      <h1>Hazard Reporting Form</h1>
      <div className="section-title">
        <span>Supervisor Details</span>
        <input
          type="date"
          id="reportDate"
          name="reportDate"
          className="date-input"
          required
        />
      </div>
      <form onSubmit={handleSubmit} id="hazardForm">
        <div className="form-row">
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
            <input type="text" id="hazardLocation" name="hazardLocation" placeholder="Enter hazard location" required />
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

        <div className="section-title">Acknowledgment</div>
        <div className="form-group checkbox">
          <input type="checkbox" id="acknowledgment" name="acknowledgment" required />
          <label htmlFor="acknowledgment">
            I confirm that the information provided is accurate to the best of my knowledge. I understand that providing false
            information may result in consequences.
          </label>
        </div>

        <div className="sticky-button">
          <button type="submit">Submit Report</button>
        </div>
      </form>

      {message && <div className={message.success}>{message}</div>}
    </div>
  );
};

export default Hazard;