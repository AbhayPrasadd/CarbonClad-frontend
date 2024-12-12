import React, { useState } from "react";
import "./SmpManagement.css";

const SmpManagement = () => {
  const [hazards, setHazards] = useState([]);
  const [controlMeasures, setControlMeasures] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Add Hazard
  const addHazard = (hazard, type) => {
    if (!hazard || !type) {
      alert("Please fill in all fields.");
      return;
    }
    const newHazard = {
      id: Math.random().toString(36).substr(2, 9),
      hazard,
      type,
      risk: null, // Risk will be calculated in Risk Assessment
    };
    setHazards([...hazards, newHazard]);
  };

  // Update Risk Assessment
  const updateRisk = (id, consequence, likelihood, exposure) => {
    if (!consequence || !likelihood || !exposure) {
      alert("Please fill in all risk fields.");
      return;
    }
    const risk = parseFloat(consequence) * parseFloat(likelihood) * parseFloat(exposure);
    setHazards(
      hazards.map((hazard) =>
        hazard.id === id ? { ...hazard, risk: risk.toFixed(2) } : hazard
      )
    );
  };

  // Add Control Measure
  const addControlMeasure = (hazard, measure) => {
    if (!hazard || !measure) {
      alert("Please select a hazard and enter a control measure.");
      return;
    }
    const newMeasure = { hazard, measure };
    setControlMeasures([...controlMeasures, newMeasure]);
  };

  // Add Task
  const addTask = (taskDescription, assignedTo, riskLevel) => {
    if (!taskDescription || !assignedTo) {
      alert("Please fill in all fields.");
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      taskDescription,
      assignedTo,
      riskLevel,
      taskStatus: "Open",
    };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Update Task Status
  const updateTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, taskStatus: "Closed" } : task
      )
    );
  };

  return (
    <div className="smp-module">
      <header>
        <h1>Safety Management Plan</h1>
      </header>

      <main>
        {/* Hazard Identification */}
        <section className="hazard-section">
          <h2>Hazard Identification</h2>
          <label htmlFor="hazardInput">Hazard</label>
          <input type="text" placeholder="Enter Hazard" id="hazardInput" />
          <label htmlFor="hazardTypeInput">Hazard Type</label>
          <select id="hazardTypeInput">
            <option value="" disabled>
              Select Hazard Type
            </option>
            <option value="Physical">Physical</option>
            <option value="Chemical">Chemical</option>
            <option value="Biological">Biological</option>
            <option value="Ergonomic">Ergonomic</option>
          </select>
          <button
            onClick={() =>
              addHazard(
                document.getElementById("hazardInput").value,
                document.getElementById("hazardTypeInput").value
              )
            }
          >
            Add Hazard
          </button>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Hazard</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {hazards.map((hazard, index) => (
                <tr key={hazard.id}>
                  <td>{index + 1}</td>
                  <td>{hazard.hazard}</td>
                  <td>{hazard.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Risk Assessment */}
        <section className="risk-assessment-section">
          <h2>Risk Assessment</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Hazard</th>
                <th>Consequence</th>
                <th>Likelihood</th>
                <th>Exposure</th>
                <th>Risk</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {hazards.map((hazard) => (
                <tr key={hazard.id}>
                  <td>{hazards.indexOf(hazard) + 1}</td>
                  <td>{hazard.hazard}</td>
                  <td>
                    <label htmlFor={`consequence-${hazard.id}`}>Consequence</label>
                    <select id={`consequence-${hazard.id}`}>
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="5">Catastrophic</option>
                      <option value="4">Major</option>
                      <option value="3">Moderate</option>
                      <option value="2">Minor</option>
                      <option value="1">Negligible</option>
                    </select>
                  </td>
                  <td>
                    <label htmlFor={`likelihood-${hazard.id}`}>Likelihood</label>
                    <select id={`likelihood-${hazard.id}`}>
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="5">Very Likely</option>
                      <option value="4">Likely</option>
                      <option value="3">Possible</option>
                      <option value="2">Unlikely</option>
                      <option value="1">Rare</option>
                    </select>
                  </td>
                  <td>
                    <label htmlFor={`exposure-${hazard.id}`}>Exposure</label>
                    <select id={`exposure-${hazard.id}`}>
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="5">Continuous</option>
                      <option value="4">Frequent</option>
                      <option value="3">Occasional</option>
                      <option value="2">Rare</option>
                      <option value="1">Very Rare</option>
                    </select>
                  </td>
                  <td>{hazard.risk || "Not Assessed"}</td>
                  <td>
                    <button
                      onClick={() =>
                        updateRisk(
                          hazard.id,
                          document.getElementById(`consequence-${hazard.id}`).value,
                          document.getElementById(`likelihood-${hazard.id}`).value,
                          document.getElementById(`exposure-${hazard.id}`).value
                        )
                      }
                    >
                      Assess Risk
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Control Measures */}
        <section className="control-measures-section">
          <h2>Control Measures</h2>
          <label htmlFor="controlHazardSelect">Hazard</label>
          <select id="controlHazardSelect">
            <option value="" disabled>
              Select Hazard
            </option>
            {hazards.map((hazard) => (
              <option key={hazard.id} value={hazard.hazard}>
                {hazard.hazard}
              </option>
            ))}
          </select>
          <label htmlFor="controlMeasureInput">Control Measure</label>
          <input type="text" placeholder="Enter Control Measure" id="controlMeasureInput" />
          <button
            onClick={() =>
              addControlMeasure(
                document.getElementById("controlHazardSelect").value,
                document.getElementById("controlMeasureInput").value
              )
            }
          >
            Add Measure
          </button>

          <table>
            <thead>
              <tr>
                <th>Hazard</th>
                <th>Control Measure</th>
              </tr>
            </thead>
            <tbody>
              {controlMeasures.map((measure, index) => (
                <tr key={index}>
                  <td>{measure.hazard}</td>
                  <td>{measure.measure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Task Management */}
        <section className="task-section">
          <h2>Task Management</h2>
          <label htmlFor="taskDescription">Task Description</label>
          <select id="taskDescription">
            <option value="" disabled>
              Select Hazard
            </option>
            {hazards.map((hazard) => (
              <option key={hazard.id} value={hazard.hazard}>
                {hazard.hazard}
              </option>
            ))}
          </select>
          <label htmlFor="assignedTo">Assigned To</label>
          <input type="text" placeholder="Assigned To" id="assignedTo" />
          <label htmlFor="riskLevel">Risk Level</label>
          <select id="riskLevel">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button
            onClick={() =>
              addTask(
                document.getElementById("taskDescription").value,
                document.getElementById("assignedTo").value,
                document.getElementById("riskLevel").value
              )
            }
          >
            Add Task
          </button>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Assigned To</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.taskDescription}</td>
                  <td>{task.assignedTo}</td>
                  <td>{task.riskLevel}</td>
                  <td>{task.taskStatus}</td>
                  <td>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                    {task.taskStatus === "Open" && (
                      <button onClick={() => updateTaskStatus(task.id)}>Close</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default SmpManagement;
