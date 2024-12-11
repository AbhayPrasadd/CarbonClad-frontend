import React, { useState } from "react";
import BasicDetails from "./Log1";
import Safetycheck from "./Log2";
import LogbookForm from "./Log3";
import axios from "axios";

const Logbook = () => {
  const [logbookData, setLogbookData] = useState({
    basicDetails: {
      supervisorName: "",
      inspectionTime: "",
      shift: "Shift 1",
      mineName: "",
      seamName: "",
      district1: "",
      district2: "",
      date: "",
      shiftHours: "",
      latitude: "",
      longitude: "",
      partsInspected: "",
    },
    safetyMaterials: [
      { id: 1, name: "Roof bolts, bearing plates", status: "Yes", action: "" },
      { id: 2, name: "Nuts, Grouting capsule", status: "Yes", action: "" },
      { id: 3, name: "Timber", status: "Yes", action: "" },
    ],
    ventilationDevices: [
      { id: 1, name: "Air crossing", condition: "Yes", action: "" },
      { id: 2, name: "Stopping", condition: "Yes", action: "" },
    ],
    safetyObservations: [],
  });

  const updateSection = (section, data) => {
    setLogbookData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const handleSubmit = async () => {
    console.log("Submitting logbook data:", logbookData);
    try {
      const response = await axios.post(
        "http://localhost:5004/logbook",
        logbookData
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error submitting logbook:", error.response || error);
      alert("An error occurred while submitting the logbook.");
    }
  };

  return (
    <div className="logbook-container">
      <h1>Overman Incharge Logbook</h1>
      <BasicDetails
        details={logbookData.basicDetails}
        setDetails={(data) =>
          setLogbookData((prev) => ({
            ...prev,
            basicDetails: data,
          }))
        }
      />
      <Safetycheck
        materials={logbookData.safetyMaterials}
        setMaterials={(data) => updateSection("safetyMaterials", data)}
      />
      <LogbookForm
        devices={logbookData.ventilationDevices}
        setDevices={(data) => updateSection("ventilationDevices", data)}
      />
      <div className="submit-container">
        <button onClick={handleSubmit} className="submit-btn">
          Save Logbook
        </button>
      </div>
    </div>
  );
};

export default Logbook;
