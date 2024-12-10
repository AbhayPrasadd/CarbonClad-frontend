import React, { useState } from "react";

const ReportsFeedback = () => {
  const [report, setReport] = useState("");

  const handleSubmit = () => {
    console.log("Feedback/Incident Submitted:", report);
    setReport("");
    alert("Your report has been submitted.");
  };

  return (
    <div>
      <h2>Reports & Feedback</h2>
      <textarea
        value={report}
        onChange={(e) => setReport(e.target.value)}
        placeholder="Describe the incident or feedback here..."
        rows="5"
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ReportsFeedback;
