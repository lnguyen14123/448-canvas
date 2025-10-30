import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import img from "../assets/lb_csulb.png";

export default function Dashboard() {
  const courses = [
    { id: 1, name: "CS 101", subject: "Introduction to Computer Science", color: "bg-blue-500" },
    { id: 2, name: "MATH 201", subject: "Calculus II", color: "bg-green-500" },
    { id: 3, name: "ENG 102", subject: "Critical Writing and Analysis", color: "bg-red-500" },
    { id: 4, name: "HIST 210", subject: "World Civilizations", color: "bg-yellow-500" },
    { id: 5, name: "SCI 210", subject: "General Biology", color: "bg-orange-500" }
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
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pr-[7vw]">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="rounded hover:scale-[1.02] transition-transform duration-200 flex flex-col overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,.3)]"
            >
              {/* Top colored section */}
              <div className={`${course.color} h-[17vh] w-full`}></div>

              {/* Bottom white section with text */}
              <div className="bg-white p-4 h-[15vh] flex flex-col justify-between items-start text-gray-800">
                {/* Subject at the top */}
                <p className="text-lg text-black">
                  {course.subject}
                </p>

                {/* Course name glued to bottom-left */}
                <p className="text-sm text-gray-500 font-semibold">
                  {course.name}
                </p>
              </div>
            </Link>
          ))}
        </section>
      </main>

      {/* Right Sidebar - To-Do List */}
      <aside className="w-[25vw] bg-white p-6 flex-shrink-0">
        <img
          src={img}
          alt=""
          className="h-[6vh] mb-2"
        />

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
