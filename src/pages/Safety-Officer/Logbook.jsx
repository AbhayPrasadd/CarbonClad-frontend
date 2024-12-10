import React, { useState, useEffect } from "react";
import BasicDetails from "./BasicDetails";
import SafetyObservations from "../Supervisor/SafetyObservations";
import RedFlags from "./RedFlags";
import EquipmentStatus from "./EquipmentStatus";

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

  const [equipment, setEquipment] = useState([]);
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

  // Submit logbook data
  const handleSubmit = () => {
    const logbookData = { basicDetails, entries, equipment, redFlags };
    console.log("Submitting logbook:", logbookData);

    // Here, you could add an API call or other logic to submit the data
    alert("Logbook submitted successfully!");
  };

  return (
    <div>
      

      {/* Basic Details */}
      <BasicDetails
        details={basicDetails}
        setDetails={setBasicDetails}
        fetchGeolocation={fetchGeolocation}
      />

      {/* Safety Observations */}
      <SafetyObservations entries={entries} setEntries={setEntries} />

      {/* Equipment Status */}
      <EquipmentStatus equipment={equipment} setEquipment={setEquipment} />

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
