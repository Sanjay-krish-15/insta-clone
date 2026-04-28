import React, { useEffect, useState } from "react";
import "./Styles/NotificationPanel.css";

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

        setFollowRequests(data.posts);

        const commentMentions = [];

        data.posts.forEach((post) => {
          post.comments.forEach((comment) => {

            commentMentions.push({
              username: comment.user,
              text: comment.text,
              time: post.time,
              profilePic: post.profilePic
            });

          });
        });

        setMentions(commentMentions);

        setDmAlerts(data.messages);
      });

  }, []);

  return (
    <div className={`notification-panel ${isOpen ? "open" : ""}`}>

     
      <div className="panel-header">

        <h2>Notifications</h2>

        <button className="close-btn" onClick={closePanel}>
          x
        </button>

      </div>
  

      <div className="filter-buttons">

        <button className="active">All</button>

        <button>Comments</button>

      </div>


      <div className="follow-summary">

        <img
          src={followRequests[0]?.profilePic}
          alt="profile"
          className="profile-pic"
        />

        <div>

          <p className="bold">Follow requests</p>

          <small>
            {followRequests[0]?.username} + {followRequests.length - 1} others
          </small>

        </div>

        <span className="blue-dot"></span>

      </div>



      <h4 className="section-title">This week</h4>

      {mentions.slice(0, 2).map((item, index) => (

        <div className="notification-card" key={index}>

          <img
            src={item.profilePic}
            alt="profile"
            className="profile-pic"
          />

          <div>

            <p className="mb-1">

              <strong>{item.username}</strong> commented: {item.text}

            </p>

            <small>{item.time}</small>

          </div>

        </div>

      ))}


      

      <h4 className="section-title">This month</h4>

      {followRequests.slice(0, 2).map((user) => (

        <div className="notification-card" key={user.id}>

          <div className="notification-left">

            <img
              src={user.profilePic}
              alt="profile"
              className="profile-pic"
            />

            <div>

              <strong>{user.username}</strong>

              <p>requested to follow you</p>

            </div>

          </div>

          <div>

            <button className="confirm-btn">

              Confirm

            </button>

            <button className="delete-btn">

              Delete

            </button>

          </div>

        </div>

      ))}


    

      {dmAlerts.slice(0, 2).map((msg) => (

        <div className="notification-card" key={msg.id}>

          <img
            src={msg.profilePic}
            alt="profile"
            className="profile-pic"
          />

          <div>

            <p className="mb-1">

              <strong>{msg.username}</strong>: {msg.lastMessage}

            </p>

            <small>{msg.time}</small>

          </div>

        </div>

      ))}

      <h4 className="section-title">Earlier</h4>

      {mentions.slice(3, 5).map((item, index) => (

        <div className="notification-card" key={index}>

          <img
            src={item.profilePic}
            alt="profile"
            className="profile-pic"
          />

          <div>

            <p className="mb-1">

              <strong>{item.username}</strong> commented: {item.text}

            </p>

            <small>{item.time}</small>

          </div>

        </div>

      ))}

      {followRequests.slice(5, 9).map((user) => (

        <div className="notification-card" key={user.id}>

          <div className="notification-left">

            <img
              src={user.profilePic}
              alt="profile"
              className="profile-pic"
            />

            <div>

              <strong>{user.username}</strong>

              <p>requested to follow you</p>

            </div>

          </div>

          <div>

            <button className="confirm-btn">

              Confirm

            </button>

            <button className="delete-btn">

              Delete

            </button>

          </div>

        </div>

      ))}

     
    </div>
  );
}

export default NotificationPanel;