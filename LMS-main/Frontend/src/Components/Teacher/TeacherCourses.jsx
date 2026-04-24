import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherCourses = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const courses = [
    {
      _id: 1,
      title: "React Mastery",
      students: 120,
      price: 499,
      status: "Published",
      thumbnail:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      rating: 4.8,
      reviews: 245,
      lessons: 48,
    },
    {
      _id: 2,
      title: "Node.js API",
      students: 80,
      price: 699,
      status: "Draft",
      thumbnail:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      rating: 4.6,
      reviews: 189,
      lessons: 36,
    },
  ];

  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  const stats = [
    { label: "Total Courses", value: "12", icon: "📚", color: "from-blue-500 to-blue-600" },
    { label: "Total Students", value: "1,240", icon: "👥", color: "from-purple-500 to-purple-600" },
    { label: "Revenue", value: "₹45,000", icon: "💰", color: "from-green-500 to-green-600" },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            My Courses
          </h1>
          <p className="text-gray-400 text-sm">Manage and monitor your courses</p>
        </div>
        <button
          onClick={() => navigate("/teacher/create-course")}
          className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 font-semibold flex items-center gap-2 whitespace-nowrap"
        >
          <span>+</span> Add Course
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
            style={{
              animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`,
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium mb-2">{stat.label}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{stat.value}</h2>
              </div>
              <span className="text-3xl md:text-4xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-white placeholder-gray-500"
          />
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, idx) => (
            <div
              key={course._id}
              className="group bg-gray-800/40 backdrop-blur border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
              style={{
                animation: `fadeInUp 0.5s ease-out ${idx * 0.15}s both`,
              }}
            >
              {/* Course Thumbnail */}
              <div className="relative overflow-hidden h-48 bg-gray-900">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <span
                  className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full backdrop-blur ${
                    course.status === "Published"
                      ? "bg-green-500/80 text-white"
                      : "bg-yellow-500/80 text-white"
                  }`}
                >
                  {course.status}
                </span>

                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur px-3 py-1 rounded-lg text-xs font-semibold">
                  ⭐ {course.rating}
                </div>
              </div>

              {/* Course Info */}
              <div className="p-5">
                <h2 className="text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h2>

                {/* Course Meta */}
                <div className="grid grid-cols-3 gap-3 mb-4 text-xs text-gray-300 bg-gray-900/40 p-3 rounded-lg">
                  <div className="text-center">
                    <p className="text-gray-400">👥 Students</p>
                    <p className="font-semibold text-white">{course.students}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400">📹 Lessons</p>
                    <p className="font-semibold text-white">{course.lessons}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400">💬 Reviews</p>
                    <p className="font-semibold text-white">{course.reviews}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <p className="text-gray-400 text-xs mb-1">Price</p>
                  <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                    ₹{course.price}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      navigate(`/teacher/edit-course/${course._id}`)
                    }
                    className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95"
                  >
                    ✏️ Edit
                  </button>
                  <button className="flex-1 bg-red-600/80 hover:bg-red-700 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95">
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="text-6xl mb-4">📭</div>
          <h3 className="text-2xl font-bold mb-2">No courses found</h3>
          <p className="text-gray-400 mb-6">
            {search ? "Try adjusting your search" : "Get started by creating your first course"}
          </p>
          {!search && (
            <button
              onClick={() => navigate("/teacher/create-course")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 font-semibold"
            >
              Create First Course
            </button>
          )}
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TeacherCourses;