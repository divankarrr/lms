import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const courses = [
    { id: 1, name: "React Mastery", category: "web", level: "intermediate", price: 499, rating: 4.8, students: 450, description: "Master React from basics to advanced concepts" },
    { id: 2, name: "Node.js Advanced", category: "backend", level: "advanced", price: 699, rating: 4.6, students: 380, description: "Build scalable server-side applications" },
    { id: 3, name: "Next.js Full Stack", category: "web", level: "intermediate", price: 599, rating: 4.7, students: 290, description: "Create modern full-stack applications" },
    { id: 4, name: "TypeScript Pro", category: "web", level: "intermediate", price: 549, rating: 4.5, students: 210, description: "Master TypeScript for production code" },
    { id: 5, name: "Machine Learning 101", category: "data", level: "beginner", price: 449, rating: 4.9, students: 380, description: "Introduction to ML and AI concepts" },
    { id: 6, name: "Python Data Science", category: "data", level: "intermediate", price: 549, rating: 4.7, students: 320, description: "Analyze data with Python and pandas" },
    { id: 7, name: "UI/UX Design", category: "design", level: "beginner", price: 399, rating: 4.8, students: 280, description: "Create beautiful and usable interfaces" },
    { id: 8, name: "Figma Masterclass", category: "design", level: "beginner", price: 349, rating: 4.6, students: 350, description: "Professional design with Figma" },
    { id: 9, name: "AWS Cloud Expert", category: "devops", level: "advanced", price: 799, rating: 4.9, students: 150, description: "Deploy and scale on AWS cloud" },
    { id: 10, name: "Docker & Kubernetes", category: "devops", level: "advanced", price: 679, rating: 4.7, students: 190, description: "Container orchestration mastery" },
    { id: 11, name: "Web Design Fundamentals", category: "design", level: "beginner", price: 299, rating: 4.5, students: 420, description: "Learn web design from scratch" },
    { id: 12, name: "GraphQL API Development", category: "backend", level: "intermediate", price: 549, rating: 4.8, students: 210, description: "Build modern APIs with GraphQL" },
  ];

  const categories = [
    { id: "all", name: "All Courses", icon: "📚" },
    { id: "web", name: "Web Development", icon: "🌐" },
    { id: "backend", name: "Backend", icon: "⚙️" },
    { id: "data", name: "Data Science", icon: "📊" },
    { id: "design", name: "UI/UX Design", icon: "🎨" },
    { id: "devops", name: "DevOps", icon: "🚀" },
  ];

  const levels = ["all", "beginner", "intermediate", "advanced"];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const getCategoryColor = (category) => {
    const colors = {
      web: "from-blue-600 to-blue-400",
      backend: "from-purple-600 to-purple-400",
      data: "from-green-600 to-green-400",
      design: "from-pink-600 to-pink-400",
      devops: "from-orange-600 to-orange-400"
    };
    return colors[category] || "from-gray-600 to-gray-400";
  };

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Explore Our Courses
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-8">
          Learn from industry experts. Gain real-world skills. Start your journey today.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
          <i className="fa-solid fa-magnifying-glass absolute right-6 top-1/2 -translate-y-1/2 text-gray-500"></i>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex gap-3 overflow-x-auto pb-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Level Filter */}
        <div className="flex gap-3 flex-wrap mt-4">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-2 rounded-lg font-semibold capitalize transition-all duration-300 text-sm ${
                selectedLevel === level
                  ? "bg-purple-600 text-white"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCourses.length > 0 ? (
          <>
            <p className="text-gray-400 mb-8">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 group cursor-pointer transform hover:scale-105"
                  onClick={() => navigate(`/course/${course.id}`)}
                >
                  {/* Course Image */}
                  <div className={`h-48 bg-gradient-to-br ${getCategoryColor(course.category)} relative overflow-hidden flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}>
                    {course.category === "web" && "🌐"}
                    {course.category === "backend" && "⚙️"}
                    {course.category === "data" && "📊"}
                    {course.category === "design" && "🎨"}
                    {course.category === "devops" && "🚀"}
                  </div>

                  {/* Course Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 capitalize`}>
                        {course.category}
                      </span>
                      <span className="text-xs font-semibold px-2 py-1 rounded bg-yellow-500/20 text-yellow-400">
                        ⭐ {course.rating}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-xs">Price</p>
                        <p className="text-lg font-bold text-green-400">₹{course.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-xs">{course.students} students</p>
                      </div>
                    </div>

                    <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-3xl mb-4">🔍</p>
            <p className="text-lg text-gray-400">No courses found matching your criteria</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Courses;
