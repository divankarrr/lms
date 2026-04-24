const express = require('express');
const routes = express.Router();
const Course = require('../Models/Course');

// GET all courses
routes.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
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

// GET single course by ID
routes.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }
    res.status(200).json({
      success: true,
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

// CREATE new course
routes.post('/', async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);
    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: newCourse
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Error creating course",
      error: error.message
    });
  }
});

// UPDATE course by ID
routes.put('/:id', async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Error updating course",
      error: error.message
    });
  }
});

// DELETE course by ID
routes.delete('/:id', async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    if (!deletedCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
      data: deletedCourse
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error deleting course",
      error: error.message
    });
  }
});
module.exports = routes;