import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const Dashboard = () => {
  // Example Data for Charts
  const productionData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Production (tons)",
        data: [200, 220, 180, 250, 300, 270, 320],
        backgroundColor: "#4CAF50",
      },
    ],
  };

  const hazardData = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        label: "Hazard Levels",
        data: [10, 5, 2],
        backgroundColor: ["#FFEB3B", "#FF9800", "#F44336"],
      },
    ],
  };

  const shiftPerformanceData = {
    labels: ["Shift A", "Shift B", "Shift C"],
    datasets: [
      {
        label: "Shift Performance (%)",
        data: [80, 75, 90],
        backgroundColor: ["#2196F3", "#3F51B5", "#673AB7"],
      },
    ],
  };

  const equipmentStatusData = {
    labels: ["Operational", "Under Maintenance", "Faulty"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
      },
    ],
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen flex">
      {/* Left Side: Charts */}
      <div className="w-2/3 grid grid-cols-2 gap-4">
        {/* Production Rate Bar Chart */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Production Rate</h2>
          <Bar data={productionData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>

        {/* Hazard Alerts Pie Chart */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Hazard Alerts</h2>
          <Pie data={hazardData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>

        {/* Shift Performance Line Chart */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Shift Performance</h2>
          <Line data={shiftPerformanceData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>

        {/* Equipment Status Doughnut Chart */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Equipment Status</h2>
          <Doughnut data={equipmentStatusData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
      </div>

      {/* Right Side: Information Section */}
      <div className="w-1/3 flex flex-col gap-4 ml-4">
        {/* Cubical Boxes */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-md font-semibold text-gray-700">Daily Production</h2>
          <p className="text-gray-600">Target: 300 tons<br />Achieved: 270 tons</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-md font-semibold text-gray-700">Hazard Alerts</h2>
          <p className="text-gray-600">Low: 10<br />Medium: 5<br />High: 2</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-md font-semibold text-gray-700">Shift Summary</h2>
          <p className="text-gray-600">Shift A: 80%<br />Shift B: 75%<br />Shift C: 90%</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-md font-semibold text-gray-700">Equipment Status</h2>
          <p className="text-gray-600">Operational: 60%<br />Maintenance: 30%<br />Faulty: 10%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
