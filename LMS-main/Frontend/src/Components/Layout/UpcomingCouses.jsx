import React, { useRef } from "react";

const UpcomingCourses = () => {
  const upcomingCourses = [
    {
      _id: 101,
      name: "Next.js Mastery",
      type: "Development",
      star: 4.9,
      description: "Learn server-side rendering, routing, and advanced Next.js concepts.",
      startDate: "15/04/2026",
      duration: "3 Months",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
      students: 234,
      color: "from-blue-500 to-cyan-500"
    },
    {
      _id: 102,
      name: "Advanced UI Animation",
      type: "Design",
      star: 4.7,
      description: "Master animations using Framer Motion and modern UI techniques.",
      startDate: "20/04/2026",
      duration: "2 Months",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
      students: 189,
      color: "from-pink-500 to-rose-500"
    },
    {
      _id: 103,
      name: "Startup Launchpad",
      type: "Business",
      star: 4.6,
      description: "Build and launch your startup with real-world strategies.",
      startDate: "01/05/2026",
      duration: "4 Months",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
      students: 156,
      color: "from-orange-500 to-amber-500"
    },
    {
      _id: 104,
      name: "AI for Beginners",
      type: "Scientist",
      star: 5,
      description: "Introduction to AI, ML models, and real-world applications.",
      startDate: "10/05/2026",
      duration: "5 Months",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      students: 412,
      color: "from-purple-500 to-violet-500"
    },
    {
      _id: 105,
      name: "SEO & Growth Hacks",
      type: "Marketing",
      star: 4.8,
      description: "Learn SEO, traffic growth, and content marketing strategies.",
      startDate: "18/04/2026",
      duration: "2.5 Months",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      students: 298,
      color: "from-green-500 to-emerald-500"
    },
    {
      _id: 106,
      name: "React Native Bootcamp",
      type: "Development",
      star: 4.9,
      description: "Build mobile apps using React Native and Expo.",
      startDate: "25/04/2026",
      duration: "4 Months",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      students: 367,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const categoryColors = {
    Development: "from-blue-500 to-blue-600",
    Design: "from-pink-500 to-rose-600",
    Business: "from-orange-500 to-orange-600",
    Scientist: "from-purple-500 to-indigo-600",
    Marketing: "from-green-500 to-emerald-600",
  };

  return (
    <div className="px-5 md:px-10 py-16 bg-gradient-to-b from-transparent to-slate-900/30">
      
      {/* Header Section */}
      <div className="mb-10">
        <div className="flex justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              🚀 Upcoming Courses
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Discover new learning opportunities launching soon
            </p>
          </div>

          {/* Scroll Buttons */}
          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll left"
            >
              <span className="text-xl">←</span>
            </button>

            <button
              onClick={scrollRight}
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll right"
            >
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
      >
        
        {upcomingCourses.map((course, idx) => (
          <div
            key={course._id}
            className="min-w-[100%] sm:min-w-[50%] md:min-w-[35%] lg:min-w-[28%] group animate-fadeInUp"
            style={{
              animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
            }}
          >
            <div
              className="relative h-full bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur border border-white/10 rounded-2xl overflow-hidden 
                         hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 bg-gray-900">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Category Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${categoryColors[course.type]} px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg backdrop-blur`}>
                  {course.type}
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur px-3 py-1 rounded-lg text-xs font-semibold text-yellow-300 border border-white/20">
                  ⭐ {course.star}
                </div>

                {/* Start Date Badge */}
                <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur px-3 py-1 rounded-lg text-xs font-semibold text-white border border-white/20">
                  📅 {course.startDate}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col h-full">
                
                {/* Title & Type */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {course.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                  {course.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-white/5 rounded-lg">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="text-sm font-semibold text-white">⏱️ {course.duration}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Enrollments</p>
                    <p className="text-sm font-semibold text-white">👥 {course.students}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                  View Details
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default UpcomingCourses;