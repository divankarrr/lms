import React, { useState } from "react";

const AdminRevenue = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  const revenueData = [
    { month: "Jan", revenue: 45000, courses: 120, students: 450 },
    { month: "Feb", revenue: 52000, courses: 135, students: 510 },
    { month: "Mar", revenue: 48000, courses: 128, students: 480 },
    { month: "Apr", revenue: 61000, courses: 155, students: 580 },
    { month: "May", revenue: 58000, courses: 148, students: 550 },
    { month: "Jun", revenue: 65000, courses: 165, students: 620 },
  ];

  const courseRevenue = [
    { name: "React Mastery", revenue: "₹2,25,000", students: 450, growth: "↑ 12%" },
    { name: "Node.js API", revenue: "₹1,90,000", students: 380, growth: "↑ 8%" },
    { name: "Next.js Advanced", revenue: "₹1,74,000", students: 290, growth: "↑ 15%" },
    { name: "TypeScript Pro", revenue: "₹1,15,000", students: 210, growth: "↓ 2%" },
    { name: "GraphQL Mastery", revenue: "₹74,000", students: 165, growth: "↑ 18%" },
  ];

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);
  const averageRevenue = Math.round(totalRevenue / revenueData.length);
  const maxRevenue = Math.max(...revenueData.map(item => item.revenue));
  const totalStudents = revenueData.reduce((sum, item) => sum + item.students, 0);

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Revenue Analytics</h1>
        <p className="text-gray-400 mt-2">Track and analyze platform revenue</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">Total Revenue</p>
          <p className="text-3xl font-bold text-green-400">₹{(totalRevenue / 100000).toFixed(1)}L</p>
          <p className="text-xs text-green-400 mt-2">↑ 12% from last month</p>
        </div>
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">Avg Monthly Revenue</p>
          <p className="text-3xl font-bold text-blue-400">₹{(averageRevenue / 100000).toFixed(1)}L</p>
          <p className="text-xs text-blue-400 mt-2">Across {revenueData.length} months</p>
        </div>
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">Peak Revenue</p>
          <p className="text-3xl font-bold text-purple-400">₹{(maxRevenue / 100000).toFixed(1)}L</p>
          <p className="text-xs text-purple-400 mt-2">June 2026</p>
        </div>
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">Total Students</p>
          <p className="text-3xl font-bold text-orange-400">{totalStudents}</p>
          <p className="text-xs text-orange-400 mt-2">Active enrollments</p>
        </div>
      </div>

      {/* Period Selector */}
      <div className="flex gap-4">
        <button
          onClick={() => setSelectedPeriod("monthly")}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            selectedPeriod === "monthly"
              ? "bg-blue-600 text-white"
              : "bg-slate-800 text-gray-400 hover:bg-slate-700"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setSelectedPeriod("quarterly")}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            selectedPeriod === "quarterly"
              ? "bg-blue-600 text-white"
              : "bg-slate-800 text-gray-400 hover:bg-slate-700"
          }`}
        >
          Quarterly
        </button>
        <button
          onClick={() => setSelectedPeriod("yearly")}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            selectedPeriod === "yearly"
              ? "bg-blue-600 text-white"
              : "bg-slate-800 text-gray-400 hover:bg-slate-700"
          }`}
        >
          Yearly
        </button>
      </div>

      {/* Revenue Chart */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">Revenue Trend</h2>
        <div className="flex items-end gap-4 h-64">
          {revenueData.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
              <div className="relative w-full h-full flex items-end">
                <div
                  className="w-full bg-gradient-to-t from-blue-600 to-blue-500 rounded-t-lg transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-400 hover:brightness-110"
                  style={{
                    height: `${(item.revenue / maxRevenue) * 100}%`,
                    minHeight: "20px"
                  }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-700 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ₹{(item.revenue / 100000).toFixed(1)}L
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400">{item.month}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course-wise Revenue */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10 bg-slate-800/50">
          <h2 className="text-xl font-bold">Course-wise Revenue Breakdown</h2>
        </div>

        <div className="divide-y divide-white/10">
          {courseRevenue.map((course, index) => (
            <div key={index} className="px-6 py-4 hover:bg-white/5 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-semibold">{course.name}</p>
                  <p className="text-sm text-gray-400">{course.students} students enrolled</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-400">{course.revenue}</p>
                  <p className={`text-sm ${course.growth.includes('↑') ? 'text-green-400' : 'text-red-400'}`}>
                    {course.growth}
                  </p>
                </div>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                  style={{ width: `${(200 + index * 15)}px`, maxWidth: '100%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <i className="fa-brands fa-cc-paypal text-3xl text-blue-400"></i>
            <div>
              <p className="text-gray-400 text-sm">PayPal</p>
              <p className="text-2xl font-bold">₹3.25L</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">45% of total revenue</p>
        </div>
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <i className="fa-brands fa-cc-stripe text-3xl text-blue-600"></i>
            <div>
              <p className="text-gray-400 text-sm">Stripe</p>
              <p className="text-2xl font-bold">₹2.85L</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">40% of total revenue</p>
        </div>
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <i className="fa-solid fa-wallet text-3xl text-green-400"></i>
            <div>
              <p className="text-gray-400 text-sm">Direct Transfer</p>
              <p className="text-2xl font-bold">₹1.40L</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">15% of total revenue</p>
        </div>
      </div>
    </div>
  );
};

export default AdminRevenue;
