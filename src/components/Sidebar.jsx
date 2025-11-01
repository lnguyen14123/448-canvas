import React from "react";
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
} from "lucide-react";

import logo from "../assets/logo.png";

export default function Sidebar() {
  const location = useLocation(); // gets current URL path

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

  return (
    <aside className="w-[10vw] bg-black text-white flex flex-col items-center space-y-6 shadow-lg">
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
      <nav className="flex flex-col items-center space-y-6 text-md relative">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to; // check if current page

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
  );
}
