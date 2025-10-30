import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Course() {
  const courseId = "CS101"; // for simplicity, or use useParams()
  
  const sections = [
    { name: "Home", color: "bg-blue-500" },
    { name: "Grades", color: "bg-green-500" },
    { name: "Modules", color: "bg-yellow-400" },
    { name: "Assignments", color: "bg-red-400" },
    { name: "People", color: "bg-purple-500" },
  ];

  const todos = [
    { id: 1, task: "Finish Homework 1", done: false },
    { id: 2, task: "Start Project 1", done: false },
    { id: 3, task: "Review Lecture Notes", done: true },
  ];

  const upcomingAssignments = [
    { id: 1, title: "Homework 1", due: "Oct 31, 2025" },
    { id: 2, title: "Project 1", due: "Nov 10, 2025" },
  ];

  const grades = [
    { id: 1, assignment: "Homework 1", grade: "95%", points:"9.5"},
    { id: 2, assignment: "Homework 2", grade: "95%", points:"9.5"},
    { id: 3, assignment: "Homework 3", grade: "95%", points:"9.5"},
    { id: 4, assignment: "Homework 4", grade: "95%", points:"9.5"},
    { id: 5, assignment: "Homework 5", grade: "95%", points:"9.5"},
    { id: 6, assignment: "Project 1", grade: "88%", points:"8.8"},
    { id: 7, assignment: "Project 2", grade: "88%", points:"8.8"},
    { id: 8, assignment: "Project 3", grade: "88%", points:"8.8"},
    { id: 9, assignment: "Project 4", grade: "88%", points:"8.8"},
  ];

  const [currentSection, setCurrentSection] = useState("Home"); // start on Home

  return (
<div className="h-screen flex overflow-hidden bg-gray-50">
      <Sidebar />

  <main className="flex-1 p-8 overflow-y-auto h-screen">
        {/* Top Navigation Section */}
        <section className="bg-white p-6 rounded-lg shadow-xl border mb-8">
          <nav className="flex justify-evenly">
            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => setCurrentSection(section.name)}
                className={`${section.color} text-xl text-white px-4 py-2 rounded-lg font-bold hover:opacity-80 transition`}
              >
                {section.name}
              </button>
            ))}
          </nav>
        </section>

        {/* Course Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              CS 101 - Introduction To Computer Science
            </h1>
            <p className="text-gray-600 mt-1">Fall 2025 • Instructor: Dr. Smith</p>
          </div>
        </header>

        {/* Main content */}
        <section>
{currentSection === "Home" && (
  <>
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Home</h2>
    <p className="text-gray-700 mb-6">Welcome to the course! Below you'll find key information, announcements, and resources to help you succeed this semester.</p>

    {/* Instructor Announcements */}
    <div className="bg-gray-50 p-4 rounded-2xl shadow-sm mb-6">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">Instructor Announcements</h3>
      <ul className="space-y-3 text-gray-700">
        <li className="border-b pb-2">
          <strong>📢 Oct 28:</strong> Midterm grades have been posted. Check the Grades section.
        </li>
        <li className="border-b pb-2">
          <strong>🧑‍🏫 Oct 25:</strong> Office hours moved to Wednesday, 3–5 PM.
        </li>
        <li>
          <strong>📚 Oct 20:</strong> Don’t forget to submit Homework 3 by Sunday midnight.
        </li>
      </ul>
    </div>

    {/* Course Information */}
    <div className="bg-white p-4 rounded-2xl shadow-sm mb-6">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">Course Information</h3>
      <p className="text-gray-700 mb-2"><strong>Course:</strong> CS101 – Introduction to Computer Science</p>
      <p className="text-gray-700 mb-2"><strong>Semester:</strong> Fall 2025</p>
      <p className="text-gray-700 mb-4"><strong>Location:</strong> ECS-302 / Online via Zoom</p>
      <p className="text-gray-700">This course introduces fundamental programming concepts, problem solving, and software design using Python. Students will also explore algorithmic thinking and data structures.</p>
    </div>

    {/* Instructor Info */}
    <div className="bg-gray-50 p-4 rounded-2xl shadow-sm mb-6">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">Instructor</h3>
      <p className="text-gray-700"><strong>Dr. Smith</strong></p>
      <p className="text-gray-700">Email: <a href="mailto:sarah.nguyen@university.edu" className="text-blue-600 hover:underline">smith@university.edu</a></p>
      <p className="text-gray-700">Office: ECS-512</p>
      <p className="text-gray-700">Office Hours: Wednesdays 3–5 PM (Zoom link in Announcements)</p>
    </div>

    {/* Syllabus and Resources */}
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">Resources</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <a href="#" className="text-blue-600 hover:underline">📄 Course Syllabus</a> — Detailed breakdown of grading, policies, and weekly topics.
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">💬 Discussion Forum</a> — Ask questions and discuss topics with classmates.
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">📅 Course Calendar</a> — View assignment due dates and upcoming exams.
        </li>
      </ul>
    </div>
  </>
)}

{currentSection === "Grades" && (
  <>
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Grades</h2>

    {/* Total Grade Summary */}
    <div className="mb-8 p-5 bg-blue-100 rounded-2xl shadow flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Overall Grade</h3>
        <p className="text-sm text-gray-600">Weighted total based on all submitted assignments</p>
      </div>
      <div className="text-right">
        <p className="text-3xl font-bold text-blue-800">91%</p>
        <p className="text-sm text-gray-700">A-</p>
      </div>
    </div>

    {/* Assignment Grades List */}
    <ul className="space-y-4">
      {grades.map((g) => (
        <li
          key={g.id}
          className="p-5 bg-gray-50 rounded-2xl shadow hover:shadow-md transition"
        >
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="font-semibold text-gray-900 text-lg">{g.assignment}</p>
              <p className="text-sm text-gray-600">Due: {g.dueDate ?? "N/A"}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-800">
                {g.points ?? 9} / {g.total ?? 10} pts
              </p>
              <p className="text-sm text-gray-600">
                {Math.round(((g.points ?? 9) / (g.total ?? 10)) * 100)}%
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{
                width: `${((g.points ?? 9) / (g.total ?? 10)) * 100}%`,
              }}
            ></div>
          </div>
        </li>
      ))}
    </ul>

    {/* Notes / Summary Section */}
    <div className="mt-8 p-4 bg-gray-100 rounded-2xl shadow-sm">
      <h3 className="font-semibold text-gray-800 mb-2">Grade Breakdown Notes</h3>
      <p className="text-gray-700 text-sm leading-relaxed">
        Your total grade is calculated based on weighted categories including
        homework (30%), projects (40%), and exams (30%). Grades are updated
        weekly. If you see any discrepancies, please contact your instructor.
      </p>
    </div>
  </>
)}

          {currentSection === "Modules" && (
            <p className="text-gray-700">Modules content goes here.</p>
          )}

          {currentSection === "Assignments" && (
            <p className="text-gray-700">Assignments content goes here.</p>
          )}

          {currentSection === "People" && (
            <p className="text-gray-700">People content goes here.</p>
          )}
        </section>
      </main>

      {/* Right Sidebar */}
  <aside className="w-[20vw] bg-white p-6 flex-shrink-0 shadow-lg h-screen overflow-y-auto">
        {/* To-Do List */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">To-Do</h2>
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`p-3 rounded-md shadow-sm ${
                  todo.done ? "bg-green-100 line-through text-gray-500" : "bg-gray-100"
                }`}
              >
                {todo.task}
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Assignments */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Upcoming Assignments</h2>
          <ul className="space-y-3">
            {upcomingAssignments.map((a) => (
              <li
                key={a.id}
                className="p-3 rounded-md shadow-sm bg-blue-50 hover:bg-blue-100 transition"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{a.title}</span>
                  <span className="text-sm text-gray-500">{a.due}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
