import React from "react";

const AdminDashboard = () => {
  // Mock data
  const stats = [
    {
      icon: "👥",
      label: "Total Users",
      value: "2,450",
      change: "+12%",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "📚",
      label: "Total Courses",
      value: "48",
      change: "+3",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "💰",
      label: "Revenue",
      value: "₹24.5L",
      change: "+18%",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "👨‍🏫",
      label: "Active Teachers",
      value: "156",
      change: "+8",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const recentActivity = [
    { user: "John Doe", action: "Enrolled in React Course", time: "2 hours ago", icon: "📝" },
    { user: "Sarah Smith", action: "Completed Node.js Course", time: "4 hours ago", icon: "✅" },
    { user: "Mike Johnson", action: "Created new course", time: "1 day ago", icon: "📚" },
    { user: "Emily Brown", action: "Made payment of ₹499", time: "1 day ago", icon: "💳" },
  ];

  const topCourses = [
    { name: "React Mastery", students: 450, revenue: "₹2.25L", rating: 4.8 },
    { name: "Node.js API", students: 380, revenue: "₹2.66L", rating: 4.6 },
    { name: "Next.js Advanced", students: 290, revenue: "₹1.45L", rating: 4.7 },
    { name: "TypeScript Pro", students: 210, revenue: "₹1.05L", rating: 4.5 },
  ];

  return (
    <div className="space-y-8">
        
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-400">Welcome back! Here's your platform overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <span className="text-xs font-semibold text-green-400 bg-green-500/20 px-3 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6">Revenue Overview</h2>
            
            {/* Simple Bar Chart */}
            <div className="space-y-4">
              {["January", "February", "March", "April"].map((month, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">{month}</span>
                    <span className="text-sm font-semibold">₹{(idx + 1) * 5}L</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(idx + 1) * 25}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-2">Total Revenue (Last 4 Months)</p>
              <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                ₹50L
              </p>
            </div>
          </div>

          {/* User Distribution */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6">User Distribution</h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">Students</span>
                  <span className="text-sm font-semibold">78%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
                  <div className="bg-blue-500 h-3 w-[78%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">Teachers</span>
                  <span className="text-sm font-semibold">15%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
                  <div className="bg-purple-500 h-3 w-[15%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">Admins</span>
                  <span className="text-sm font-semibold">7%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
                  <div className="bg-pink-500 h-3 w-[7%]"></div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-3">Active Users Today</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-blue-400">1,234</p>
                  <p className="text-xs text-gray-400">Online</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-green-400">892</p>
                  <p className="text-xs text-gray-400">Active</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Recent Activity */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
            
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-center gap-4 pb-4 border-b border-white/5">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-lg">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.user}</p>
                    <p className="text-xs text-gray-400">{activity.action}</p>
                  </div>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Courses */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6">Top Performing Courses</h2>
            
            <div className="space-y-4">
              {topCourses.map((course, idx) => (
                <div key={idx} className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div>
                    <p className="font-medium text-sm">{course.name}</p>
                    <p className="text-xs text-gray-400">{course.students} students</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm text-green-400">{course.revenue}</p>
                    <p className="text-xs text-yellow-400">⭐ {course.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
  );
};

export default AdminDashboard;
