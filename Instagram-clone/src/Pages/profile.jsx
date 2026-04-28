import React from "react";
import "../Styles/profile.css";
import Footer from "../Components/footer";

function Profile() {

  const user = {
    username: "pixel.navigator_77",
    name: "Arvind Raj",
    profileImage: "https://i.pravatar.cc/150?img=12",
    posts: 0,
    followers: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    following: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    bio: "Crafting UI experiences ✨ | React Builder | Learning daily"
  };

  return (

    <div className="container  mt-4">
     
      <div className="row align-items-center">

        
       
        <div className="col-12 col-md-4 text-end mb-3 mb-md-0 ">

          

          <img
            src={user.profileImage}
            alt="profile"
            className="profile-img-big"
          />

        </div>
        
        <div className="col-12 col-md-8 text-start text-md-start">

          
          <div className="d-flex align-items-center justify-content-start justify-content-md-start gap-3">

            <h5 className="user-name">{user.username}</h5>

            <i class="bi bi-gear-wide fs-5 mt-4"></i>

          </div>

           <div className="user ">

            {user.name}

          </div>


          
          <div className="audiance ">

            <span><b>{user.posts}</b> posts</span>

            <span><b>{user.followers}</b> followers</span>

            <span><b>{user.following}</b> following</span>

          </div>      
                   
          <div className="text-secondary">

            {user.bio}

          </div>        
          
        </div>

      </div>

      <div className=" d-flex flex-column flex-md-row gap-2 justify-content-center mt-4 ">

            <button className="btn btn-light px-8">

              Edit profile

            </button>

            <button className="btn  px-8">

              View archive

            </button>

          </div>


     {/* HIGHLIGHTS */}
<div className="highlight row pb-2 ">

  <div className="high col-12 col-md-8 offset-md-2 text-start">

    <div className="plus-icon">
      <i className="bi bi-plus-circle "></i>
    </div>

    <div className="highlight-text">
      New
    </div>

  </div>

</div>


      {/* TABS */}
      <div className="profile-tabs d-flex justify-content-center  pb-2">

        <i className="bi bi-grid-3x3 fs-4"></i>

        <i className="bi bi-bookmark fs-4"></i>

        <i className="bi bi-arrow-repeat fs-4"></i>

        <i className="bi bi-person-square fs-4"></i>

      </div>


      {/* EMPTY STATE */}
      <div className="text-center mt-5">

        <div className="camera-circle mx-auto ">

          <i className="bi bi-camera "></i>

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

        <Footer />

      </div>

    </div>

  );
}

export default Profile;