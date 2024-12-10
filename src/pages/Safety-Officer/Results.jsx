import React from "react";
import "./Results.css";

const Results = ({ hazards }) => {
  return (
    <div className="results">
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>Hazard</th>
            <th>Mechanism</th>
            <th>Risk Score</th>
          </tr>
        </thead>
        <tbody>
          {hazards.map((hazard, index) => (
            <tr key={index}>
              <td>{hazard.description}</td>
              <td>{hazard.mechanism}</td>
              <td>{hazard.riskScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
