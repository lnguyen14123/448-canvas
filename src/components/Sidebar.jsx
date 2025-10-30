import React from "react";
import { Link } from "react-router-dom";
import {
  User,
  LayoutDashboard,
  BookOpen,
  Users,
  Calendar,
  Mail,
  Clock,
  PlayCircle,
  BookMarked,
  HelpCircle,
  GraduationCap,
} from "lucide-react"; // run: npm install lucide-react

import logo from "../assets/logo.png"

export default function Sidebar() {
  return (
    <aside className="w-[10vw] bg-black text-white flex flex-col items-center space-y-6 shadow-lg">
      {/* App Icon / Logo */}
      {/* Logo */}
<div className="mb-2">
  <Link to="/" className="flex items-center justify-center">
    <img
      src={logo}
      alt="Logo"
      className="w-[6vw] object-contain rounded hover:opacity-80 transition-opacity duration-200"
    />
  </Link>
</div>

      {/* Nav Links */}
      <nav className="flex flex-col items-center space-y-6 text-md">
        <Link to="/account" className="flex flex-col items-center hover:text-blue-400">
          <User className="w-8 h-8 mb-1" />
          <span className="">Account</span>
        </Link>

        <Link to="/" className="flex flex-col items-center hover:text-blue-400">
          <LayoutDashboard className="w-8 h-8 mb-1" />
          <span className="">Dashboard</span>
        </Link>

        <Link to="/courses" className="flex flex-col items-center hover:text-blue-400">
          <BookOpen className="w-8 h-8 mb-1" />
          <span className="">Courses</span>
        </Link>

        <Link to="/groups" className="flex flex-col items-center hover:text-blue-400">
          <Users className="w-8 h-8 mb-1" />
          <span className="">Groups</span>
        </Link>

        <Link to="/calendar" className="flex flex-col items-center hover:text-blue-400">
          <Calendar className="w-8 h-8 mb-1" />
          <span className="">Calendar</span>
        </Link>

        <Link to="/inbox" className="flex flex-col items-center hover:text-blue-400">
          <Mail className="w-7 h-7 mb-1" />
          <span className="">Inbox</span>
        </Link>

        {/* <Link to="/history" className="flex flex-col items-center hover:text-blue-400">
          <Clock className="w-5 h-5 mb-1" />
          <span className="text-xs">History</span>
        </Link>

        <Link to="/my-media" className="flex flex-col items-center hover:text-blue-400">
          <PlayCircle className="w-5 h-5 mb-1" />
          <span className="text-xs">My Media</span>
        </Link> */}

        <Link to="/textbooks" className="flex flex-col items-center hover:text-blue-400">
          <BookMarked className="w-7 h-7 mb-1" />
          <span className="">Textbooks</span>
        </Link>

        <Link to="/help" className="flex flex-col items-center hover:text-blue-400">
          <HelpCircle className="w-7 h-7 mb-1" />
          <span className="">Help</span>
        </Link>
      </nav>
    </aside>
  );
}
