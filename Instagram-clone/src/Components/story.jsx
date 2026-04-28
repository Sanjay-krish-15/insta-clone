import React, { useEffect, useState } from "react";
import "../Styles/story.css";
function Stories() {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/Sanjay-krish-15/03d8ced30e80ac1a7d5f509ea56ba000/raw/f13bccab60ec6612c85c7b2d98b53e537ac4f5f8/db.json")
      .then((res) => res.json())
      .then((data) => setStories(data.posts))
      .catch((err) => console.log("Error loading stories:", err));
  }, []);

  return (
    <div className="header" >
      {stories.map((story) => (
        <div
          key={story.id}
          style={{
            textAlign: "center",
            minWidth: "70px"
          }}
        >
          <img
            src={story.profilePic}
            alt={story.username}
            className="img"
          />

          <div className="name">
            {story.username}
          </div>

        </div>
      ))}
    </div>
  );
}

export default Stories;