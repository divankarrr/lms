import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const CourseDetails = () => {
  const location = useLocation();
  const course = location.state;
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <p className="text-white text-xl">No Course Data Found</p>
          <button 
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-12 px-4">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Top Navigation */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
        >
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left - Course Image & Basic Info */}
          <div className="lg:col-span-2">
            
            {/* Course Image */}
            <div className="relative rounded-2xl overflow-hidden mb-8 h-80 md:h-96 shadow-2xl group">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                {course.type}
              </div>

              {/* Rating on image */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur px-4 py-2 rounded-lg">
                <span className="text-yellow-400 text-lg">⭐</span>
                <span className="font-bold">{course.star}</span>
              </div>
            </div>

            {/* Course Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {course.name}
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {course.description}
            </p>

            {/* Course Meta Info */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 py-8 border-y border-gray-700">
              
              <div>
                <p className="text-gray-500 text-sm mb-2">Duration</p>
                <p className="text-xl font-bold">{course.duration}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-2">Start Date</p>
                <p className="text-xl font-bold">{course.startDate}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-2">Expires On</p>
                <p className="text-xl font-bold">{course.expireDate}</p>
              </div>

            </div>

            {/* What's Included */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-blue-400 text-xl">✓</span>
                  <span>Lifetime access to course materials</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-blue-400 text-xl">✓</span>
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-blue-400 text-xl">✓</span>
                  <span>Real-world projects & assignments</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-blue-400 text-xl">✓</span>
                  <span>24/7 instructor support</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right - Sidebar with Price & CTA */}
          <div className="lg:col-span-1">
            
            {/* Sticky Price Card */}
            <div className="sticky top-24 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
              
              {/* Price */}
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-2">Price</p>
                <p className="text-5xl font-black text-blue-400">₹{course.price}</p>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-700 my-6"></div>

              {/* Enroll Button */}
              <button
                onClick={() => navigate(`/enroll/${course._id}`, { state: course })}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-lg mb-3 transform hover:scale-105 active:scale-95"
              >
                <i className="fa-solid fa-play mr-2"></i>Enroll Now
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-full py-3 px-6 rounded-xl border-2 font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isWishlisted
                    ? "border-red-500 bg-red-500/20 text-red-400 hover:bg-red-500/30"
                    : "border-slate-600 text-gray-300 hover:border-slate-500 hover:bg-slate-700/50"
                }`}
              >
                <i className={`fa-solid fa-heart ${isWishlisted ? "text-red-500" : ""}`}></i>
                {isWishlisted ? "Wishlisted" : "Wishlist"}
              </button>

              {/* Divider */}
              <div className="border-t border-slate-700 my-6"></div>

              {/* Info Items */}
              <div className="space-y-4 text-sm">
                
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">📊</span>
                  <div>
                    <p className="text-gray-500 text-xs">Rating</p>
                    <p className="font-semibold text-yellow-400">{course.star} Rating</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">👥</span>
                  <div>
                    <p className="text-gray-500 text-xs">Students</p>
                    <p className="font-semibold">2,450+ enrolled</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">🎯</span>
                  <div>
                    <p className="text-gray-500 text-xs">Difficulty</p>
                    <p className="font-semibold">Intermediate</p>
                  </div>
                </div>

              </div>

              {/* Divider */}
              <div className="border-t border-slate-700 my-6"></div>

              {/* Safe Guarantee */}
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">30-Day Money Back</p>
                <p className="text-xs text-gray-400">Full refund, no questions asked</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default CourseDetails;