import React, { useState } from "react";

const AdminReports = () => {
  const [selectedReport, setSelectedReport] = useState("overall");
  const [dateRange, setDateRange] = useState("monthly");

  const reports = [
    {
      id: "overall",
      name: "Overall Performance",
      icon: "📊",
      color: "from-blue-600 to-blue-400",
      metrics: [
        { label: "Active Users", value: "2,450", change: "+15%" },
        { label: "Total Courses", value: "85", change: "+8%" },
        { label: "Total Revenue", value: "₹7.50L", change: "+22%" },
        { label: "Avg Rating", value: "4.6/5", change: "+0.3" },
      ]
    },
    {
      id: "enrollment",
      name: "Enrollment Trends",
      icon: "📈",
      color: "from-green-600 to-green-400",
      metrics: [
        { label: "New Enrollments", value: "380", change: "+45%" },
        { label: "Completion Rate", value: "72%", change: "+8%" },
        { label: "Dropout Rate", value: "18%", change: "-5%" },
        { label: "Avg Course Duration", value: "42 days", change: "+3 days" },
      ]
    },
    {
      id: "user",
      name: "User Analysis",
      icon: "👥",
      color: "from-purple-600 to-purple-400",
      metrics: [
        { label: "Total Users", value: "5,280", change: "+125" },
        { label: "Active Teachers", value: "98", change: "+12" },
        { label: "Verified Users", value: "4,200", change: "+89%" },
        { label: "Inactive Users", value: "850", change: "-45" },
      ]
    },
    {
      id: "content",
      name: "Content Quality",
      icon: "⭐",
      color: "from-yellow-600 to-yellow-400",
      metrics: [
        { label: "Avg Course Rating", value: "4.6", change: "+0.2" },
        { label: "High Quality Courses", value: "62", change: "+8" },
        { label: "Avg Video Duration", value: "45 mins", change: "-2 mins" },
        { label: "Student Satisfaction", value: "88%", change: "+5%" },
      ]
    },
  ];

  const activityLog = [
    { id: 1, action: "New course published", user: "John Doe", time: "2 hours ago", type: "course" },
    { id: 2, action: "100 students enrolled", course: "React Mastery", time: "4 hours ago", type: "enrollment" },
    { id: 3, action: "Revenue received", amount: "₹25,000", time: "6 hours ago", type: "payment" },
    { id: 4, action: "System backup completed", status: "Success", time: "1 day ago", type: "system" },
    { id: 5, action: "User account suspended", user: "Test123", time: "1 day ago", type: "user" },
    { id: 6, action: "Template updated", template: "Navbar", time: "2 days ago", type: "system" },
  ];

  const weeklyStats = [
    { week: "Week 1", users: 320, courses: 12, revenue: 45000 },
    { week: "Week 2", users: 380, courses: 15, revenue: 52000 },
    { week: "Week 3", users: 420, courses: 18, revenue: 58000 },
    { week: "Week 4", users: 510, courses: 22, revenue: 65000 },
  ];

  const currentReport = reports.find(r => r.id === selectedReport);

  const getActivityIcon = (type) => {
    const icons = {
      course: "📚",
      enrollment: "👥",
      payment: "💰",
      system: "⚙️",
      user: "👤"
    };
    return icons[type] || "📝";
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <p className="text-gray-400 mt-2">Comprehensive platform insights and statistics</p>
      </div>

      {/* Date Range Selector */}
      <div className="flex gap-3 flex-wrap">
        {["weekly", "monthly", "quarterly", "yearly"].map((range) => (
          <button
            key={range}
            onClick={() => setDateRange(range)}
            className={`px-4 py-2 rounded-lg font-semibold capitalize transition-all duration-300 ${
              dateRange === range
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-gray-400 hover:bg-slate-700"
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Report Selection */}
      <div className="grid md:grid-cols-4 gap-4">
        {reports.map((report) => (
          <button
            key={report.id}
            onClick={() => setSelectedReport(report.id)}
            className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
              selectedReport === report.id
                ? `bg-gradient-to-br ${report.color} border-white/20`
                : "bg-gradient-to-br from-slate-900 to-slate-800 border-white/10 hover:border-white/20"
            }`}
          >
            <div className="text-3xl mb-2">{report.icon}</div>
            <p className={`font-semibold ${selectedReport === report.id ? "text-white" : "text-gray-300"}`}>
              {report.name}
            </p>
          </button>
        ))}
      </div>

      {/* Selected Report Metrics */}
      {currentReport && (
        <div className="grid md:grid-cols-4 gap-4">
          {currentReport.metrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
              <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className="text-xs text-green-400 mt-2">{metric.change}</p>
            </div>
          ))}
        </div>
      )}

      {/* Weekly Statistics */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">Weekly Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-3 text-gray-400 font-semibold">Week</th>
                <th className="pb-3 text-gray-400 font-semibold">New Users</th>
                <th className="pb-3 text-gray-400 font-semibold">New Courses</th>
                <th className="pb-3 text-gray-400 font-semibold">Revenue</th>
                <th className="pb-3 text-gray-400 font-semibold">Growth</th>
              </tr>
            </thead>
            <tbody>
              {weeklyStats.map((stat, index) => (
                <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="py-4 font-medium">{stat.week}</td>
                  <td className="py-4 text-blue-400">{stat.users}</td>
                  <td className="py-4 text-green-400">{stat.courses}</td>
                  <td className="py-4 text-yellow-400">₹{(stat.revenue / 100000).toFixed(1)}L</td>
                  <td className="py-4">
                    <span className="text-green-400 font-semibold">↑ {12 + index * 3}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity Log */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">Recent Activities</h2>
          <div className="space-y-4">
            {activityLog.map((log) => (
              <div key={log.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <div className="text-2xl mt-1">{getActivityIcon(log.type)}</div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{log.action}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {log.user && `by ${log.user}`}
                    {log.course && `in ${log.course}`}
                    {log.amount && `Amount: ${log.amount}`}
                    {log.status && `Status: ${log.status}`}
                    {log.template && `Template: ${log.template}`}
                  </p>
                </div>
                <p className="text-xs text-gray-400 whitespace-nowrap">{log.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">Top Performers</h2>
          <div className="space-y-4">
            {[
              { rank: 1, name: "React Mastery", students: 450, rating: 4.8 },
              { rank: 2, name: "Node.js API", students: 380, rating: 4.6 },
              { rank: 3, name: "Next.js Advanced", students: 290, rating: 4.7 },
              { rank: 4, name: "TypeScript Pro", students: 210, rating: 4.5 },
              { rank: 5, name: "GraphQL Mastery", students: 165, rating: 4.9 },
            ].map((course) => (
              <div key={course.rank} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-sm">
                  {course.rank}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{course.name}</p>
                  <p className="text-xs text-gray-400">{course.students} students</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-yellow-400">⭐ {course.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Export Section */}
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300">
          <i className="fa-solid fa-download"></i> Download CSV
        </button>
        <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300">
          <i className="fa-solid fa-print"></i> Print Report
        </button>
        <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300">
          <i className="fa-solid fa-envelope"></i> Send Email
        </button>
      </div>
    </div>
  );
};

export default AdminReports;
