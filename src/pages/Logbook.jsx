import React, { useState, useEffect } from "react";
import BasicDetails from "./BasicDetails";
import SafetyObservations from "./SafetyObservations";
import RedFlags from "./RedFlags";
import "./Logbook.css";



function Logbook() {
  const [basicDetails, setBasicDetails] = useState({
    supervisorName: "",
    inspectionTime: "",
    shift: "Shift 1",
    geolocation: "",
  });

  const [entries, setEntries] = useState([
    { safetyObservation: "", actionTaken: "" },
  ]);

  const [redFlags, setRedFlags] = useState([]);

  // Fetch geolocation
  const fetchGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setBasicDetails((prev) => ({
          ...prev,
          geolocation: `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`,
        }));
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  useEffect(() => {
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received update:", data);

      if (data.type === "updateLogbook") {
        setBasicDetails(data.basicDetails);
        setEntries(data.entries);
        setRedFlags(data.redFlags || []);
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  // Submit logbook data
  const handleSubmit = () => {
    const logbookData = { basicDetails, entries, redFlags };
    console.log("Submitting logbook:", logbookData);

    socket.send(
      JSON.stringify({
        type: "submitLogbook",
        data: logbookData,
      })
    );
    alert("Logbook submitted successfully!");
  };

  return (
    <div className="logbook-container">
      <h1>Supervisor Statutory Logbook</h1>

      {/* Basic Details */}
      <BasicDetails
        details={basicDetails}
        setDetails={setBasicDetails}
        fetchGeolocation={fetchGeolocation}
      />

      {/* Safety Observations */}
      <SafetyObservations entries={entries} setEntries={setEntries} />

      {/* Red Flags */}
      <RedFlags redFlags={redFlags} setRedFlags={setRedFlags} />

      {/* Submit Button */}
      <button onClick={handleSubmit} className="submit-btn">
        Save Logbook 
      </button>
    </div>
  );
}

export default Logbook;
