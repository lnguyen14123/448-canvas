import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function Switch({ isOn, handleToggle }) {
  return (
    <section>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </section>
  );
}
