import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  User,
  LayoutDashboard,
  BookOpen,
  Users,
  Calendar,
  Mail,
  BookMarked,
  HelpCircle,
  ChevronRight,
} from "lucide-react";


export default function Sidebar() {
  const location = useLocation();
  const [isCoursesExpanded, setIsCoursesExpanded] = useState(false);

  const courses = [
    { id: 1, name: "CS 101", subject: "Introduction to Computer Science", color: "bg-blue-500" },
    { id: 2, name: "MATH 201", subject: "Calculus II", color: "bg-green-500" },
    { id: 3, name: "ENG 102", subject: "Critical Writing and Analysis", color: "bg-red-500" },
    { id: 4, name: "HIST 210", subject: "World Civilizations", color: "bg-yellow-500" },
    { id: 5, name: "SCI 210", subject: "General Biology", color: "bg-orange-500" }
  ];

  const navItems = [
    { to: "/account", label: "Account", icon: <User className="w-8 h-8 mb-1" /> },
    { to: "/", label: "Dashboard", icon: <LayoutDashboard className="w-8 h-8 mb-1" /> },
    { to: "/courses", label: "Courses", icon: <BookOpen className="w-8 h-8 mb-1" /> },
    { to: "/groups", label: "Groups", icon: <Users className="w-8 h-8 mb-1" /> },
    { to: "/calendar", label: "Calendar", icon: <Calendar className="w-8 h-8 mb-1" /> },
    { to: "/inbox", label: "Inbox", icon: <Mail className="w-7 h-7 mb-1" /> },
    { to: "/textbooks", label: "Textbooks", icon: <BookMarked className="w-7 h-7 mb-1" /> },
    { to: "/help", label: "Help", icon: <HelpCircle className="w-7 h-7 mb-1" /> },
  ];

  const toggleCourses = () => {
    setIsCoursesExpanded(!isCoursesExpanded);
  };

  return (
    <div className="flex">
      {/* Main Sidebar */}
      <aside className="w-[10vw] bg-black text-white flex flex-col items-center space-y-6 shadow-lg relative z-20">
        {/* Logo */}
        <div className="mb-2">
          <Link to="/" className="flex items-center justify-center">
            <img
              src={"/logo.png"}
              alt="Logo"
              className="w-[6vw] object-contain rounded hover:opacity-80 transition-opacity duration-200"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col items-center space-y-6 text-md relative w-full">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            
            // Special handling for Courses item
            if (item.label === "Courses") {
              return (
                <div key={item.label} className="relative group w-full">
                  <button
                    onClick={toggleCourses}
                    className={`
                      flex flex-col items-center transition duration-200 w-full
                      ${isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"}
                      ${isCoursesExpanded ? "text-blue-400" : ""}
                    `}
                  >
                    <div className="flex flex-col items-center">
                      {item.icon}
                      <div className="flex items-center">
                        <span>{item.label}</span>
                      </div>
                    </div>
                  </button>

                  {/* Tooltip */}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-gray-800 text-white text-sm rounded-lg py-1 px-3 opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-200 whitespace-nowrap z-21 shadow-lg">
                    {item.label}
                  </div>
                </div>
              );
            }

            // Regular nav items
            return (
              <div key={item.label} className="relative group">
                <Link
                  to={item.to}
                  className={`
                    flex flex-col items-center transition duration-200
                    ${isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"}
                  `}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>

                {/* Tooltip */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-gray-800 text-white text-sm rounded-lg py-1 px-3 opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-200 whitespace-nowrap z-10 shadow-lg">
                  {item.label}
                </div>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Courses Side Panel */}
      <div className={`
        fixed left-[10vw] top-0 h-full bg-gray-900 text-white shadow-xl transition-all duration-300 ease-in-out z-21
        ${isCoursesExpanded ? "w-64 opacity-100" : "w-0 opacity-0 overflow-hidden"}
      `}>
        <div className="p-4 h-full overflow-y-auto">
          {/* Panel Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">My Courses</h2>
            <button
              onClick={toggleCourses}
              className="p-1 hover:bg-gray-800 rounded transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 rotate-90" />
            </button>
          </div>

          {/* Courses List */}
          <div className="space-y-3">
            {courses.map((course) => (
              <Link
                key={course.id}
                to={`/course/${course.id}`}
                className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-all duration-200 border border-gray-700 hover:border-gray-600 group"
                onClick={() => setIsCoursesExpanded(false)}
              >
                <div className={`w-4 h-4 rounded-full ${course.color} mr-3 flex-shrink-0`}></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-200">
                      {course.name}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 truncate mt-1">
                    {course.subject}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Courses Link */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <Link
              to="/courses"
              className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
              onClick={() => setIsCoursesExpanded(false)}
            >
              View All Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile/click outside */}
      {isCoursesExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden"
          onClick={() => setIsCoursesExpanded(false)}
        />
      )}
    </div>
  );
}