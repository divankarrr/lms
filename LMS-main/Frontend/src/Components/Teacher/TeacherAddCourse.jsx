import React, { useState } from "react";

const TeacherAddCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "web",
    level: "beginner",
    price: "",
    duration: "",
    language: "english",
    prerequisites: "",
    thumbnail: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      thumbnail: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course created:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        title: "",
        description: "",
        category: "web",
        level: "beginner",
        price: "",
        duration: "",
        language: "english",
        prerequisites: "",
        thumbnail: null,
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Create New Course</h1>
        <p className="text-gray-400 mt-2">Add a new course to your teaching portfolio</p>
      </div>

      {/* Form Card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-8">
        {submitted && (
          <div className="mb-6 bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="text-white font-semibold">Course created successfully!</p>
              <p className="text-gray-300 text-sm">Your course is now visible to students.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              Course Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="e.g., React Mastery 2024"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              Description <span className="text-red-400">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
              placeholder="Describe what students will learn in this course..."
            />
          </div>

          {/* Grid - Category, Level, Language */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Category <span className="text-red-400">*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              >
                <option value="web">Web Development</option>
                <option value="backend">Backend</option>
                <option value="data">Data Science</option>
                <option value="design">UI/UX Design</option>
                <option value="devops">DevOps</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Level <span className="text-red-400">*</span>
              </label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Language <span className="text-red-400">*</span>
              </label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>
          </div>

          {/* Grid - Price, Duration */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Price (₹) <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="e.g., 499"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Duration (hours) <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                min="1"
                className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="e.g., 40"
              />
            </div>
          </div>

          {/* Prerequisites */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              Prerequisites
            </label>
            <textarea
              name="prerequisites"
              value={formData.prerequisites}
              onChange={handleChange}
              rows="3"
              className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
              placeholder="List any prerequisites for this course..."
            />
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              Course Thumbnail
            </label>
            <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-white/40 transition-colors cursor-pointer group">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="thumbnail-input"
              />
              <label htmlFor="thumbnail-input" className="cursor-pointer">
                <div className="text-4xl mb-3">📷</div>
                <p className="text-gray-300 font-semibold mb-1">
                  {formData.thumbnail ? formData.thumbnail.name : "Click to upload course thumbnail"}
                </p>
                <p className="text-gray-500 text-sm">PNG, JPG up to 5MB</p>
              </label>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300"
            >
              <i className="fa-solid fa-plus mr-2"></i> Create Course
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300"
            >
              <i className="fa-solid fa-times mr-2"></i> Cancel
            </button>
          </div>
        </form>
      </div>

      {/* Information Box */}
      <div className="bg-blue-500/20 border border-blue-500 rounded-2xl p-6">
        <h3 className="text-white font-bold mb-3 flex items-center gap-2">
          <i className="fa-solid fa-lightbulb"></i> Tips for Creating a Great Course
        </h3>
        <ul className="text-gray-300 space-y-2 text-sm">
          <li>✓ Use clear, descriptive titles that explain what students will learn</li>
          <li>✓ Write detailed descriptions covering course objectives and outcomes</li>
          <li>✓ Set appropriate pricing based on course duration and content quality</li>
          <li>✓ Clearly list prerequisites so students know their skill level</li>
          <li>✓ Use high-quality thumbnail images that stand out</li>
        </ul>
      </div>
    </div>
  );
};

export default TeacherAddCourse;
