import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./ShiftHandover.css";

const ShiftHandover = () => {
  const [logbooks, setLogbooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shift, setShift] = useState("Shift 1"); // Default shift

  const fetchLogbooks = async (selectedShift) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5004/logbook/${selectedShift}`);
      setLogbooks(response.data);
    } catch (error) {
      console.error("Error fetching logbooks:", error);
      setLogbooks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch data for the default shift when the component mounts
    fetchLogbooks(shift);
  }, [shift]);

  const handleShiftChange = (e) => {
    const selectedShift = e.target.value;
    setShift(selectedShift);
    fetchLogbooks(selectedShift); // Fetch data for the selected shift
  };

  const generatePDF = () => {
    const input = document.getElementById("logbook-container");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Shift-${shift}-logbook-details.pdf`);
    });
  };

  if (loading) {
    return <div className="loading">Loading logbooks...</div>;
  }

  return (
    <div className="logbook-display">
      <h1>Shift-Wise Logbook Details</h1>

      {/* Shift Selection Dropdown */}
      <div className="shift-selection">
        <label htmlFor="shift">Select Shift:</label>
        <select id="shift" value={shift} onChange={handleShiftChange}>
          <option value="Shift 1">Shift 1</option>
          <option value="Shift 2">Shift 2</option>
          <option value="Shift 3">Shift 3</option>
        </select>
      </div>

      <button className="generate-pdf-button" onClick={generatePDF}>
        Download PDF
      </button>

      <div id="logbook-container" className="logbook-container">
        {logbooks.length > 0 ? (
          logbooks.map((logbook, index) => (
            <div key={index} className="logbook-card">
              <h2>Shift: {logbook.basicDetails.shift}</h2>
              <table className="logbook-table">
                <tbody>
                  <tr>
                    <td><strong>Supervisor Name:</strong></td>
                    <td>{logbook.basicDetails.supervisorName}</td>
                  </tr>
                  <tr>
                    <td><strong>Inspection Time:</strong></td>
                    <td>{logbook.basicDetails.inspectionTime}</td>
                  </tr>
                  <tr>
                    <td><strong>Mine Name:</strong></td>
                    <td>{logbook.basicDetails.mineName}</td>
                  </tr>
                  <tr>
                    <td><strong>Seam Name:</strong></td>
                    <td>{logbook.basicDetails.seamName}</td>
                  </tr>
                  <tr>
                    <td><strong>District:</strong></td>
                    <td>{logbook.basicDetails.district1}, {logbook.basicDetails.district2}</td>
                  </tr>
                  <tr>
                    <td><strong>Date:</strong></td>
                    <td>{logbook.basicDetails.date}</td>
                  </tr>
                  <tr>
                    <td><strong>Parts Inspected:</strong></td>
                    <td>{logbook.basicDetails.partsInspected}</td>
                  </tr>
                </tbody>
              </table>

              <h3>Safety Materials</h3>
              <table className="logbook-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {logbook.safetyMaterials.map((material, idx) => (
                    <tr key={idx}>
                      <td>{material.name}</td>
                      <td>{material.status}</td>
                      <td>{material.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h3>Ventilation Devices</h3>
              <table className="logbook-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Condition</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {logbook.ventilationDevices.map((device, idx) => (
                    <tr key={idx}>
                      <td>{device.name}</td>
                      <td>{device.condition}</td>
                      <td>{device.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <p>No logbook data available for {shift}.</p>
        )}
      </div>
    </div>
  );
};

export default ShiftHandover;
