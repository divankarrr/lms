import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const TeacherNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "Students", icon: "👥" },
    { name: "Courses", icon: "📖" },
    { name: "Add-Course", icon: "➕📚", label: "Add Course" },
    { name: "Add-Student", icon: "➕👥", label: "Add Student" },
    { name: "Analytics", icon: "📈" },
    { name: "Settings", icon: "⚙️" },
  ];

  // Determine active item based on current route
  const getActiveIndex = () => {
    const path = location.pathname.toLowerCase();
    return navItems.findIndex(item => path.includes(item.name.toLowerCase())) ?? 0;
  };

  const [navBar, setNavBar] = useState(
    navItems.map((item, idx) => ({
      ...item,
      active: idx === getActiveIndex()
    }))
  );

  // Update navbar active state when location changes
  React.useEffect(() => {
    const activeIndex = getActiveIndex();
    setNavBar(prev =>
      prev.map((item, idx) => ({
        ...item,
        active: idx === activeIndex
      }))
    );
  }, [location.pathname]);

  return (
    <div className="fixed left-0 top-0 h-screen w-64 hidden md:flex flex-col p-6 border-r border-white/10 bg-slate-950/80 backdrop-blur-xl z-50">

      {/* LOGO */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          📚 SkillNest
        </h1>
        <p className="text-xs text-gray-500 mt-1">Teacher Dashboard</p>
      </div>

      {/* NAV */}
      <nav className="flex-1 space-y-2">
        {navBar.map((item, idx) => (
          <button
            key={idx}
            onClick={() => {
              setNavBar(prev =>
                prev.map((navItem, i) => ({
                  ...navItem,
                  active: i === idx
                }))
              );

  navigate(`/teacher/${item.name.toLowerCase()}`);
}}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
              item.active
                ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label || item.name}
          </button>
        ))}
      </nav>

      {/* ACCOUNT */}
      <div className="border-t border-white/10 pt-4">
        <p className="text-xs text-gray-500 mb-3">ACCOUNT</p>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
          <div className="flex-1">
            <p className="text-sm font-medium">Dr. Smith</p>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TeacherNavBar