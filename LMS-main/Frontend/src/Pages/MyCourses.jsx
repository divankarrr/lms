import React from "react";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const navigate = useNavigate();
  const myCourses = [
  {
    _id: 201,
    name: "MERN Stack Complete",
    type: "Development",
    progress: 70,
    expiryDate: "01/01/2027",
    videos: [
      {
        topic: "HTML Basics",
        url: "https://www.youtube.com/embed/pQN-pnXPaVg"
      },
      {
        topic: "CSS Fundamentals",
        url: "https://www.youtube.com/embed/1Rs2ND1ryYc"
      },
      {
        topic: "JavaScript Crash Course",
        url: "https://www.youtube.com/embed/W6NZfCO5SIk"
      },
      {
        topic: "React JS Full Course",
        url: "https://www.youtube.com/embed/bMknfKXIFA8"
      },
      {
        topic: "Node.js & Express",
        url: "https://www.youtube.com/embed/Oe421EPjeBE"
      }
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
  },

  {
    _id: 202,
    name: "UI/UX Design Pro",
    type: "Design",
    progress: 40,
    expiryDate: "10/08/2027",
    videos: [
      {
        topic: "UI/UX Intro",
        url: "https://www.youtube.com/embed/3YgV6Gd8R8A" // replaced below
      },
      {
        topic: "Figma Basics",
        url: "https://www.youtube.com/embed/FTFaQWZBqQ8"
      },
      {
        topic: "Wireframing",
        url: "https://www.youtube.com/embed/9B7pQK9F2yU"
      },
      {
        topic: "Design Systems",
        url: "https://www.youtube.com/embed/3GJkH7Xyq9E"
      }
    ],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800"
  }
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white px-5 py-10 mt-14">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">My Courses</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 ">
        
        {myCourses.map((course) => (
          <div
            key={course._id}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md hover:scale-105 transition duration-300 realtive"
          >
            <div className="absolute right-0 top-0 bg-blue-700 rounded-md px-2"><p>Expiry Date {course.expiryDate}</p> </div>
            
            {/* Image */}
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              
              <h2 className="text-lg font-semibold">{course.name}</h2>
              <p className="text-sm text-gray-400">{course.type}</p>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1 text-gray-400">
                  {course.progress}% completed
                </p>
              </div>

              {/* Duration + Button */}
              <div className="flex mt-4">
               <button className="bg-blue-600 px-3 py-3 rounded-md hover:bg-blue-700 text-sm w-full" 
               onClick={() => navigate(`/video/${course._id}`, { state: course })}>Continue
               </button>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default MyCourses;