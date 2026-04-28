import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./Components/sidebar";
import MainFeed from "./Pages/mainfeed";
import Suggestions from "./Components/suggestions";
import Explore from "./Pages/explore";
import Profile from "./Pages/profile";
import Messages from "./Pages/Message";
import NotificationPanel from "./NotificationPanel";
import SearchPanel from "./searchPanel";
import Reels from "./Pages/Reels";
import MessageButton from "./Components/messagebutton";

import "./Styles/index.css";

function App() {

  const location = useLocation(); 
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const isExplorePage = location.pathname.startsWith("/explore");
  const isProfilePage = location.pathname.startsWith("/profile");
  const isReelsPage = location.pathname.startsWith("/reels");
  const isMessagesPage = location.pathname.startsWith("/messages");

  return (
    <div className="d-flex vh-100">

        
      <div style={{ width: isMessagesPage ? "6%" : "12%" }}>
        <Sidebar
          openSearch={() => setSearchOpen(true)}
          openNotifications={() => setNotificationOpen(true)}
        />
      </div>


      
      <SearchPanel
        isOpen={searchOpen}
        closeDropdown={() => setSearchOpen(false)}
      />

      
      <NotificationPanel
        isOpen={notificationOpen}
        closePanel={() => setNotificationOpen(false)}
      />


      
      <MessageButton />
 
      <div
        style={{
          width:
            isExplorePage ||
            isReelsPage ||
            isMessagesPage ||
            isProfilePage
              ? "90%"
              : "50%",
        }}
      >

        <Routes>

          <Route path="/" element={<MainFeed />} />

          <Route path="/explore" element={<Explore />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/messages" element={<Messages />} />

          <Route path="/reels" element={<Reels />} />

        </Routes>

      </div>


      {!isExplorePage &&
        !isProfilePage &&
        !isMessagesPage &&
        !isReelsPage && (

          <div style={{ width: "40%", padding: "20px" }}>
            <Suggestions />
          </div>

        )}

    </div>
  );
}

export default App;