import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver"; // For downloading files
import "./ReportGeneration.css";

const ReportGeneration = ({ logs = [] }) => {
  const [filteredLogs, setFilteredLogs] = useState(logs);
  const [filters, setFilters] = useState({
    date: "",
    status: "",
    type: "",
  });

  useEffect(() => {
    setFilteredLogs(logs); // Initialize filtered logs when logs change
  }, [logs]);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Apply filters
  const applyFilters = () => {
    const filtered = logs.filter((log) => {
      return (
        (filters.date === "" || log.date === filters.date) &&
        (filters.status === "" || log.status === filters.status) &&
        (filters.type === "" || log.type === filters.type)
      );
    });
    setFilteredLogs(filtered);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({ date: "", status: "", type: "" });
    setFilteredLogs(logs);
  };

  // Download filtered logs as CSV
  const downloadLogs = () => {
    const csvContent = [
      ["Log ID", "Date", "Type", "Status", "Details"],
      ...filteredLogs.map((log) => [log.id, log.date, log.type, log.status, log.details]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "filtered_logs.csv");
  };

  return (
    <div className="report-generation">
      {/* Filters */}
      <div className="filters">
        <h2>Filter Logs</h2>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Status:
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
          </select>
        </label>
        <label>
          Type:
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Safety">Safety</option>
            <option value="Equipment">Equipment</option>
            <option value="Task">Task</option>
          </select>
        </label>
        <button onClick={applyFilters}>Apply Filters</button>
        <button onClick={resetFilters}>Reset Filters</button>
      </div>

      {/* Logs Table */}
      <div className="logs-table">
        <h2>Filtered Logs</h2>
        {filteredLogs?.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Log ID</th>
                <th>Date</th>
                <th>Type</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.date}</td>
                  <td>{log.type}</td>
                  <td>{log.status}</td>
                  <td>{log.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No logs found matching the filters.</p>
        )}
      </div>

      {/* Download Button */}
      <button onClick={downloadLogs} className="download-button">
        Download Logs
      </button>
    </div>
  );
};

export default ReportGeneration;
