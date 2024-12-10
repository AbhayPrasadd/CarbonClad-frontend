import React, { useState } from "react";
import "./NewHazards.css";

const NewHazards = () => {
  // Sample data for hazards reported
  const [hazards, setHazards] = useState([
    {
      id: 1,
      description: "Slippery floor near conveyor belt",
      reportedBy: "Supervisor - John Doe",
      date: "2024-12-08",
      status: "Pending",
    },
    {
      id: 2,
      description: "Loose electrical wiring in shaft 3",
      reportedBy: "Operator - Jane Smith",
      date: "2024-12-07",
      status: "In Progress",
    },
    {
      id: 3,
      description: "Damaged railing on staircase",
      reportedBy: "Supervisor - Alex Brown",
      date: "2024-12-06",
      status: "Resolved",
    },
  ]);

  return (
    <div>
      
      <table>
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
          {hazards.map((hazard) => (
            <tr key={hazard.id}>
              <td>{hazard.id}</td>
              <td>{hazard.description}</td>
              <td>{hazard.reportedBy}</td>
              <td>{hazard.date}</td>
              <td>{hazard.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewHazards;
