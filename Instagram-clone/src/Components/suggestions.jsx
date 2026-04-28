import React, { useEffect, useState } from "react";
import "../Styles/suggestions.css";
import SuggestionsFooter from "./SuggestionsFooter";

function Suggestions() {

  const [users, setUsers] = useState([]);
  const currentUser = {
    username: "pixel.navigator_77",
    name: "Arvind Raj",
    profileImage: "https://i.pravatar.cc/150?img=12"
  };

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/Sanjay-krish-15/03d8ced30e80ac1a7d5f509ea56ba000/raw/f13bccab60ec6612c85c7b2d98b53e537ac4f5f8/db.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.suggestions || []);
      })
      .catch((err) =>
        console.log("Error loading suggestions:", err)
      );
  }, []);

  return (
    <div className="suggestions">

      <div className="suggestion-row profile-mini">

        <div className="suggestion-left" md-3>

          <img
            src={currentUser.profileImage}
            alt="profile"
            className="suggestion-img"
          />

          <span className="suggestion-name">
            {currentUser.username}
            <div className="suggestion-reason">
              {currentUser.name}
            </div>
          </span>

        </div>

        <button className="switch-button">
          Switch
        </button>

      </div>

      <div className="suggestions-header">
        <span className="suggestions-title">
          Suggestions for you
        </span>

        <span className="see-all">
          See all
        </span>
      </div>


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
              <div className="suggestion-reason">
                Suggested for you
              </div>
            </span>

          </div>

          <button className="follow-button">
            Follow
          </button>

        </div>
      ))}
      <div><SuggestionsFooter/></div>

    </div>


  );
}

export default Suggestions;