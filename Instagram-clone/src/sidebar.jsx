import React, { useState } from "react";
import "./index.css";
import { useSidebarActions } from "./sidebarActions";
import CreateDropdown from "./Create";
import NotificationPanel from "./NotificationPanel";
import MoreDropdown from "./MoreDropdown";

function Sidebar() {

  const {
    goHome,
    goExplore,
    goMessages,
    goProfile,
    goReels,
    opensearchPanel
  } = useSidebarActions();

  const [showCreate, setShowCreate] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleCreateDropdown = () => {
    setShowCreate(prev => !prev);
  };

  const toggleMore = () => {
    setShowMore(prev => !prev);
  };

  return (
    <>
      <div className="m-3 position-fixed">

        <div
          className="d-flex flex-column justify-content-between vh-100"
          style={{ padding: "10px" }}
        >
         
          <div className="d-flex flex-column gap-5">

            <i className="bi bi-instagram fs-3"></i>

            <div className="sidebar-items d-flex flex-column gap-3">

              <div className="menu-item" onClick={goHome}>
                <i className="bi bi-house-door-fill fs-4"></i>
                <span className="label">Home</span>
              </div>

              <div className="menu-item" onClick={goReels}>
                <i className="bi bi-play-btn fs-4"></i>
                <span className="label">Reel</span>
              </div>

              <div className="menu-item" onClick={goMessages}>
                <i className="bi bi-send fs-4"></i>
                <span className="label">Messages</span>
              </div>

              <div className="menu-item" onClick={opensearchPanel}>
                <i className="bi bi-search fs-4"></i>
                <span className="label">Search</span>
              </div>

              <div className="menu-item" onClick={goExplore}>
                <i className="bi bi-compass fs-4"></i>
                <span className="label">Explore</span>
              </div>

              <div
                className="menu-item"
                onClick={() => setShowNotifications(true)}
              >
                <i className="bi bi-heart fs-4"></i>
                <span className="label">Notifications</span>
              </div>
              
              <div
                className="menu-item position-relative"
                onClick={toggleCreateDropdown}
              >
                <i className="bi bi-plus-lg fs-4"></i>
                <span className="label">Create</span>

                <CreateDropdown
                  isOpen={showCreate}
                  closeDropdown={() => setShowCreate(false)}
                />
              </div>

              <div className="menu-item" onClick={goProfile}>
                <i className="bi bi-person-circle fs-4"></i>
                <span className="label">Profile</span>
              </div>

            </div>
          </div>
          
          <div className="d-flex flex-column gap-3 mb-3 position-relative">

            <div
              className="menu-item"
              onClick={toggleMore}
            >
              <i className="bi bi-list fs-4"></i>
              <span className="label">More</span>
            </div>

            <MoreDropdown
              isOpen={showMore}
              closeDropdown={() => setShowMore(false)}
            />

            <div className="menu-item">
              <i className="bi bi-boxes fs-4"></i>
              <span className="label">Also from Meta</span>
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