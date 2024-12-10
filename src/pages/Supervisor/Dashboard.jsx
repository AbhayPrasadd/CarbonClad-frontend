import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Ensure your CSS is linked correctly

const Dashboard = () => {
  const [data, setData] = useState(null); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to show loading spinner

  // Fetch the dummy data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/dummyData.json'); // File is in the public folder
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData); // Set the fetched data
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchData();
  }, []);

  // Show a loading spinner or message while data is being fetched
  if (loading) return <p>Loading...</p>;

  // Handle empty data
  if (!data) return <p>No data available</p>;

  // Destructure the fetched data
  const { summary, pastShifts, safetyIssues } = data;

  return (
    <div className="main-content-container">
      

      {/* Summary Cards */}
      <div className="summary-cards">
        {summary.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.title}</h2>
            <p>
              {item.metric1.label}: <strong>{item.metric1.value}</strong>
            </p>
            <p>
              {item.metric2.label}: <strong>{item.metric2.value}</strong>
            </p>
          </div>
        ))}
      </div>

      {/* Past Shift Summary Table */}
      <div className="past-shift-summary">
        <h2>Past Shift Summary</h2>
        <table>
          <thead>
            <tr>
              {Object.keys(pastShifts[0]).map((header, index) => (
                <th key={index}>{header.replace(/([A-Z])/g, ' $1')}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pastShifts.map((shift, index) => (
              <tr key={index}>
                {Object.values(shift).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Safety Issues Section */}
      <div className="safety-issues">
        <h2>Safety Issues</h2>
        <ul>
          {safetyIssues.map((issue, index) => (
            <li key={index}>
              <strong>{issue.name}</strong> – Severity: {issue.severity} – Action Needed: {issue.action}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
