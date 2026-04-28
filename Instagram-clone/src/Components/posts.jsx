import React, { useEffect, useState } from "react";

function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/Sanjay-krish-15/03d8ced30e80ac1a7d5f509ea56ba000/raw/f13bccab60ec6612c85c7b2d98b53e537ac4f5f8/db.json")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div style={{ maxWidth: "470px", marginLeft: "120px"  }}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              marginBottom: "20px",
              borderRadius: "8px",
              backgroundColor: "white"
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px"
              }}
            >
              <img
                src={post.profilePic}
                alt="profile"
                className="rounded-circle"
                style={{ width: "40px", height: "40px", marginRight: "10px",}}
              />

              <strong>{post.username}</strong>
            </div>

            {/* Post Image */}
            <img
              src={post.postImage}
              alt="post"
              style={{ width: "100%",  }}
            />

            {/* Actions */}
            <div style={{ padding: "10px" }}>
              <i className="bi bi-heart"></i> <i className="bi bi-chat"></i> <i className="bi bi-send"></i>

              <div style={{ fontWeight: "bold", marginTop: "5px" }}>
                {post.likes} likes
              </div>

              <div>
                <strong>{post.username}</strong> {post.caption}
              </div>

              <small style={{ color: "gray" }}>{post.time}</small>
            </div>

          </div>
        ))
      ) : (
        <h4>Loading Posts...</h4>
      )}
    </div>
  );
}

export default Posts;