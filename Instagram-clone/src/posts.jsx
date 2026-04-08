/* import React, { useEffect } from 'react'

function Posts() {

    const [posts, setPosts] = React.useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }
        , [])
        
    
  return (
    <div>
        {posts.length>0?(
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <img className="rounded-circle" src={post.profilepic} alt={post.title} style={{ width: '10%' }} />
                    </div>
                ))}
            </div>
        ):(
            <div>
                Loading Posts
            </div>
        )}
    </div>

       
  )
}

export default Posts */


import React, { useEffect, useState } from "react";

function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
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
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
              />

              <strong>{post.username}</strong>
            </div>

            {/* Post Image */}
            <img
              src={post.postImage}
              alt="post"
              style={{ width: "100%" }}
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