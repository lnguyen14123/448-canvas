import React from "react";
import { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Course() {
	const { courseId } = useParams();

	const toggle = (index) => {
			setOpenIndex(openIndex === index ? null : index);
	};
	const [openIndex, setOpenIndex] = useState(null);
	const [openTabs, setOpenTabs] = useState(false);
	const hidetabs = () => {
			setOpenTabs(!openTabs);
	};

  	const assignments = [
        {
        name: "Project 1",
        category: "Project 1",
		due: "Oct 6",
		score: "10/10",
        },
        {
        name: "Project 1 Peer Review",
        category: "Project 1 teams",
		due: "Oct 16",
		score: "10/10",
        },
        {
        name: "Project 2",
        category: "Project 2",
		due: "Nov 3",
		score: "10/10",
        },
        {
        name: "Project 2 Peer Review",
        category: "Project 2 teams",
		due: "Nov 10",
		score: "10/10",
        },
    ];

	const assignmentList = [{
		Upcoming: "Upcoming Assignments",
		Past: "Past Assignments",
	
	}]
	
	const [activeTab, setActiveTab] = useState("home");
	const renderTab = () => {
		switch (activeTab) {
		case "home":
			return (
			<div className="m-5">
				<p> Home tab.</p>
			</div>
			);
		case "syllabus":
			return (
			<div className="m-5">
				<p> Syllabus tab.</p>
			</div>
			);
		case "modules":
			return (
			<div className="m-5">
			<p> Modules tab.</p>
			</div>
			);
		case "assignments":
			return (
				<div className="m-5">
					<p>Assignments Tab</p>
					<div className="space-y-4">
                	{assignments.map((assignment, index) => (
                    <div key={index} className="border-b pb-4">
                        <button
                            className="text-left w-full text-lg font-medium hover:text-blue-600 focus:outline-none bg-gray-200"
                            onClick={() => toggle(index)}
                        >
                        {assignment.category}
                        </button>
                        {openIndex === index && (
                            <p className="mt-2 text-gray-700">{assignment.name}</p>
                        )}
                    </div>
                ))}
				</div>
					
				</div>
			);
			case "grade":
				return(
					<div className="m-5">
						<ul className="text-2xl pb-2">Grades</ul>
						<div className="grid grid-cols-3 border-b pb-2 text-left text-lg font-medium">
							<ul>Assignment Name</ul>
							<ul>Due date</ul>
							<ul>Score</ul>
						</div>

						{assignments.map((grade) => (
						<div className="grid grid-cols-3 border-b text-left text-lg pb-2">
							<ul className="text-blue-500">{grade.name}</ul>
							<ul>{grade.due}</ul>
							<ul>{grade.score}</ul>

							<p className="mt-2 text-sm text-gray-700">{grade.category}</p>
						</div>
				
                	))}
					</div>
				);
			default:
				return null;
			}
	};

  return (
		<div className="h-screen w-screen flex">
		{/* Sidebar on the far left */}
		<Sidebar />

		<div className="flex-1 grid grid-rows-[auto_1fr]">
		{/* Top Bar / Course Header */}

		<div className=" p-4 flex items-center justify-between border-b">
			<button className="text-black text-2xl" onClick={hidetabs}>☰</button>
			<h1 className="text-3xl font-bold text-black">Course {courseId}</h1>
			<div className="w-8" /> {/* Spacer */}
		</div>

		{/* Tabs & Content */}
		
		<div className="grid grid-cols-[150px_1fr] h-full">
			{/* Link Tabs */}
			<div className="border-r border-black p-4 flex flex-col space-y-2 text-blue-500">
			{/* Link Buttons */}
          	<button
				className={`pb-2 block" ${
					activeTab === "home" ? "border-b-2 text-black" : ""}`}
				onClick={() => setActiveTab("home")}>Home</button>

			<button
				className={`pb-2 block ${
					activeTab === "syllabus" ? "border-b-2 text-black" : ""}`}
				onClick={() => setActiveTab("syllabus")}>Syllabus</button>
          
			<button
				className={`pb-2 block ${
					activeTab === "modules" ? "border-b-2 text-black" : ""}`}
				onClick={() => setActiveTab("modules")}>Modules</button>

			<button
				className={`pb-2 block ${
					activeTab === "assignments" ? "border-b-2 text-black" : ""}`}
				onClick={() => setActiveTab("assignments")}>Assignments</button>

			<button
				className={`pb-2 block ${
					activeTab === "grade" ? "border-b-2 text-black" : ""}`}
				onClick={() => setActiveTab("grade")}>Grade</button>
			</div>
			<div className="mt-4">{renderTab()}</div>
        </div>
		</div>
	</div>
  );
}
