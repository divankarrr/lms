import React, { useState } from "react";
import RocketImage from "../assets/LMSimage.png";
import BestCourseBar from "../Components/Layout/BestCourseBar";
import PopularCourses from "../Components/Layout/PopularCourses";
import UpcomingCourses from "../Components/Layout/UpcomingCouses";
import Lottie from "lottie-react";
import rocket from "../LottieJson/Rocket.json";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    { icon: "🎓", title: "Expert Instructors", desc: "Learn from industry professionals" },
    { icon: "📜", title: "Certified Courses", desc: "Get recognized certifications" },
    { icon: "⏱️", title: "Learn at Your Pace", desc: "Study anytime, anywhere" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">

      {/* HERO SECTION */}
      <div
        className="relative w-full min-h-screen bg-cover bg-no-repeat bg-[position:70%_center] md:bg-center flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10"
        style={{ backgroundImage: `url(${RocketImage})` }}
      >
        {/* Enhanced Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

        {/* LEFT CONTENT */}
        <div className="relative z-10 w-full md:w-1/2 space-y-8 animate-fadeInUp mt-10 ">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20 w-fit mt-6">
            <span className="text-xl">⭐</span>
            <span className="text-sm font-medium">Trusted by 50,000+ Students</span>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="text-white">Skills & Unlock</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Opportunities
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg">
            Explore world-class courses designed by industry experts. Learn cutting-edge technologies and advance your career with personalized learning paths.
          </p>

          {/* ENHANCED SEARCH BAR */}
          <div className="relative w-full max-w-xl group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>
            
            <div className="relative flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:border-white/40 transition-all duration-300 overflow-hidden">
              <span className="pl-6 text-2xl">🔍</span>
              <input
                type="text"
                placeholder="Search courses, skills, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 pl-0 pr-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-base"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 pt-4">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <span className="text-xl">{feat.icon}</span>
                <span className="text-sm text-gray-300">{feat.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ANIMATION */}
        <div className="relative z-10 w-full md:w-1/2 flex justify-center items-end mt-10 md:mt-0 animate-fadeInDown">

          {/* Enhanced Glow */}
          <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl opacity-30 rounded-full animate-blob"></div>
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-pink-500 to-yellow-500 blur-3xl opacity-20 rounded-full animate-blob" style={{ animationDelay: "2s" }}></div>

          {/* Lottie with animation */}
          <div className="relative animate-float">
            <Lottie.default
              animationData={rocket}
              loop={true}
              className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] opacity-95 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      <div className="relative z-20">
        <BestCourseBar />
        <PopularCourses />
        <UpcomingCourses />
      </div>

      {/* Global Animations */}
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

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out 0.2s both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;