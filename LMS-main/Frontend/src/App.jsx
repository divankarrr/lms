import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/Common/Header'
import UserLayout from "./Components/Layout/UserLayout";
import TeacherLayout from "./Components/Layout/TeacherLayout";
import Home from "./Pages/Home";
import CourseDetails from "./Pages/CousesDetails";
import MyCourses from "./Pages/MyCourses";
import BatchVideos from "./Pages/BatchVideos";
import EnrollCourse from "./Pages/EnrollCourse";
import OrderConfirmation from "./Pages/OrderConfirmation";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";
import TeacherDashBoard from "./Components/Teacher/TeacherDashBoard";
import StudentManagement from "./Components/Teacher/StudentManagement";
import TeacherCourses from "./Components/Teacher/TeacherCourses";
import TeacherAnalytics from "./Components/Teacher/TeacherAnalytics";
import TeacherAddCourse from "./Components/Teacher/TeacherAddCourse";
import TeacherAddStudent from "./Components/Teacher/TeacherAddStudent";
import AdminLayout from "./Components/Admin/AdminLayout";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import AdminUsers from "./Components/Admin/AdminUsers";
import AdminCourses from "./Components/Admin/AdminCourses";
import AdminAddCourse from "./Components/Admin/AdminAddCourse";
import AdminRevenue from "./Components/Admin/AdminRevenue";
import AdminReports from "./Components/Admin/AdminReports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/course/:id" element={<CourseDetails></CourseDetails>}></Route>
          <Route path="/my-courses" element={<MyCourses></MyCourses>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/courses" element={<Courses></Courses>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/my-order" element={<OrderConfirmation></OrderConfirmation>}></Route>
        </Route>
        <Route path="/video/:id" element={<BatchVideos></BatchVideos>}></Route>
        <Route path="/enroll/:id" element={<EnrollCourse></EnrollCourse>}></Route>
        
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<TeacherDashBoard />} />
          <Route path="dashboard" element={<TeacherDashBoard />} />
          <Route path="students" element={<StudentManagement />} />
          <Route path="Courses" element={<TeacherCourses></TeacherCourses>} />
          <Route path="analytics" element={<TeacherAnalytics></TeacherAnalytics>} />
          <Route path="add-course" element={<TeacherAddCourse />} />
          <Route path="add-student" element={<TeacherAddStudent />} />
        </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="courses" element={<AdminCourses />} />
        <Route path="add-course" element={<AdminAddCourse />} />
        <Route path="revenue" element={<AdminRevenue />} />
        <Route path="reports" element={<AdminReports />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;