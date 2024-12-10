import React from "react";

const ComplianceMonitoring = () => {
  const complianceData = [
    { task: "Inspect conveyor belts", compliance: "90%" },
    { task: "Check fire extinguishers", compliance: "100%" },
    { task: "Ensure dust suppression", compliance: "85%" },
  ];

  return (
    <div>
      <h2>Compliance Monitoring</h2>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Compliance Level</th>
          </tr>
        </thead>
        <tbody>
          {complianceData.map((data, index) => (
            <tr key={index}>
              <td>{data.task}</td>
              <td>{data.compliance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplianceMonitoring;
