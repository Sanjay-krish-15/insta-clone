import "./Message.css";
import React, { useEffect, useState } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=12")
      .then((res) => res.json())
      .then((data) => {
        const formattedUsers = data.results.map((user, index) => ({
          id: index,
          username: "." + user.login.username.slice(0, 10),
          profilePic: user.picture.medium,
          lastMessage: "Sent you a message",
          time: `${Math.floor(Math.random() * 5) + 1}h`,
          unread: Math.random() > 0.5,
        }));

        setMessages(formattedUsers);
      })
      .catch((err) =>
        console.error("Error loading messages:", err)
      );
  }, []);

  return (
    <div className="messages-page">

       <div className="messages-sidebar">

        <div className="sidebar-header">
          <h3>.sanjay.krish.</h3>
        </div>

        
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
        />

        
        <div className="stories-row">

          <div className="story">
            <img src="https://i.pravatar.cc/150?img=12" alt="note" />
            <p>Your note</p>
          </div>

          {messages.map((user) => (
            <div key={user.id} className="story">
              <img
                src={user.profilePic}
                alt={user.username}
              />
              <p>{user.username}</p>
            </div>
          ))}

        </div>

     
        <div className="messages-list">

          <div className="messages-title" position="fixed">
            <h3>Messages</h3>
            <span>Requests</span>
          </div>

          {messages.map((user) => (
            <div
              key={user.id}
              className="message-item"
            >

              <img
                src={user.profilePic}
                className="profile-pic"
                alt={user.username}
              />

              <div className="message-info">

                <span className="username">
                  {user.username}
                </span>

                <span className="last-message">
                  {user.lastMessage} · {user.time}
                </span>

              </div>

              {user.unread && (
                <div className="unread-dot"></div>
              )}

            </div>
          ))}

        </div>

      </div>


      
      <div className="messages-chat-area">

        <div className="chat-placeholder">

          <div className="chat-icon"></div>

          <h2>Your messages</h2>

          <p>Send a message to start a chat.</p>

          <button className="send-btn">
            Send message
          </button>

        </div>

      </div>

    </div>
  );
};

export default Messages;
