import React, { useEffect, useState } from "react";
import "./suggestions.css";

function Suggestions() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/Sanjay-krish-15/03d8ced30e80ac1a7d5f509ea56ba000/raw/f13bccab60ec6612c85c7b2d98b53e537ac4f5f8/db.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // 👈 confirm suggestions exist
        setUsers(data.suggestions || []);
      })
      .catch((err) =>
        console.log("Error loading suggestions:", err)
      );
  }, []);

  return (
    <div className="suggestions">

      {/* HEADER */}
      <div className="suggestions-header">
        <span className="suggestions-title">
          Suggestions for you
        </span>

        <span className="see-all">
          See All
        </span>
      </div>

      {/* USERS */}
      {users.map((user) => (
        <div className="suggestion-row" key={user.id}>

          <div className="suggestion-left">

            <img
              src={user.profilePic}
              alt="profile"
              className="suggestion-img"
            />

            <span className="suggestion-name">
              {user.username}
            </span>

          </div>

          <button className="follow-button">
            Follow
          </button>

        </div>
      ))}

    </div>
  );
}

export default Suggestions;