import React, { useState } from "react";

const AssignedTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Inspect conveyor belt section A", status: "Pending" },
    { id: 2, description: "Check fire extinguishers in zone 3", status: "Completed" },
    { id: 3, description: "Ensure proper roof bolting in zone 5", status: "Pending" },
  ]);

  const handleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: "Completed" } : task
      )
    );
  };

  return (
    <div>
      <h2>Assigned Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description} - <b>{task.status}</b>
            {task.status === "Pending" && (
              <button onClick={() => handleTaskCompletion(task.id)}>Mark as Completed</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignedTasks;
