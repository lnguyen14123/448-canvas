import React from "react";
import { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Course() {
  const { courseId } = useParams();
  const assignments = [
    { id: 1, title: "Homework 1" },
    { id: 2, title: "Project" }
  ];

  const [activeTab, setActiveTab] = useState("home");
  const renderTab = () => {
		switch (activeTab) {
    case "home":
			return <p className="ml-10"> Home tab.</p>;
    case "syllabus":
			return <p className="ml-10"> Syllabus tab.</p>;
		case "modules":
			return <p className="ml-10"> Modules tab.</p>;
		case "assignments":
			return (
				<div>
					<p className="ml-10">Assignments Tab</p>
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
			case "grade":
				return <p className="ml-10">Grade tab.</p>;
			default:
				return null;
			}
	};

  return (
    <div>
      <div className={'h-screen w-screen text-center'}>
      <div className="flex min-h-screen">
        <Sidebar />
        
        
				<div className="pb-2 block border-r">
          <h1 className="text-3xl font-bold mb-4">Course {courseId}</h1>
          <button className="block">
            ☰
          </button>
          
          <button
					className={`pb-2 block ${
						activeTab === "home" ? "border-b-2" : ""}`}
					onClick={() => setActiveTab("home")}>Home</button>

					<button
					className={`pb-2 block ${
						activeTab === "home" ? "border-b-2" : ""}`}
					onClick={() => setActiveTab("syllabus")}>Syllabus</button>
          
					<button
					className={`pb-2 block ${
						activeTab === "home" ? "border-b-2" : ""}`}
					onClick={() => setActiveTab("modules")}>Modules</button>

					<button
					className={`pb-2 block ${
						activeTab === "profile" ? "border-b-2" : ""}`}
					onClick={() => setActiveTab("assignments")}>Assignments</button>

					<button
					className={`pb-2 block ${
						activeTab === "settings" ? "border-b-2" : ""}`}
					onClick={() => setActiveTab("grade")}>Grade</button>
				</div>

				<div className="mt-4">{renderTab()}</div>
        </div>
			</div>
    </div>
  );
}
