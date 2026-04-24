const express = require('express');
const routes = express.Router();
const User = require('../Models/User');
const Course = require('../Models/Course');
const { protect, admin } = require('../middleware/Authentication');

// GET admin dashboard stats
routes.get('/dashboard', protect, admin, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCourses = await Course.countDocuments();
    const totalTeachers = await User.countDocuments({ role: 'Teacher' });
    const totalStudents = await User.countDocuments({ role: 'Student' });

    const dashboardData = {
      totalUsers,
      totalCourses,
      totalTeachers,
      totalStudents,
      timestamp: new Date()
    };

    res.status(200).json({
      success: true,
      data: dashboardData
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
});

// GET all users with filters
routes.get('/users/list', protect, admin, async (req, res) => {
  try {
    const { role, search } = req.query;
    let query = {};

    if (role) {
      query.role = role;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const users = await User.find(query).select('-password');
    
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
});

// GET all courses
routes.get('/courses/list', protect, admin, async (req, res) => {
  try {
    const courses = await Course.find().populate('createdBy', 'name email');
    
    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
});

// DELETE user by ID
routes.delete('/users/:id', protect, admin, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
});

// DELETE course by ID
routes.delete('/courses/:id', protect, admin, async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
      data: course
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
});

// UPDATE user role
routes.put('/users/:id/role', protect, admin, async (req, res) => {
  try {
    const { role } = req.body;

    if (!['Student', 'Teacher', 'admin'].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role"
      });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User role updated successfully",
      data: user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
});

// GET user analytics
routes.get('/analytics/users', protect, admin, async (req, res) => {
  try {
    const usersByRole = await User.aggregate([
      {
        $group: {
          _id: '$role',
          count: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: usersByRole
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
});

// GET course analytics
routes.get('/analytics/courses', protect, admin, async (req, res) => {
  try {
    const courseStats = {
      totalCourses: await Course.countDocuments(),
      publishedCourses: await Course.countDocuments({ published: true }),
      draftCourses: await Course.countDocuments({ published: false })
    };

    res.status(200).json({
      success: true,
      data: courseStats
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
});

module.exports = routes;
