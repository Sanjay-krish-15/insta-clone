import React from "react";
import "../Styles/ScrollButton.css";

const ScrollButton = ({
  direction = "down",
  axis = "y",
  size = "medium",
  scrollAmount = 200,
  targetId,
}) => {
  const scroll = () => {
    const target = targetId
      ? document.getElementById(targetId)
      : window;

    if (!target) return;

    if (target === window) {
      window.scrollBy({
        top: axis === "y" ? (direction === "down" ? scrollAmount : -scrollAmount) : 0,
        left: axis === "x" ? (direction === "right" ? scrollAmount : -scrollAmount) : 0,
        behavior: "smooth",
      });
    } else {
      target.scrollBy({
        top: axis === "y" ? (direction === "down" ? scrollAmount : -scrollAmount) : 0,
        left: axis === "x" ? (direction === "right" ? scrollAmount : -scrollAmount) : 0,
        behavior: "smooth",
      });
    }
  };

  const getIcon = () => {
    switch (direction) {
      case "up":
        return "↑";
      case "down":
        return "↓";
      case "left":
        return "←";
      case "right":
        return "→";
      default:
        return "↓";
    }
  };

  return (
    <button
      className={`scroll-btn scroll-${size}`}
      onClick={scroll}
    >
      {getIcon()}
    </button>
  );
};

export default ScrollButton;