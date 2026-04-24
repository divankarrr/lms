import React, { useState } from "react";

const TeacherAddStudent = () => {
  const [formData, setFormData] = useState({
    studentEmail: "",
    courseId: "1",
    enrollmentType: "manual",
  });

  const [submitted, setSubmitted] = useState(false);
  const [students, setStudents] = useState([]);

  const myCourses = [
    { id: 1, name: "React Mastery", icon: "🌐" },
    { id: 2, name: "Node.js API", icon: "⚙️" },
    { id: 3, name: "Next.js Full Stack", icon: "🚀" },
    { id: 4, name: "TypeScript Pro", icon: "📘" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCourse = myCourses.find(c => c.id === parseInt(formData.courseId));
    const newStudent = {
      id: students.length + 1,
      email: formData.studentEmail,
      courseName: selectedCourse.name,
      enrolledDate: new Date().toLocaleDateString(),
      status: "Active"
    };
    
    setStudents([...students, newStudent]);
    console.log("Student added:", newStudent);
    setSubmitted(true);
    setFormData({
      studentEmail: "",
      courseId: "1",
      enrollmentType: "manual",
    });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const handleRemoveStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Add Students to Course</h1>
        <p className="text-gray-400 mt-2">Enroll new students in your courses</p>
      </div>

      {/* Form Card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-8">
        {submitted && (
          <div className="mb-6 bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="text-white font-semibold">Student enrolled successfully!</p>
              <p className="text-gray-300 text-sm">The student has been added to the course.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Select Course */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              Select Course <span className="text-red-400">*</span>
            </label>
            <select
              name="courseId"
              value={formData.courseId}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            >
              {myCourses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
            <p className="text-gray-500 text-xs mt-2">
              <i className="fa-solid fa-info-circle mr-1"></i>
              Select the course you want to add the student to
            </p>
          </div>

          {/* Student Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              Student Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="studentEmail"
              value={formData.studentEmail}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="student@example.com"
            />
          </div>

          {/* Enrollment Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              Enrollment Type
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-white/10 hover:border-white/20 cursor-pointer transition-all">
                <input
                  type="radio"
                  name="enrollmentType"
                  value="manual"
                  checked={formData.enrollmentType === "manual"}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <div>
                  <p className="text-white font-semibold text-sm">Manual Enrollment</p>
                  <p className="text-gray-400 text-xs">Add student directly to course</p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-white/10 hover:border-white/20 cursor-pointer transition-all">
                <input
                  type="radio"
                  name="enrollmentType"
                  value="batch"
                  checked={formData.enrollmentType === "batch"}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <div>
                  <p className="text-white font-semibold text-sm">Batch Enrollment</p>
                  <p className="text-gray-400 text-xs">Upload CSV file for bulk enrollment</p>
                </div>
              </label>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300"
            >
              <i className="fa-solid fa-plus mr-2"></i> Enroll Student
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

      {/* Enrolled Students List */}
      {students.length > 0 && (
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Recently Enrolled Students ({students.length})</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 bg-slate-800/50">
                <tr>
                  <th className="px-4 py-3 text-gray-400 font-semibold">#</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Email</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Course</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Enrolled Date</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Status</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-gray-300">{student.id}</td>
                    <td className="px-4 py-3 text-white font-medium">{student.email}</td>
                    <td className="px-4 py-3 text-gray-300">{student.courseName}</td>
                    <td className="px-4 py-3 text-gray-400">{student.enrolledDate}</td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                        {student.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleRemoveStudent(student.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                        title="Remove student"
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
      <div className="bg-purple-500/20 border border-purple-500 rounded-2xl p-6">
        <h3 className="text-white font-bold mb-3 flex items-center gap-2">
          <i className="fa-solid fa-lightbulb"></i> How to Add Students
        </h3>
        <ul className="text-gray-300 space-y-2 text-sm">
          <li>✓ Use the exact email address the student registered with</li>
          <li>✓ Students will receive a notification email after enrollment</li>
          <li>✓ They can access course materials immediately</li>
          <li>✓ Use bulk enrollment for adding multiple students at once</li>
          <li>✓ You can remove students anytime if needed</li>
        </ul>
      </div>
    </div>
  );
};

export default TeacherAddStudent;
