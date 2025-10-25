import React from "react";
import { useParams, Link } from "react-router-dom";

export default function Course() {
  const { courseId } = useParams();
  const assignments = [
    { id: 1, title: "Homework 1" },
    { id: 2, title: "Project" }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Course {courseId}</h1>
      <ul>
        {assignments.map(a => (
          <li key={a.id} className="mb-2">
            <Link to={`assignment/${a.id}`} className="text-blue-500 hover:underline">
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
