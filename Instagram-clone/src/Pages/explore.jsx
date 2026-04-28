import React, { useEffect, useState } from "react";
import "../Styles/explore.css";
import SearchPanel from "../searchPanel";

function Explore() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/Sanjay-krish-15/03d8ced30e80ac1a7d5f509ea56ba000/raw/f13bccab60ec6612c85c7b2d98b53e537ac4f5f8/db.json")
      .then((res) => res.json())
      .then((data) => setPosts(data.explore))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>

   
  

    

    


    <div className="explore-container">

  {posts.map((post) => (
    <div className="explore-card" key={post.id}>

      <img
        src={post.image}
        alt="explore-post"
      />

      <div className="overlay">
        <i className="bi bi-heart"></i> 1.2k
        💬 230
      </div>

    </div>
  ))}

</div>
    </div>

  );
}

export default Explore;                  