import React, { useState } from 'react';
import './Hazard.css';

function Hazard() {
  const [formData, setFormData] = useState({
    hazardType: '',
    location: '',
    description: '',
    severity: '',
    reportedBy: '',
    date: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Hazard Report Submitted:', formData);
    alert('Hazard Report Submitted Successfully!');
    // Reset form
    setFormData({
      hazardType: '',
      location: '',
      description: '',
      severity: '',
      reportedBy: '',
      date: '',
    });
  };

  return (
    <div className="hazard-reporting">
      <h2>Hazard Reporting Form</h2>
      <form onSubmit={handleSubmit} className="hazard-form">
        <label>
          Hazard Type:
          <input
            type="text"
            name="hazardType"
            value={formData.hazardType}
            onChange={handleChange}
            placeholder="e.g., Gas Leak, Roof Fall"
            required
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Section B, Zone 3"
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide a detailed description of the hazard"
            required
          />
        </label>

        <label>
          Severity:
          <select
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Severity
            </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </label>

        <label>
          Reported By:
          <input
            type="text"
            name="reportedBy"
            value={formData.reportedBy}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit Hazard Report</button>
      </form>
    </div>
  );
}

export default Hazard;
