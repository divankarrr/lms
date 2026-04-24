import React, { useState } from "react";

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  const users = [
    { _id: 1, name: "John Doe", email: "john@example.com", role: "Student", status: "Active", joinDate: "2024-01-15", courses: 5 },
    { _id: 2, name: "Sarah Smith", email: "sarah@example.com", role: "Teacher", status: "Active", joinDate: "2024-02-20", courses: 3 },
    { _id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Student", status: "Inactive", joinDate: "2024-03-10", courses: 0 },
    { _id: 4, name: "Emily Brown", email: "emily@example.com", role: "Teacher", status: "Active", joinDate: "2024-03-25", courses: 4 },
    { _id: 5, name: "Alex Wilson", email: "alex@example.com", role: "Student", status: "Active", joinDate: "2024-04-01", courses: 8 },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || user.role.toLowerCase() === filterRole.toLowerCase();
    return matchesSearch && matchesRole;
  });

  const getRoleColor = (role) => {
    switch(role) {
      case "Teacher": return "bg-purple-500/20 text-purple-400";
      case "Student": return "bg-blue-500/20 text-blue-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  const getStatusColor = (status) => {
    return status === "Active" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400";
  };

  return (
    <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Users Management</h1>
            <p className="text-gray-400 mt-2">Manage all platform users</p>
          </div>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 w-fit">
            <i className="fa-solid fa-plus"></i> Add User
          </button>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Search Users</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Filter by Role</label>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            >
              <option value="all">All Roles</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl overflow-hidden">
          
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-6 gap-4 px-6 py-4 border-b border-white/10 bg-slate-800/50 font-semibold text-sm text-gray-400">
            <div>Name</div>
            <div>Email</div>
            <div>Role</div>
            <div>Status</div>
            <div>Courses</div>
            <div>Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/10">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div key={user._id}>
                  {/* Desktop View */}
                  <div className="hidden md:grid grid-cols-6 gap-4 px-6 py-4 items-center hover:bg-white/5 transition-colors">
                    <div>
                      <p className="font-medium">{user.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{user.email}</p>
                    </div>
                    <div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                    </div>
                    <div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{user.courses}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-blue-500/20 rounded-lg transition text-blue-400">
                        <i className="fa-solid fa-eye"></i>
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
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-400">{user.email}</p>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className={`font-semibold px-2 py-1 rounded-full ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                      <span className="text-gray-400">{user.courses} courses</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-12 text-center">
                <p className="text-gray-400">No users found</p>
              </div>
            )}
          </div>
        </div>

        {/* Pagination (if needed) */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Showing {filteredUsers.length} of {users.length} users
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition disabled:opacity-50" disabled>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="px-4 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

      </div>
  );
};

export default AdminUsers;
