import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white text-black shadow-2xl rounded-2xl p-4 w-80 mb-3 border border-gray-200 animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Message Professor</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-500 transition">
              <X className="w-5 h-5" />
            </button>
          </div>
          <textarea
            className="w-full h-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Type your message..."
          ></textarea>
          <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Send
          </button>
        </div>
      )}

      {/* Floating Chat Button + Tooltip */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-3xl transition-transform duration-300 hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-1/2 mb-2 w-max bg-gray-800 text-white text-sm rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg pointer-events-none">
          Message your professor
        </div>
      </div>
    </div>
  );
}
