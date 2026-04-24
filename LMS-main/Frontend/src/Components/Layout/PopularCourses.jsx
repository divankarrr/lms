import React from 'react'
import { useNavigate } from 'react-router-dom';

const PopularCourses = () => {
  const navigate = useNavigate();
  const popularCourses = [
  {
    _id: 1,
    name: "Surya Batch",
    type: "Development",
    star: 5,
    description: "Complete MERN stack development from basics to advanced with real-world projects.",
    startDate: "01/01/2026",
    expireDate: "01/01/2027",
    duration: "6 Months",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    price: 99
  },
  {
    _id: 2,
    name: "UI/UX Mastery",
    type: "Design",
    star: 4.8,
    description: "Learn modern UI/UX design principles, Figma, and real-world design projects.",
    startDate: "10/01/2026",
    expireDate: "10/01/2027",
    duration: "4 Months",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
    price: 39
  },
  {
    _id: 3,
    name: "Full Stack Pro",
    type: "Development",
    star: 5,
    description: "Advanced full stack development with Node.js, React, MongoDB, and deployment.",
    startDate: "15/01/2026",
    expireDate: "15/01/2027",
    duration: "7 Months",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    price: 59
  },
  {
    _id: 4,
    name: "Digital Marketing Bootcamp",
    type: "Marketing",
    star: 4.7,
    description: "Master SEO, social media marketing, ads, and branding strategies.",
    startDate: "05/02/2026",
    expireDate: "05/02/2027",
    duration: "3 Months",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    price: 29
  },
  {
    _id: 5,
    name: "Business Growth Mastery",
    type: "Business",
    star: 4.6,
    description: "Learn startup strategies, scaling, and business management from experts.",
    startDate: "20/01/2026",
    expireDate: "20/01/2027",
    duration: "5 Months",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    price: 399
  },
  {
    _id: 6,
    name: "Data Science Elite",
    type: "Scientist",
    star: 4.9,
    description: "Python, machine learning, data analysis, and AI fundamentals.",
    startDate: "01/03/2026",
    expireDate: "01/03/2027",
    duration: "8 Months",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    price: 69
  },
  {
    _id: 7,
    name: "Frontend Mastery",
    type: "Development",
    star: 4.8,
    description: "HTML, CSS, JavaScript, React, and modern UI frameworks with projects.",
    startDate: "12/02/2026",
    expireDate: "12/02/2027",
    duration: "4 Months",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    price: 37
  },
  {
    _id: 8,
    name: "Graphic Design Pro",
    type: "Design",
    star: 4.5,
    description: "Photoshop, Illustrator, branding, and creative design workflows.",
    startDate: "18/02/2026",
    expireDate: "18/02/2027",
    duration: "3 Months",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    price: 25
  },
  {
    _id: 9,
    name: "AI & Machine Learning",
    type: "Scientist",
    star: 5,
    description: "Deep learning, neural networks, and real-world AI applications.",
    startDate: "10/03/2026",
    expireDate: "10/03/2027",
    duration: "9 Months",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    price: 79
  }
];
  return (
       <div className="px-10 py-10">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {popularCourses.map((course) => (
          <div
            key={course._id}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden 
                       backdrop-blur-md hover:scale-105 transition duration-300"
          >
            
            {/* Image */}
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-4 text-white">
              
              {/* Title */}
              <h2 className="text-lg font-semibold mb-1">
                {course.name}
              </h2>

              {/* Type */}
              <p className="text-sm text-gray-400 mb-2">
                {course.type}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-300 line-clamp-2 mb-3">
                {course.description}
              </p>

              {/* Info Row */}
              <div className="flex justify-between text-sm text-gray-400 mb-3">
                <span>⭐ {course.star}</span>
                <span>{course.duration}</span>
              </div>

              {/* Price */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-400">
                  ₹{course.price}
                </span>

               <button onClick={() => navigate(`/course/${course._id}`, { state: course })} className="text-sm bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-700">
                Enroll
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default PopularCourses