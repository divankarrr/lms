import React, { useState } from "react";

const StudentManagement = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      batch: "React Batch A",
      progress: 80,
      attendance: 90,
    },
    {
      id: 2,
      name: "Bob Smith",
      batch: "React Batch B",
      progress: 65,
      attendance: 75,
    },
    {
      id: 3,
      name: "Charlie Brown",
      batch: "Node Batch A",
      progress: 50,
      attendance: 60,
    },
  ]);

  // remove student
  const handleRemove = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="bg-gradient-to-br from-white/8 to-white/5 border border-white/10 rounded-xl p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Student Management</h2>
          <p className="text-gray-400 text-sm">
            Track attendance, progress & batches
          </p>
        </div>

        <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg">
          + Add Student
        </button>
      </div>

      {/* TABLE HEADER */}
      <div className="grid grid-cols-6 text-gray-400 text-sm border-b border-white/10 pb-2 mb-4">
        <p className="px-3">Name</p>
        <p className="px-3">Batch</p>
        <p className="px-3">Attendance</p>
        <p className="px-3">Progress</p>
        <p className="px-3">Status</p>
        <p className="text-right px-6">Action</p>
      </div>

      {/* STUDENTS LIST */}
      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="grid grid-cols-6 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition"
          >
            {/* NAME */}
            <p className="font-medium">{student.name}</p>

            {/* BATCH */}
            <p className="text-gray-300">{student.batch}</p>

            {/* ATTENDANCE */}
            <div className="px-3">
              <p className="text-sm">{student.attendance}%</p>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${student.attendance}%` }}
                ></div>
              </div>
            </div>

            {/* PROGRESS */}
            <div className="px-3">
              <p className="text-sm">{student.progress}%</p>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${student.progress}%` }}
                ></div>
              </div>
            </div>

            {/* STATUS */}
            <p
              className={`text-sm font-semibold px-3 ${
                student.attendance > 75
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {student.attendance > 75 ? "Safe" : "At Risk"}
            </p>

            {/* ACTION */}
            <div className="flex justify-end">
              <button
                onClick={() => handleRemove(student.id)}
                className="bg-red-500/20 text-red-400 px-3 py-1 rounded-lg hover:bg-red-500/30 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {students.length === 0 && (
        <p className="text-center text-gray-400 mt-6">
          No students in this batch
        </p>
      )}
    </div>
  );
};

export default StudentManagement;