import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewHazards.css";

const NewHazards = () => {
  const [hazards, setHazards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHazards = async () => {
      try {
        const response = await axios.get("https://sihfinale-1.onrender.com/api/hazards");
        setHazards(response.data);
        setError("");
      } catch (err) {
        setError(
          err.response
            ? `Error: ${err.response.data.message}`
            : "Network Error. Please check the backend server."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchHazards();
  }, []);

  return (
    <div className="hazards-container">
      <h1>Hazards Reported</h1>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <table className="hazards-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Reported By</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {hazards.length > 0 ? (
              hazards.map((hazard, index) => (
                <tr key={hazard._id}>
                  <td>{index + 1}</td>
                  <td>{hazard.hazardDescription}</td>
                  <td>{hazard.name}</td>
                  <td>{hazard.reportDate}</td>
                  <td>Pending</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">
                  No hazards reported yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default NewHazards;
