import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const courses = [
    { id: 1, name: "CS101" },
    { id: 2, name: "Math201" }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id} className="mb-2">
            <Link to={`/course/${course.id}`} className="text-blue-500 hover:underline">
              {course.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
