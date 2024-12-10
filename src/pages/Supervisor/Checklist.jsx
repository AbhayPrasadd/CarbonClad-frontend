import React, { useState, useEffect } from 'react';
import './Alert.css';

const Checklist = () => {
  const [hazards, setHazards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the dummy hazards data
  useEffect(() => {
    const fetchHazards = async () => {
      try {
        const response = await fetch('/hazardsData.json'); // Fetch from public folder
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setHazards(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hazards:', error);
        setLoading(false);
      }
    };

    fetchHazards();
  }, []);

  // Toggle the status of a hazard
  const toggleStatus = (id) => {
    setHazards((prevHazards) =>
      prevHazards.map((hazard) =>
        hazard.id === id
          ? {
              ...hazard,
              status: hazard.status === 'Resolved' ? 'Unresolved' : 'Resolved'
            }
          : hazard
      )
    );
  };

  if (loading) return <p>Loading hazards...</p>;

  return (
    <div className="alert-component">
      <h2>Hazards</h2>
      <div className="hazard-list">
        {hazards.map((hazard) => (
          <div key={hazard.id} className={`hazard-card ${hazard.status.toLowerCase()}`}>
            <div className="hazard-info">
              <h3>{hazard.hazard}</h3>
              <p>Severity: <strong>{hazard.severity}</strong></p>
              <p>Status: <strong>{hazard.status}</strong></p>
            </div>
            <button
              className="toggle-button"
              onClick={() => toggleStatus(hazard.id)}
            >
              Mark as {hazard.status === 'Resolved' ? 'Unresolved' : 'Resolved'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checklist;
