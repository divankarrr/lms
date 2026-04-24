const express = require('express');
const routes = express.Router();
const Batch = require('../Models/Batch');
const { protect, admin } = require('../middleware/Authentication');

// GET all batches (admin or teacher can view)
routes.get('/', protect, async (req, res) => {
  try {
    let query = {};
    
    // If not admin, only show batches created by the teacher
    if (req.user.role !== 'admin') {
      query.createdBy = req.user._id;
    }

    const batches = await Batch.find(query)
      .populate('course', 'title description')
      .populate('students', 'name email')
      .populate('createdBy', 'name email');

    res.status(200).json({
      success: true,
      count: batches.length,
      data: batches
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

// GET single batch by ID
routes.get('/:id', protect, async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id)
      .populate('course', 'title description')
      .populate('students', 'name email')
      .populate('createdBy', 'name email');

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found"
      });
    }

    // Check if user has permission to view this batch
    if (req.user.role !== 'admin' && batch.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to view this batch"
      });
    }

    res.status(200).json({
      success: true,
      data: batch
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

// CREATE new batch (teacher only)
routes.post('/', protect, async (req, res) => {
  try {
    const { name, course, students, startDate, endDate } = req.body;

    // Only teachers and admins can create batches
    if (req.user.role !== 'Teacher' && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: "Only teachers can create batches"
      });
    }

    const batch = await Batch.create({
      name,
      course,
      students: students || [],
      startDate,
      endDate,
      createdBy: req.user._id
    });

    await batch.populate('course', 'title description');
    await batch.populate('students', 'name email');
    await batch.populate('createdBy', 'name email');

    res.status(201).json({
      success: true,
      message: "Batch created successfully",
      data: batch
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

// UPDATE batch
routes.put('/:id', protect, async (req, res) => {
  try {
    const { name, course, students, startDate, endDate, isActive } = req.body;

    const batch = await Batch.findById(req.params.id);

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found"
      });
    }

    // Check if user has permission to update this batch
    if (req.user.role !== 'admin' && batch.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this batch"
      });
    }

    const updatedBatch = await Batch.findByIdAndUpdate(
      req.params.id,
      { name, course, students, startDate, endDate, isActive },
      { new: true, runValidators: true }
    )
      .populate('course', 'title description')
      .populate('students', 'name email')
      .populate('createdBy', 'name email');

    res.status(200).json({
      success: true,
      message: "Batch updated successfully",
      data: updatedBatch
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

// DELETE batch
routes.delete('/:id', protect, async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id);

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found"
      });
    }

    // Check if user has permission to delete this batch
    if (req.user.role !== 'admin' && batch.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this batch"
      });
    }

    await Batch.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Batch deleted successfully"
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

// ADD student to batch
routes.post('/:id/students', protect, async (req, res) => {
  try {
    const { studentId } = req.body;

    const batch = await Batch.findById(req.params.id);

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found"
      });
    }

    // Check if user has permission
    if (req.user.role !== 'admin' && batch.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to modify this batch"
      });
    }

    if (batch.students.includes(studentId)) {
      return res.status(400).json({
        success: false,
        message: "Student already in batch"
      });
    }

    batch.students.push(studentId);
    await batch.save();

    await batch.populate('students', 'name email');

    res.status(200).json({
      success: true,
      message: "Student added to batch successfully",
      data: batch
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

// REMOVE student from batch
routes.delete('/:id/students/:studentId', protect, async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id);

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found"
      });
    }

    // Check if user has permission
    if (req.user.role !== 'admin' && batch.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to modify this batch"
      });
    }

    batch.students = batch.students.filter(id => id.toString() !== req.params.studentId);
    await batch.save();

    res.status(200).json({
      success: true,
      message: "Student removed from batch successfully"
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