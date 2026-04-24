import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const menuItem = path.split("/").pop();
    setActiveMenu(menuItem || "dashboard");
  }, [location.pathname]);

  const menuItems = [
    { icon: "📊", label: "Dashboard", path: "/admin/dashboard", id: "dashboard" },
    { icon: "👥", label: "Users", path: "/admin/users", id: "users" },
    { icon: "📚", label: "Courses", path: "/admin/courses", id: "courses" },
    { icon: "➕", label: "Add Course", path: "/admin/add-course", id: "add-course" },
    { icon: "💰", label: "Revenue", path: "/admin/revenue", id: "revenue" },
    { icon: "📝", label: "Reports", path: "/admin/reports", id: "reports" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      
      {/* Sidebar */}
      <div
      className={`fixed md:relative top-0 left-0 h-screen md:h-auto 
        transition-all duration-300 bg-gradient-to-b from-slate-900 to-slate-800 
        border-r border-white/10 z-40
        ${sidebarOpen ? "w-64" : "w-0 md:w-64"} 
        overflow-hidden md:overflow-visible`}
        >
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-4 border-b border-white/10">
          <div className={`flex items-center gap-3 ${!sidebarOpen && "justify-center w-full"}`}>
            <span className="text-3xl">🛡️</span>
            {sidebarOpen && <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Admin</span>}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-140px)]">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                activeMenu === item.id
                  ? "bg-blue-600/30 border-l-4 border-blue-500 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-slate-900/50">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/20 transition-all duration-300 ${
              !sidebarOpen && "justify-center"
            }`}
          >
            <span className="text-xl">🚪</span>
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        
        {/* Top Bar */}
        <div className="bg-slate-900 border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
          >
            <i className={`fa-solid fa-${sidebarOpen ? "chevron-left" : "bars"} text-xl`}></i>
          </button>

          <h1 className="text-2xl font-bold flex-1">Admin Panel</h1>

          {/* User Profile */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium">Administrator</p>
              <p className="text-xs text-gray-400">System Admin</p>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6 bg-slate-950">
          <Outlet />
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminLayout;
