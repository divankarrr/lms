const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Web Development', 'Mobile Development', 'Data Science', 'Design', 'Business'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  students: {
    type: Number,
    default: 0
  },
  duration: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/300'
  },
  videos: [{
    videoId: String,
    title: String,
    duration: String,
    url: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Sample Data
const sampleCourses = [
  {
    title: "React Basics",
    description: "Learn React fundamentals including components, hooks, and state management",
    instructor: "John Doe",
    category: "Web Development",
    price: 49.99,
    rating: 4.8,
    students: 1250,
    duration: "8 hours",
    level: "Beginner",
    image: "https://via.placeholder.com/300?text=React",
    videos: [
      { videoId: "1", title: "Introduction to React", duration: "25 min", url: "https://example.com/video1" },
      { videoId: "2", title: "Components & Props", duration: "30 min", url: "https://example.com/video2" },
      { videoId: "3", title: "Hooks Explained", duration: "40 min", url: "https://example.com/video3" }
    ]
  },
  {
    title: "JavaScript Mastery",
    description: "Master JavaScript ES6+, async/await, and modern JavaScript patterns",
    instructor: "Jane Smith",
    category: "Web Development",
    price: 39.99,
    rating: 4.9,
    students: 2100,
    duration: "10 hours",
    level: "Intermediate",
    image: "https://via.placeholder.com/300?text=JavaScript",
    videos: [
      { videoId: "1", title: "ES6 Basics", duration: "35 min", url: "https://example.com/video1" },
      { videoId: "2", title: "Async/Await", duration: "45 min", url: "https://example.com/video2" }
    ]
  },
  {
    title: "Python for Data Science",
    description: "Learn Python with pandas, numpy, and matplotlib for data analysis",
    instructor: "Mike Johnson",
    category: "Data Science",
    price: 59.99,
    rating: 4.7,
    students: 890,
    duration: "12 hours",
    level: "Intermediate",
    image: "https://via.placeholder.com/300?text=Python",
    videos: [
      { videoId: "1", title: "Python Basics", duration: "30 min", url: "https://example.com/video1" },
      { videoId: "2", title: "Pandas Tutorial", duration: "50 min", url: "https://example.com/video2" }
    ]
  },
  {
    title: "UI/UX Design Principles",
    description: "Create beautiful user interfaces and enhance user experiences",
    instructor: "Sarah Williams",
    category: "Design",
    price: 44.99,
    rating: 4.6,
    students: 560,
    duration: "7 hours",
    level: "Beginner",
    image: "https://via.placeholder.com/300?text=Design",
    videos: [
      { videoId: "1", title: "Design Principles", duration: "40 min", url: "https://example.com/video1" },
      { videoId: "2", title: "Figma Tutorial", duration: "35 min", url: "https://example.com/video2" }
    ]
  },
  {
    title: "Advanced Node.js",
    description: "Build scalable backend applications with Node.js and Express",
    instructor: "Tom Brown",
    category: "Web Development",
    price: 54.99,
    rating: 4.8,
    students: 750,
    duration: "9 hours",
    level: "Advanced",
    image: "https://via.placeholder.com/300?text=Node.js",
    videos: [
      { videoId: "1", title: "Express Setup", duration: "25 min", url: "https://example.com/video1" },
      { videoId: "2", title: "Middleware", duration: "35 min", url: "https://example.com/video2" }
    ]
  }
];
module.exports = mongoose.model('Course', courseSchema);
module.exports.sampleCourses = sampleCourses;