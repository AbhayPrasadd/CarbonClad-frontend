import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";

import html2canvas from "html2canvas";


const ShiftHandover = () => {
  const [logbooks, setLogbooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogbooks = async () => {
      try {
        const response = await axios.get("http://localhost:5004/logbook");
        setLogbooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching logbooks:", error);
        setLoading(false);
      }
    };

    fetchLogbooks();
  }, []);

  const generatePDF = () => {
    const input = document.getElementById("logbook-content");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("logbook-details.pdf");
    });
  };

  if (loading) {
    return <div className="loading">Loading logbooks...</div>;
  }

  return (
    <div className="logbook-display">
      <h1>Logbook Shift Details</h1>
      <button onClick={generatePDF} className="generate-pdf-button">
        Download PDF
      </button>
      <div id="logbook-content">
        {logbooks.length > 0 ? (
          logbooks.map((logbook, index) => (
            <div key={index} className="logbook-card">
              <h2>Basic Details</h2>
              <table className="logbook-table">
                <tbody>
                  <tr>
                    <td><strong>Supervisor Name</strong></td>
                    <td>{logbook.basicDetails.supervisorName}</td>
                  </tr>
                  <tr>
                    <td><strong>Inspection Time</strong></td>
                    <td>{logbook.basicDetails.inspectionTime}</td>
                  </tr>
                  <tr>
                    <td><strong>Shift</strong></td>
                    <td>{logbook.basicDetails.shift}</td>
                  </tr>
                  <tr>
                    <td><strong>Mine Name</strong></td>
                    <td>{logbook.basicDetails.mineName}</td>
                  </tr>
                  <tr>
                    <td><strong>Date</strong></td>
                    <td>{logbook.basicDetails.date}</td>
                  </tr>
                </tbody>
              </table>

              <h2>Safety Materials</h2>
              <table className="logbook-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {logbook.safetyMaterials.map((material) => (
                    <tr
                      key={material.id}
                      className={material.status !== "Good" ? "highlight-red" : ""}
                    >
                      <td>{material.name}</td>
                      <td>{material.status}</td>
                      <td>{material.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2>Ventilation Devices</h2>
              <table className="logbook-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Condition</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {logbook.ventilationDevices.map((device) => (
                    <tr
                      key={device.id}
                      className={device.condition !== "Operational" ? "highlight-red" : ""}
                    >
                      <td>{device.name}</td>
                      <td>{device.condition}</td>
                      <td>{device.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2>Safety Observations</h2>
              <table className="logbook-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {logbook.safetyObservations.length > 0 ? (
                    logbook.safetyObservations.map((observation, idx) => (
                      <tr
                        key={idx}
                        className={observation.status !== "Functional" ? "highlight-red" : ""}
                      >
                        <td>{observation.name}</td>
                        <td>{observation.status}</td>
                        <td>{observation.action}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">No safety observations recorded.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <p>No logbook data available.</p>
        )}
      </div>
    </div>
  );
};

export default ShiftHandover;
