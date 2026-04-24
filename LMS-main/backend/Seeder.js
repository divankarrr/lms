require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./Models/Course');
const { sampleCourses } = require('./Models/Course');

// Seed Courses
mongoose.connect(process.env.MONGODB_URI);
async function seedCourses() {
  try {
    await Course.deleteMany(); // Clear existing courses
    // Insert sample courses
    await Course.insertMany(sampleCourses);
    console.log('✓ 5 sample courses seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding courses:', error);
    process.exit(1);
  }
}
// Run seeder
seedCourses();

