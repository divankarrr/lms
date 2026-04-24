import React, { useState } from "react";

const AdminAddCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    teacher: "",
    category: "web",
    level: "beginner",
    price: "",
    duration: "",
    language: "english",
    maxStudents: "",
    thumbnail: null,
    status: "draft"
  });

  const [submitted, setSubmitted] = useState(false);
  const [courses, setCourses] = useState([]);

  const teachers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Sarah Smith" },
    { id: 3, name: "Mike Johnson" },
    { id: 4, name: "Emily Brown" },
  ];

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
    const selectedTeacher = teachers.find(t => t.id === parseInt(formData.teacher));
    
    const newCourse = {
      id: courses.length + 1,
      title: formData.title,
      teacher: selectedTeacher?.name,
      category: formData.category,
      level: formData.level,
      price: formData.price,
      students: 0,
      rating: 0,
      status: formData.status,
      createdDate: new Date().toLocaleDateString()
    };

    setCourses([...courses, newCourse]);
    console.log("Course added:", newCourse);
    setSubmitted(true);
    setFormData({
      title: "",
      description: "",
      teacher: "",
      category: "web",
      level: "beginner",
      price: "",
      duration: "",
      language: "english",
      maxStudents: "",
      thumbnail: null,
      status: "draft"
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };

  const handleRemoveCourse = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  const getStatusColor = (status) => {
    return status === "published" 
      ? "bg-green-500/20 text-green-400" 
      : "bg-yellow-500/20 text-yellow-400";
  };

  const getCategoryColor = (category) => {
    const colors = {
      web: "text-blue-400",
      backend: "text-purple-400",
      data: "text-green-400",
      design: "text-pink-400",
      devops: "text-orange-400"
    };
    return colors[category] || "text-gray-400";
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Add New Course to Platform</h1>
        <p className="text-gray-400 mt-2">Create and manage courses on the platform</p>
      </div>

      {/* Form Card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-8">
        {submitted && (
          <div className="mb-6 bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="text-white font-semibold">Course added successfully!</p>
              <p className="text-gray-300 text-sm">The course is now available on the platform.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Select Teacher */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              Assign to Teacher <span className="text-red-400">*</span>
            </label>
            <select
              name="teacher"
              value={formData.teacher}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            >
              <option value="">Select a teacher...</option>
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </option>
              ))}
            </select>
          </div>

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
              placeholder="e.g., Advanced React Patterns"
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
              rows="4"
              className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
              placeholder="Describe the course content and learning objectives..."
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

          {/* Grid - Price, Duration, Max Students */}
          <div className="grid md:grid-cols-3 gap-6">
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
                placeholder="e.g., 599"
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
                placeholder="e.g., 50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Max Students
              </label>
              <input
                type="number"
                name="maxStudents"
                value={formData.maxStudents}
                onChange={handleChange}
                min="0"
                className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="e.g., 500"
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              Course Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            >
              <option value="draft">Draft (Visible to admin only)</option>
              <option value="published">Published (Visible to all)</option>
            </select>
            <p className="text-gray-500 text-xs mt-2">
              <i className="fa-solid fa-info-circle mr-1"></i>
              Published courses are visible to all students
            </p>
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
              <i className="fa-solid fa-plus mr-2"></i> Add Course
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

      {/* Added Courses List */}
      {courses.length > 0 && (
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Recently Added Courses ({courses.length})</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 bg-slate-800/50">
                <tr>
                  <th className="px-4 py-3 text-gray-400 font-semibold">#</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Course Title</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Teacher</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Category</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Level</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Status</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {courses.map((course) => (
                  <tr key={course.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-gray-300">{course.id}</td>
                    <td className="px-4 py-3 text-white font-medium">{course.title}</td>
                    <td className="px-4 py-3 text-gray-300">{course.teacher}</td>
                    <td className={`px-4 py-3 font-medium ${getCategoryColor(course.category)}`}>
                      {course.category}
                    </td>
                    <td className="px-4 py-3 text-gray-300 capitalize">{course.level}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(course.status)}`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleRemoveCourse(course.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                        title="Delete course"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Information Box */}
      <div className="bg-blue-500/20 border border-blue-500 rounded-2xl p-6">
        <h3 className="text-white font-bold mb-3 flex items-center gap-2">
          <i className="fa-solid fa-lightbulb"></i> Course Moderation Guidelines
        </h3>
        <ul className="text-gray-300 space-y-2 text-sm">
          <li>✓ Verify all courses meet platform quality standards</li>
          <li>✓ Ensure course content aligns with its description</li>
          <li>✓ Check that instructors are verified and qualified</li>
          <li>✓ Review courses before publishing them publicly</li>
          <li>✓ Courses in draft status are not visible to students</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminAddCourse;
