import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const TeacherAnalytics = () => {
  // 1 year salary data
  const salaryData = [
    { month: "Jan", salary: 20000 },
    { month: "Feb", salary: 22000 },
    { month: "Mar", salary: 25000 },
    { month: "Apr", salary: 28000 },
    { month: "May", salary: 30000 },
    { month: "Jun", salary: 35000 },
    { month: "Jul", salary: 38000 },
    { month: "Aug", salary: 40000 },
    { month: "Sep", salary: 42000 },
    { month: "Oct", salary: 45000 },
    { month: "Nov", salary: 48000 },
    { month: "Dec", salary: 52000 },
  ];

  const totalSalary = salaryData.reduce((acc, curr) => acc + curr.salary, 0);
  const avgSalary = Math.floor(totalSalary / 12);

  return (
    <div className="min-h-screenbg-gradient-to-br from-white/8 to-white/5 border border-white/10 rounded-xl text-white p-6">
      
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Teacher Analytics</h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 p-5 rounded-xl">
          <p className="text-gray-400">Total Salary (Year)</p>
          <h2 className="text-2xl font-bold">₹{totalSalary}</h2>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl">
          <p className="text-gray-400">Average Monthly</p>
          <h2 className="text-2xl font-bold">₹{avgSalary}</h2>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl">
          <p className="text-gray-400">Highest Month</p>
          <h2 className="text-2xl font-bold">₹52,000</h2>
        </div>
      </div>

      {/* Salary Graph */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          📈 1 Year Salary Growth
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salaryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="salary"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Insights */}
      <div className="mt-8 bg-gray-800 p-5 rounded-xl">
        <h3 className="text-lg font-semibold mb-2">💡 Insights</h3>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Salary steadily increased throughout the year 📈</li>
          <li>• Highest growth observed after June 🚀</li>
          <li>• Consistent performance indicates strong course engagement 👥</li>
        </ul>
      </div>
    </div>
  );
};

export default TeacherAnalytics;