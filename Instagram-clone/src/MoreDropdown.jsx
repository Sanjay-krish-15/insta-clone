import React, { useEffect, useRef } from "react";
import "./MoreDropdown.css";

function MoreDropdown({ isOpen, closeDropdown }) {
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
    <div ref={dropdownRef} className="more-dropdown-box">

      <div className="more-dropdown-item">
        <span>Settings</span>
        <i className="bi bi-gear"></i>
      </div>

      <div className="more-dropdown-item">
        <span>Your activity</span>
        <i className="bi bi-clock-history"></i>
      </div>

      <div className="more-dropdown-item">
        <span>Saved</span>
        <i className="bi bi-bookmark"></i>
      </div>

      <div className="more-dropdown-item">
        <span>Switch appearance</span>
        <i className="bi bi-brightness-high"></i>
      </div>

      <div className="more-dropdown-item">
        <span>Report a problem</span>
        <i className="bi bi-exclamation-circle"></i>
      </div>

      <hr className="dropdown-divider" />

      <div className="more-dropdown-item">
        <span>Switch accounts</span>
      </div>

      <div className="more-dropdown-item logout">
        <span>Log out</span>
      </div>

    </div>
  );
}

export default MoreDropdown;