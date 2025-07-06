import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Student/Home";
import CoursesList from "./pages/Student/CoursesList";
import CourseDetails from "./pages/Student/CourseDetails";
import MyEnrollments from "./pages/Student/MyEnrollments";
import Player from "./pages/Student/Player";
import Loading from "./components/student/Loading";
import Educator from "./pages/Educator/Educator";
import Dashboard from "./pages/Educator/Dashboard";
import AddCourses from "./pages/Educator/AddCourses";
import MyCourses from "./pages/Educator/MyCourses";
import StudentsEnrolled from "./pages/Educator/StudentsEnrolled";
import Navbar from "./components/student/Navbar";

export default function App() {
  return (
    <div className="text-default min-h-screen bg-white">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/courseId" element={<Player />} />
        <Route path="/loading/path" element={<Loading />} />
        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourses />} />
          <Route path="my-course" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
}
