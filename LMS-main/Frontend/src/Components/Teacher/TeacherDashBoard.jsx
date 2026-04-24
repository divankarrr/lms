import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Pie,
  PieChart,
  Legend,
} from "recharts";
import { Cell } from "recharts";

const TeacherDashBoard = () => {
  const [genderCount] = useState([
    { gender: "Male", count: 285 },
    { gender: "Female", count: 450 },
    { gender: "Other", count: 125 },
  ]);

  const stats = [
    {
      title: "Total Students",
      value: "1,280",
      color: "from-blue-500 to-cyan-500",
      icon: "👥",
      change: "+12%",
    },
    {
      title: "Active Batches",
      value: "12",
      color: "from-purple-500 to-pink-500",
      icon: "📚",
      change: "+2",
    },
    {
      title: "Live Classes",
      value: "5",
      color: "from-green-500 to-emerald-500",
      icon: "🎬",
      change: "In Progress",
    },
    {
      title: "Avg Attendance",
      value: "87%",
      color: "from-orange-500 to-red-500",
      icon: "📊",
      change: "+5%",
    },
  ];

  const students = [
    { name: "Alice", progress: 80, gender: "Female" },
    { name: "Bob", progress: 65, gender: "Male" },
    { name: "Charlie", progress: 90, gender: "Male" },
    { name: "Diana", progress: 75, gender: "Female" },
    { name: "Ethan", progress: 50, gender: "Other" },
    { name: "Fiona", progress: 85, gender: "Female" },
  ];

  // Unified color function
  const getGenderColor = (gender) => {
    const colorMap = {
      Male: "#3b82f6",
      Female: "#ec4899",
      Other: "#22c55e",
    };
    return colorMap[gender] || "#6366f1";
  };


  const attendanceData = [
    { month: "Jan", attendance: 80, target: 90 },
    { month: "Feb", attendance: 85, target: 90 },
    { month: "Mar", attendance: 90, target: 90 },
    { month: "Apr", attendance: 70, target: 90 },
    { month: "May", attendance: 75, target: 90 },
    { month: "Jun", attendance: 88, target: 90 },
    { month: "Jul", attendance: 95, target: 90 },
    { month: "Aug", attendance: 82, target: 90 },
    { month: "Sep", attendance: 89, target: 90 },
    { month: "Oct", attendance: 76, target: 90 },
    { month: "Nov", attendance: 84, target: 90 },
    { month: "Dec", attendance: 91, target: 90 },
  ];

  const dailyActive = [
    { day: "Mon", users: 350, target: 400 },
    { day: "Tue", users: 420, target: 400 },
    { day: "Wed", users: 390, target: 400 },
    { day: "Thu", users: 460, target: 400 },
    { day: "Fri", users: 500, target: 400 },
    { day: "Sat", users: 300, target: 400 },
    { day: "Sun", users: 250, target: 400 },
  ];
  const generateDate = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const newDate = new Date();
      newDate.setDate(today.getDate() + i);
      const day = newDate.toLocaleDateString("en-US", { weekday: "short" });
      dates.push({
        id: i,
        day: day,
        date: newDate.getDate(),
      });
    }
    return dates;
  };

  const allDate = generateDate();
  const [activeDay, setActiveDay] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const visibleDates = allDate.slice(startIndex, startIndex + 6);

  const handleNext = () => {
    if (startIndex + 6 < allDate.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/95 border border-slate-700 rounded-lg p-3 shadow-lg">
          <p className="text-white text-sm font-medium">{payload[0].payload.month || payload[0].payload.day}</p>
          <p className="text-blue-400 text-sm">Value: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {/* HEADER */}
      <div className="mb-8 flex justify-between items-start flex-col sm:flex-row gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">Welcome back, Dr. Smith! 👋</h1>
          <p className="text-gray-400 text-lg">Here's your teaching performance overview</p>
        </div>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300">April 15 • 2:45 PM</span>
        </div>
      </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/8 to-white/5 hover:border-white/20 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`}
              ></div>

              <div className="relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{item.title}</p>
                    <h2 className="text-3xl font-bold">{item.value}</h2>
                  </div>
                  <span className="text-2xl">{item.icon}</span>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400">vs last month</span>
                  <span className={`text-sm font-semibold ${item.change.includes("+") ? "text-green-400" : "text-blue-400"}`}>
                    {item.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CHARTS SECTION */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* ATTENDANCE CHART */}
          <div className="bg-gradient-to-br from-white/8 to-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Attendance Trend 📊</h2>
                <p className="text-sm text-gray-400 mt-1">Monthly performance</p>
              </div>
              <div className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium border border-green-500/30">
                ↑ 5% Growth
              </div>
            </div>

            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={attendanceData}>
                <CartesianGrid stroke="#334155" strokeDasharray="4 4" />
                <XAxis dataKey="month" stroke="#94a3b8" style={{ fontSize: "12px" }} />
                <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="attendance" radius={[8, 8, 0, 0]} fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* ACTIVE USERS CHART */}
          <div className="bg-gradient-to-br from-white/8 to-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Daily Active Users 👥</h2>
                <p className="text-sm text-gray-400 mt-1">Weekly engagement</p>
              </div>
              <div className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                Peak: Friday
              </div>
            </div>

            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={dailyActive}>
                <CartesianGrid stroke="#334155" strokeDasharray="4 4" />
                <XAxis dataKey="day" stroke="#94a3b8" style={{ fontSize: "12px" }} />
                <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#38bdf8"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#38bdf8" }}
                  activeDot={{ r: 7 }}
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* STUDENT PROGRESS CHART */}
          <div className="bg-gradient-to-br from-white/8 to-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Student Progress 📈</h2>
                <p className="text-sm text-gray-400 mt-1">Course completion rates</p>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={students}
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={4}
                  dataKey="progress"
                  nameKey="name"
                  isAnimationActive={true}
                >
                  {students.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getGenderColor(entry.gender)} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #475569",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* GENDER DISTRIBUTION CHART */}
          <div className="bg-gradient-to-br from-white/8 to-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Gender Distribution 👥</h2>
                <p className="text-sm text-gray-400 mt-1">Student demographics</p>
              </div>
              <span className="text-3xl font-bold text-blue-400">{students.length}</span>
            </div>

            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={genderCount}
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="count"
                  nameKey="gender"
                  isAnimationActive={true}
                >
                  {genderCount.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getGenderColor(entry.gender)} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #475569",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="absolute bottom-6 right-6 space-y-2">
              {genderCount.map((item) => (
                <div key={item.gender} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getGenderColor(item.gender) }}
                  ></div>
                  <span className="text-sm text-gray-300">{item.gender}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CLASS SCHEDULE */}
        <div className="bg-gradient-to-br from-white/8 to-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
          <div className="flex justify-between items-center mb-6 flex-col sm:flex-row gap-4">
            <div>
              <h2 className="text-lg font-semibold">📅 Class Schedule</h2>
              <p className="text-sm text-gray-400 mt-1">Your upcoming classes</p>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 whitespace-nowrap">
              + Add Class
            </button>
          </div>

          {/* DATE NAVIGATION */}
          <div className="flex items-center justify-between bg-white/5 rounded-lg p-4 mb-6 border border-white/10 overflow-x-auto gap-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 rounded-lg transition-colors text-sm whitespace-nowrap"
            >
              ◀ Prev
            </button>

            <div className="flex gap-2 overflow-x-auto mx-2">
              {visibleDates.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveDay(item.id)}
                  className={`px-4 py-2 rounded-lg text-center font-medium transition-all duration-200 whitespace-nowrap ${
                    activeDay === item.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <p className="text-sm font-semibold">{item.date}</p>
                  <p className="text-xs opacity-75">{item.day}</p>
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={startIndex + 6 >= allDate.length}
              className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 rounded-lg text-white transition-colors text-sm whitespace-nowrap"
            >
              Next ▶
            </button>
          </div>

          {/* TIMELINE */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-24 sticky top-0">
                <p className="text-sm font-medium text-gray-300">6:00 AM</p>
              </div>

              <div className="flex-1 relative pb-8">
                <div className="absolute left-0 top-5 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

                <div className="ml-6 bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30 p-4 rounded-lg hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-xs text-blue-300 font-semibold uppercase tracking-wide">Orientation</p>
                      <h3 className="text-base font-bold">English Fundamentals</h3>
                    </div>
                    <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-gray-300">Time: 6:00 AM - 7:40 AM</p>
                  <p className="text-sm text-gray-400 mt-1">👥 42 students enrolled</p>

                  <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Join Now
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-24 sticky top-0">
                <p className="text-sm font-medium text-gray-300">10:00 AM</p>
              </div>

              <div className="flex-1 relative">
                <div className="absolute left-0 top-5 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

                <div className="ml-6 bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30 p-4 rounded-lg hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-xs text-purple-300 font-semibold uppercase tracking-wide">Main Class</p>
                      <h3 className="text-base font-bold">Advanced JavaScript</h3>
                    </div>
                    <span className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded-full">Upcoming</span>
                  </div>
                  <p className="text-sm text-gray-300">Time: 10:00 AM - 11:30 AM</p>
                  <p className="text-sm text-gray-400 mt-1">👥 38 students enrolled</p>

                  <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default TeacherDashBoard;