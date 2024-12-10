import React, { useState } from "react";
import BasicDetails from "./BasicDetails";
import Checklist from "./Checklist";

import VentilationDevices from "./VentilationDevices";


const Logbook = () => {
  const [logbookData, setLogbookData] = useState({
    basicDetails: {
      supervisorName: "",
      inspectionTime: "",
      shift: "Shift 1",
    },
    safetyMaterials: [],
    ventilationDevices: [],
    safetyObservations: [],
  });

  // Handle updates to sections dynamically
  const updateSection = (section, data) => {
    setLogbookData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  // Components array for dynamic rendering
  const components = [
    {
      name: "Basic Details",
      component: (
        <BasicDetails
          details={logbookData.basicDetails}
          setDetails={(data) => updateSection("basicDetails", data)}
        />
      ),
    },
    {
      name: "Checklist",
      component: (
        <Checklist
          details={logbookData.basicDetails}
          setDetails={(data) => updateSection("basicDetails", data)}
        />
      ),
    },
    
    {
      name: "Ventilation Devices",
      component: (
        <VentilationDevices
          devices={logbookData.ventilationDevices}
          setDevices={(data) => updateSection("ventilationDevices", data)}
        />
      ),
    },
    {
      name: "Safety Observations",
      component: (
        <VentilationDevices
          devices={logbookData.ventilationDevices}
          setDevices={(data) => updateSection("ventilationDevices", data)}
        />
      ),
    },
   
  ];

  // Submit logbook data
  const handleSubmit = () => {
    console.log("Submitting logbook:", logbookData);
    alert("Logbook submitted successfully!");
  };

  return (
    <div className="logbook-container">
      <h1>Overman Incharge Logbook</h1>

      {/* Render all components dynamically */}
      {components.map((comp, index) => (
        <div key={index} className="logbook-section">
          {comp.component}
        </div>
      ))}

      {/* Submit Button */}
      <div className="submit-container">
        <button onClick={handleSubmit} className="submit-btn">
          Save Logbook
        </button>
      </div>
    </div>
  );
};

export default Logbook;
