import React from "react";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Course() {
  const { courseId } = useParams();

  const sections = [
    { name: "Home", color: "bg-blue-500", path: `/courses/${courseId}/home` },
    { name: "Grades", color: "bg-green-500", path: `/courses/${courseId}/grades` },
    { name: "Modules", color: "bg-yellow-400", path: `/courses/${courseId}/modules` },
    { name: "Assignments", color: "bg-red-400", path: `/courses/${courseId}/assignments` },
    { name: "People", color: "bg-purple-500", path: `/courses/${courseId}/people` },
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

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top Navigation Section */}
<section className="bg-white p-6 rounded-lg shadow-xl border mb-8">
  <nav className="flex justify-evenly">
    {sections.map((section) => (
      <Link
        key={section.name}
        to={section.path}
        className={`${section.color} text-xl text-white px-4 py-2 rounded-lg font-bold hover:opacity-80 transition`}
      >
        {section.name}
      </Link>
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Content Section</h2>
          <p className="text-gray-700">
            This is where the content for each section would appear when clicked.
          </p>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="w-[20vw] bg-white p-6 flex-shrink-0 shadow-lg">
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
