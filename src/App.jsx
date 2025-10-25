import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";
// import Assignment from "./pages/Assignment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/course/:courseId" element={<Course />} />
        {/* <Route path="/course/:courseId/assignment/:assignmentId" element={<Assignment />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
