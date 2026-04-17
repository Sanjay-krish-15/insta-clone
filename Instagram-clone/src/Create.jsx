import React, { useEffect, useRef } from "react";
import "./Create.css";

function CreateDropdown({ isOpen, closeDropdown }) {
  const dropdownRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, [closeDropdown]);

  if (!isOpen) return null;

  return (
    <div ref={dropdownRef} className="create-dropdown-box">
      <div
        className="create-dropdown-item"
        onClick={() => {
          console.log("Post clicked");
          closeDropdown();
        }}
      >
        <span>Post</span>
        <i className="bi bi-image"></i>
      </div>

      <div
        className="create-dropdown-item"
        onClick={() => {
          console.log("AI clicked");
          closeDropdown();
        }}
      >
        <span>AI</span>
        <i className="bi bi-grid-3x3-gap"></i>
      </div>
    </div>
  );
}

export default CreateDropdown;