import React, { useState } from "react";

export default function Switch({id}) {

  return (
    <section>
      <input
        className="react-switch-checkbox"
        id={id}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={id}
      >
        <span className={`react-switch-button`} />
      </label>
    </section>
  );
}
