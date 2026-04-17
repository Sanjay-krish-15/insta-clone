import React, { useEffect, useState } from "react";
import "./NotificationPanel.css";

function NotificationPanel({ isOpen, closePanel }) {

  const [followRequests, setFollowRequests] = useState([]);
  const [mentions, setMentions] = useState([]);
  const [dmAlerts, setDmAlerts] = useState([]);

  useEffect(() => {

    fetch(
      "https://gist.githubusercontent.com/Sanjay-krish-15/03d8ced30e80ac1a7d5f509ea56ba000/raw/f13bccab60ec6612c85c7b2d98b53e537ac4f5f8/db.json"
    )
      .then((res) => res.json())
      .then((data) => {

        // FOLLOW REQUESTS
        setFollowRequests(data.posts);

        // COMMENT MENTIONS
        const commentMentions = [];

        data.posts.forEach((post) => {

          post.comments.forEach((comment) => {

            commentMentions.push({
              username: comment.user,
              text: comment.text,
              time: post.time,
            });

          });

        });

        setMentions(commentMentions);

        // DM ALERTS
        setDmAlerts(data.messages);

      });

  }, []);

  return (
    <div className={`notification-panel  ${isOpen ? "open" : ""}`}>

      {/* HEADER */}
      <div className="panel-header">

        <h4>Notifications</h4>

        <button onClick={closePanel}>✖</button>

      </div>

      {/* BODY */}
      <div className="panel-body">

        {/* FOLLOW REQUESTS */}
        <h5>Follow Requests</h5>

        {followRequests.map((user) => (

          <div className="notification-card" key={user.id}>

            <div className="notification-left">

              <img
                src={user.profilePic}
                alt="profile"
                className="profile-pic"
              />

              <div>

                <strong>{user.username}</strong>

                <p>Requested to follow you</p>

              </div>

            </div>

            <div>

              <button className="confirm-btn" >

                Confirm

              </button>

              <button className="delete-btn">

                Delete

              </button>

            </div>

          </div>

        ))}

        {/* COMMENT MENTIONS */}
        <h5>Mentions</h5>

        {mentions.map((item, index) => (

          <div className="notification-card" key={index}>

            <p>

              <strong>{item.username}</strong> commented: "{item.text}"

            </p>

            <small>{item.time}</small>

          </div>

        ))}

        {/* DM ALERTS */}
        <h5>Messages</h5>

        {dmAlerts.map((msg) => (

          <div className="notification-card" key={msg.id}>

            <p>

              <strong>{msg.username}</strong>: {msg.lastMessage}

            </p>

            <small>{msg.time}</small>

          </div>

        ))}

        {/* MONTHLY SUMMARY */}
        <div className="monthly-summary">

          <h5>This Month</h5>

          <p>

            Follow Requests: {followRequests.length}

          </p>

          <p>

            Messages Received: {dmAlerts.length}

          </p>

        </div>

      </div>

    </div>
  );
}

export default NotificationPanel;