import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const courses = [
    { id: 1, name: "CS101" },
    { id: 2, name: "Math201" },
    { id: 3, name: "ENG102" },
    { id: 4, name: "HIST210" }
  ];

  const todos = [
    { id: 1, task: "Finish CS101 assignment", done: false },
    { id: 2, task: "Read Math201 notes", done: true },
    { id: 3, task: "Join group meeting", done: false }
  ];

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <hr className="border-t border-gray-300" />
        </header>

        {/* Course Grid */}
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 p-6 flex items-center justify-center text-xl font-semibold text-gray-800"
            >
              {course.name}
            </Link>
          ))}
        </section>
      </main>

      {/* Right Sidebar - To-Do List */}
      <aside className="w-64 bg-white p-6 flex-shrink-0">
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
      </aside>
    </div>
  );
}
