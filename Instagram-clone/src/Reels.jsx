import React from "react";
import "./Reels.css";

const reelsData = [
  {
    id: 1,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    username: "nature.life",
    caption: "Enjoy the view 🌄",
  },
  {
    id: 2,
    video: "https://www.w3schools.com/html/movie.mp4",
    username: "travel.world",
    caption: "Adventure time ✈️",
  },
  {
    id: 3,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    username: "fitness.daily",
    caption: "Stay strong 💪",
  },
];

function Reels() {
  return (
  <div className="reels-wrapper">
    <div className="reels-container">
      {reelsData.map((reel) => (
        <div className="reel-card" key={reel.id}>
            <video
              src={reel.video}
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="reel-info">
             <div>
              <h6>@{reel.username}</h6> <p>{reel.caption}</p>
            </div>
            <div>
                <button className="follow-btn">Follow</button>
              
            </div>
            

            <div className="reel-actions">
              <i className="bi bi-heart fs-3"></i>
              <i className="bi bi-chat fs-3"></i>
              <i className="bi bi-send fs-3"></i>
              <i className="bi bi-bookmark fs-3"></i>
            </div>

            </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Reels;