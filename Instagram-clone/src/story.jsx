import React, { useEffect, useState } from "react";

function Stories() {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/Sanjay-krish-15/03d8ced30e80ac1a7d5f509ea56ba000/raw/f13bccab60ec6612c85c7b2d98b53e537ac4f5f8/db.json")
      .then((res) => res.json())
      .then((data) => setStories(data.posts))
      .catch((err) => console.log("Error loading stories:", err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "row",
        overflowX: "auto",
        gap: "15px",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "white",
        maxWidth: "100%",
        margin: "auto",
      }}
    >
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
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "3px solid green",
              padding: "2px"
            }}
          />

          <div style={{ fontSize: "12px", marginTop: "5px" }}>
            {story.username}
          </div>

        </div>
      ))}
    </div>
  );
}

export default Stories;