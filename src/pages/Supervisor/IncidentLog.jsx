import React from "react";

const IncidentLog = () => {
  const incidents = [
    { id: 1, description: "Fire extinguisher missing in zone 3", date: "2024-12-10" },
    { id: 2, description: "Ventilation fan malfunction in section B", date: "2024-12-09" },
  ];

  return (
    <div>
      <h2>Incident Log</h2>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            {incident.date}: {incident.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncidentLog;
