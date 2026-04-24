require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Atlas connected successfully');
    return true;
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    throw error;
  }
}

module.exports = connectDB;