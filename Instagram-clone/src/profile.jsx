import React from "react";
import "./profile.css";

function Profile() {

  const user = {
    username: "pixel.navigator_77",
    name: "Arvind Raj",
    posts: 0,
    followers: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    following: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    bio: "Crafting UI experiences ✨ | React Builder | Learning daily",
    profileImage: "https://i.pravatar.cc/150?img=12"
  };

  return (

    <div className="container-fluid px-3 px-md-5 mt-4">

  
      <div className="row align-items-center text-center text-md-start">

      
        <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">

          <img
            src={user.profileImage}
            className="profile-img"
            alt="profile"
          />

        </div>


      
        <div className="col-12 col-md-8">

      
          <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">

            <h5 className="mb-0">{user.username}</h5>

            <i className="bi bi-gear fs-5"></i>

          </div>


     
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-4 mt-3">

            <span><b>{user.posts}</b> posts</span>

            <span><b>{user.followers}</b> followers</span>

            <span><b>{user.following}</b> following</span>

          </div>


        
          <div className="mt-3 fw-bold">

            {user.name}

          </div>


     
          <div className="text-secondary">

            {user.bio}

          </div>


      
          <div className="mt-3 d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">

            <button className="btn btn-dark px-4">

              Edit profile

            </button>

            <button className="btn btn-dark px-4">

              View archive

            </button>

          </div>

        </div>

      </div>


     
      <div className="mt-5 mb-5 d-flex justify-content-center justify-content-md-start">

        <div className="text-center">

          <div className="highlight-circle">

            <i className="bi bi-plus fs-1"></i>

          </div>

          <div className="mt-2 highlight-text">

            New

          </div>

        </div>

      </div>


   
      <div className="profile-tabs d-flex justify-content-center gap-3 gap-md-5 pt-2 pb-2 flex-wrap">

        <i className="bi bi-grid-3x3 fs-3"></i>

        <i className="bi bi-bookmark fs-3"></i>

        <i className="bi bi-arrow-repeat fs-3"></i>

        <i className="bi bi-person-square fs-3"></i>

      </div>


      <div className="text-center mt-5">

        <div className="camera-circle mx-auto">

          <i className="bi bi-camera fs-3"></i>

        </div>

        <h2 className="mt-3">

          Share Photos

        </h2>

        <p className="text-secondary">

          When you share photos, they will appear on your profile.

        </p>

        <p className="share-your-first-photo">

          Share your first photo

        </p>


  
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">

          <span className="base-text">Meta</span>
          <span className="base-text">About</span>
          <span className="base-text">Blog</span>
          <span className="base-text">Jobs</span>
          <span className="base-text">Help</span>
          <span className="base-text">API</span>
          <span className="base-text">Privacy</span>
          <span className="base-text">Terms</span>
          <span className="base-text">Locations</span>
          <span className="base-text">Instagram Lite</span>
          <span className="base-text">Meta AI</span>
          <span className="base-text">Threads</span>
          <span className="base-text">Contact Uploading & Non-Users</span>
          <span className="base-text">Meta Verified</span>

        </div>


        <div className="d-flex flex-wrap justify-content-center gap-3 mt-2">

          <span className="base-text">

            English (United States)
            <i className="bi bi-chevron-down ms-1"></i>

          </span>

          <span className="base-text">

            © 2024 Instagram from Meta

          </span>

        </div>

      </div>

    </div>

  );
}

export default Profile;
