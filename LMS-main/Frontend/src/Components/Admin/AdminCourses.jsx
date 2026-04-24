import React, { useState } from "react";

const AdminCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    { _id: 1, name: "React Mastery", instructor: "John Doe", students: 450, price: 499, revenue: "₹2.25L", status: "Published", rating: 4.8 },
    { _id: 2, name: "Node.js API", instructor: "Sarah Smith", students: 380, price: 699, revenue: "₹2.66L", status: "Published", rating: 4.6 },
    { _id: 3, name: "Next.js Advanced", instructor: "Mike Johnson", students: 290, price: 599, revenue: "₹1.74L", status: "Draft", rating: 4.7 },
    { _id: 4, name: "TypeScript Pro", instructor: "Emily Brown", students: 210, price: 549, revenue: "₹1.15L", status: "Published", rating: 4.5 },
    { _id: 5, name: "GraphQL Mastery", instructor: "Alex Wilson", students: 165, price: 449, revenue: "₹0.74L", status: "Published", rating: 4.9 },
  ];

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    return status === "Published" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400";
  };

  return (
    <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Courses Management</h1>
            <p className="text-gray-400 mt-2">View and manage all courses</p>
          </div>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 w-fit">
            <i className="fa-solid fa-plus"></i> Add Course
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm mb-2">Total Courses</p>
            <p className="text-3xl font-bold">{courses.length}</p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm mb-2">Published</p>
            <p className="text-3xl font-bold text-green-400">{courses.filter(c => c.status === "Published").length}</p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm mb-2">Total Students</p>
            <p className="text-3xl font-bold">{courses.reduce((sum, c) => sum + c.students, 0)}</p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm mb-2">Total Revenue</p>
            <p className="text-3xl font-bold text-green-400">₹12.5L</p>
          </div>
        </div>

        {/* Search */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Search Courses</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by course name or instructor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
            <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          </div>
        </div>

        {/* Courses Table */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl overflow-hidden">
          
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-7 gap-4 px-6 py-4 border-b border-white/10 bg-slate-800/50 font-semibold text-sm text-gray-400">
            <div>Course Name</div>
            <div>Instructor</div>
            <div>Students</div>
            <div>Price</div>
            <div>Revenue</div>
            <div>Status</div>
            <div>Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/10">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div key={course._id}>
                  {/* Desktop View */}
                  <div className="hidden md:grid grid-cols-7 gap-4 px-6 py-4 items-center hover:bg-white/5 transition-colors">
                    <div>
                      <p className="font-medium">{course.name}</p>
                      <p className="text-xs text-yellow-400">⭐ {course.rating}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{course.instructor}</p>
                    </div>
                    <div>
                      <p className="font-medium">{course.students}</p>
                    </div>
                    <div>
                      <p className="font-medium">₹{course.price}</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-400">{course.revenue}</p>
                    </div>
                    <div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(course.status)}`}>
                        {course.status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-blue-500/20 rounded-lg transition text-blue-400">
                        <i className="fa-solid fa-eye"></i>
                      </button>
                      <button className="p-2 hover:bg-purple-500/20 rounded-lg transition text-purple-400">
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button className="p-2 hover:bg-red-500/20 rounded-lg transition text-red-400">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>

                  {/* Mobile View */}
                  <div className="md:hidden p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-medium">{course.name}</p>
                        <p className="text-xs text-gray-400">{course.instructor}</p>
                        <p className="text-xs text-yellow-400 mt-1">⭐ {course.rating}</p>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusColor(course.status)}`}>
                        {course.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="text-gray-400">{course.students} students</span>
                        <span className="text-gray-400 mx-2">•</span>
                        <span className="text-green-400 font-medium">{course.revenue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-12 text-center">
                <p className="text-gray-400">No courses found</p>
              </div>
            )}
          </div>
        </div>

      </div>
  );
};

export default AdminCourses;
