import React, { useEffect, useState } from "react";
import "../Styles/MessageButton.css";

function MessageButton() {

  const [recentUsers, setRecentUsers] = useState([]);

  const openMessages = () => {
    console.log("/Message");
  };

  useEffect(() => {

    fetch(
      "https://gist.githubusercontent.com/Sanjay-krish-15/03d8ced30e80ac1a7d5f509ea56ba000/raw/f13bccab60ec6612c85c7b2d98b53e537ac4f5f8/db.json"
    )
      .then(res => res.json())
      .then(data => {

        setRecentUsers(data.posts.slice(0, 3));

      });

  }, []);

  return (
    <button className="message-btn" onClick={openMessages}>

      <i className="bi bi-send message-send-icon"></i>

      <span className="message-text">
        Messages
      </span>

      <div className="message-avatar-group">

        {recentUsers.map((user, index) => (

          <img
            key={user.id}
            src={user.profilePic}
            alt="profile"
            className="message-img"
            style={{ zIndex: 3 - index }}
          />

        ))}

      </div>

    </button>
  );
}

export default MessageButton;