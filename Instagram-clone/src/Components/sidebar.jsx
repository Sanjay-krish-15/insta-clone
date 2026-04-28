import React, { useState } from "react";
import "../Styles/sidebar.css";
import { useSidebarActions } from "../sidebarActions";
import CreateDropdown from "../Create";
import NotificationPanel from "../NotificationPanel";
import MoreDropdown from "../MoreDropdown";

function Sidebar({ openSearch }) {

  const {
    goHome,
    goExplore,
    goMessages,
    goProfile,
    goReels
  } = useSidebarActions();

  const [expanded, setExpanded] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div
        className={`sidebar-container ${expanded ? "expanded" : ""}`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >

        <div className="sidebar-inner">

          <div className="sidebar-top">
            <i className="bi bi-instagram fs-4"></i>
          </div>

          <div className="sidebar-items">

            <div className="menu-item" onClick={goHome}>
              <i className="bi bi-house-door-fill fs-4"></i>
              {expanded && <span>Home</span>}
            </div>

            <div className="menu-item" onClick={goReels}>
              <i className="bi bi-play-btn fs-4"></i>
              {expanded && <span>Reels</span>}
            </div>

            <div className="menu-item" onClick={goMessages}>
              <i className="bi bi-send fs-4"></i>
              {expanded && <span>Messages</span>}
            </div>

            <div className="menu-item" onClick={openSearch}>
              <i className="bi bi-search fs-4"></i>
              {expanded && <span>Search</span>}
            </div>

            <div className="menu-item" onClick={goExplore}>
              <i className="bi bi-compass fs-4"></i>
              {expanded && <span>Explore</span>}
            </div>

            <div
              className="menu-item"
              onClick={() => setShowNotifications(true)}
            >
              <i className="bi bi-heart fs-4"></i>
              {expanded && <span>Notifications</span>}
            </div>

            <div
              className="menu-item position-relative"
              onClick={() => setShowCreate(!showCreate)}
            >
              <i className="bi bi-plus-lg fs-4"></i>
              {expanded && <span>Create</span>}

              <CreateDropdown
                isOpen={showCreate}
                closeDropdown={() => setShowCreate(false)}
              />
            </div>

            <div className="menu-item" onClick={goProfile}>
              <i className="bi bi-person-circle fs-4"></i>
              {expanded && <span>Profile</span>}
            </div>

          </div>

          <div className="sidebar-bottom">

            <div
              className="menu-item"
              onClick={() => setShowMore(!showMore)}
            >
              <i className="bi bi-list fs-4"></i>
              {expanded && <span>More</span>}
            </div>

            <MoreDropdown
              isOpen={showMore}
              closeDropdown={() => setShowMore(false)}
            />

            <div className="menu-item">
              <i className="bi bi-boxes fs-4"></i>
              {expanded && <span>Also from Meta</span>}
            </div>

          </div>

        </div>

      </div>

      <NotificationPanel
        isOpen={showNotifications}
        closePanel={() => setShowNotifications(false)}
      />
    </>
  );
}

export default Sidebar;