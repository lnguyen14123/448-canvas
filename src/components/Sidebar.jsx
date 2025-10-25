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
    <aside className="w-20 bg-black text-white flex flex-col items-center py-6 space-y-6 shadow-lg">
      {/* App Icon / Logo */}
      {/* Logo */}
      <div className="mb-4">
        <img
          src={logo}
          alt="Logo"
          className="w-10 h-10 object-contain rounded"
        />
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col items-center space-y-6 text-sm">
        <Link to="/account" className="flex flex-col items-center hover:text-blue-400">
          <User className="w-5 h-5 mb-1" />
          <span className="text-xs">Account</span>
        </Link>

        <Link to="/dashboard" className="flex flex-col items-center hover:text-blue-400">
          <LayoutDashboard className="w-5 h-5 mb-1" />
          <span className="text-xs">Dashboard</span>
        </Link>

        <Link to="/courses" className="flex flex-col items-center hover:text-blue-400">
          <BookOpen className="w-5 h-5 mb-1" />
          <span className="text-xs">Courses</span>
        </Link>

        <Link to="/groups" className="flex flex-col items-center hover:text-blue-400">
          <Users className="w-5 h-5 mb-1" />
          <span className="text-xs">Groups</span>
        </Link>

        <Link to="/calendar" className="flex flex-col items-center hover:text-blue-400">
          <Calendar className="w-5 h-5 mb-1" />
          <span className="text-xs">Calendar</span>
        </Link>

        <Link to="/inbox" className="flex flex-col items-center hover:text-blue-400">
          <Mail className="w-5 h-5 mb-1" />
          <span className="text-xs">Inbox</span>
        </Link>

        <Link to="/history" className="flex flex-col items-center hover:text-blue-400">
          <Clock className="w-5 h-5 mb-1" />
          <span className="text-xs">History</span>
        </Link>

        <Link to="/my-media" className="flex flex-col items-center hover:text-blue-400">
          <PlayCircle className="w-5 h-5 mb-1" />
          <span className="text-xs">My Media</span>
        </Link>

        <Link to="/textbooks" className="flex flex-col items-center hover:text-blue-400">
          <BookMarked className="w-5 h-5 mb-1" />
          <span className="text-xs">Textbooks</span>
        </Link>

        <Link to="/help" className="flex flex-col items-center hover:text-blue-400">
          <HelpCircle className="w-5 h-5 mb-1" />
          <span className="text-xs">Help</span>
        </Link>
      </nav>
    </aside>
  );
}
