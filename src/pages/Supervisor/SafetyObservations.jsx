import React from "react";
import './Safetyob.css'

function SafetyObservations({ entries, setEntries }) {
  const handleEntryChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEntries = entries.map((entry, i) =>
      i === index ? { ...entry, [name]: value } : entry
    );
    setEntries(updatedEntries);
  };

  const addEntry = () => {
    const newEntry = { safetyObservation: "", actionTaken: "" };
    setEntries([...entries, newEntry]);
  };

  return (
    <div className="logbook-entries">
      <h2>Safety Observations</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Safety Observation</th>
            <th>Action Taken</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="text"
                  name="safetyObservation"
                  value={entry.safetyObservation}
                  onChange={(e) => handleEntryChange(index, e)}
                  placeholder="Enter observation"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="actionTaken"
                  value={entry.actionTaken}
                  onChange={(e) => handleEntryChange(index, e)}
                  placeholder="Enter action taken"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addEntry} className="add-entry-btn">
        Add Observation
      </button>
    </div>
  );
}

export default SafetyObservations;
