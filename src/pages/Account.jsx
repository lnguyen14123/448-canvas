import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Profile() {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value)
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Account</h1>
        </header>
        <section>
          <h1 className="text-4xl">Name Pronounciation</h1>
          <br></br>
          <text>Current pronounciation: minh-tuhn-le</text>
          <br></br>
          <input
            type="text"
            size="50"
            style={{
              border: '2px solid black',
              borderRadius: '5px',
              padding: '8px'
            }}
            placeholder="Enter new name pronounciation here"></input>
          <br></br>
          <br></br>
        </section>
        <section>
          <h1 className="text-4xl">Contact</h1>
          <br></br>
          <text>Phone: (123) 456-7890</text>
          <br></br>
          <input
            type="text"
            size="50"
            style={{
              border: '2px solid black',
              borderRadius: '5px',
              padding: '8px'
            }}
            placeholder="Enter new phone number here"></input>
          <br></br>
          <br></br>
          <text>Address: Long Beach, CA</text>
          <br></br>
          <input
            type="text"
            size="50"
            style={{
              border: '2px solid black',
              borderRadius: '5px',
              padding: '8px'
            }}
            placeholder="Enter new home address here"></input>
          <br></br>
          <br></br>
          <text>Email: student@csulb.edu</text>
          <br></br>
          <input
            type="text"
            size="50"
            style={{
              border: '2px solid black',
              borderRadius: '5px',
              padding: '8px'
            }}
            placeholder="Enter new email address here"></input>
          <br></br>
          <br></br>
        </section>
        <section>
          <h1 className="text-4xl">About Me</h1>
          <br></br>
          <text>I like CECS 448</text>
          <br></br>
          <textarea
            style={{
              width: '420px',
              border: '2px solid black',
              borderRadius: '5px',
              padding: '8px'
            }}
            placeholder="Edit your about me here (or tell us something new)"></textarea>
          <br></br>
          <br></br>
        </section>
        <section>
          <h1 className="text-4xl">External Links</h1>
          <br></br>
          <text>LinkedIn: linkedin.com</text>
          <br></br>
          <text>GitHub: github.com</text>
          <br></br>
          <input
            type="text"
            size="50"
            style={{
              border: '2px solid black',
              borderRadius: '5px',
              padding: '8px'
            }}
            placeholder="Enter new external link here"></input>
            <br></br>
            <br></br>
        </section>
        <button
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px'
          }}>Save</button>
      </main>
    </div>
  );
}