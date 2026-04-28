import React, { useRef } from "react";
import "../Styles/Reels.css";

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
  const reelsRef = useRef();

  const scrollNext = () => {
    reelsRef.current.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    reelsRef.current.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="reels-wrapper">

    
      

      <div className="reels-container" ref={reelsRef}>
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
                <h6>@{reel.username}</h6>
                <p>{reel.caption}</p>
              </div>

              <button className="follow-btn">Follow</button>
            </div>
          </div>
        ))}
      </div>

      <button className="scroll-btn up-btn" onClick={scrollPrev}>
        <i className="bi bi-chevron-up"></i>
      </button>
      
      <button className="scroll-btn down-btn" onClick={scrollNext}>
        <i className="bi bi-chevron-down"></i>
      </button>

     
      <div className="reel-actions">
        <i className="bi bi-heart fs-3"></i>
        <i className="bi bi-chat fs-3"></i>
        <i className="bi bi-repeat fs-2"></i>
        <i className="bi bi-send fs-3"></i>
        <i className="bi bi-bookmark fs-3"></i>
        <i className="bi bi-three-dots fs-3"></i>
      </div>

    </div>
  );
}

export default Reels;