import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./sidebar";
import MainFeed from "./mainfeed";
import Suggestions from "./suggestions";
import Explore from "./explore";
import Profile from "./profile";
import Messages from "./Message";
import NotificationPanel from "./NotificationPanel";
import CreateDropdown from "./Create";
import MoreDropdown from "./MoreDropdown";
import Reels from "./Reels";

import "./index.css";

function App() {

  const location = useLocation();

  const isExplorePage = location.pathname.startsWith("/explore");
  const isProfilePage = location.pathname.startsWith("/profile");
  const isReelsPage = location.pathname.startsWith("/reels");
  const isMessagesPage = location.pathname.startsWith("/messages");
  const isNotificationPanel = location.pathname.startsWith("/NotificationPanel");


  return (
    <div className="d-flex vh-100">
      
      <div style={{ width: "10%" }}>
        <Sidebar />
      </div>

  
      <div
        style={{
          width:
            isExplorePage || isReelsPage || isMessagesPage || isProfilePage 
              ? "80%"
              : "60%",
        }}
      >
        
        <Routes>

          <Route path="/" element={<MainFeed />} />

          <Route path="/explore" element={<Explore />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/notifications" element={<NotificationPanel />} />

          <Route path="/messages" element={<Messages />} />

          <Route path="/reels" element={<Reels />} />

        </Routes>
      </div>

      
      {!isExplorePage && !isProfilePage && !isMessagesPage && !isReelsPage && (
          <div style={{ width: "20%",alignContent: "center",padding: "20px",}}>
            <Suggestions />
          </div>
        )}
        

    </div>



    
  );
}

export default App;
