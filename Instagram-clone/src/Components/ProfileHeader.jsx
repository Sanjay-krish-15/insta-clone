import React from "react";
import "../Styles/profileHeader.css";

function ProfileHeader() {

  const user = {
  
  };

  return (

    <div className="row align-items-center">

      
      <div className="col-12 col-md-4 text-center mb-3 mb-md-0 mt-5">

        <img
          src={user.profileImage}
          className="profile-img-big"
          alt="profile"
        />

      </div>

      <div className="col-12 col-md-8 text-center text-md-start" mt-8>

  
        <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">

          <h5 className=" User-name ">
            {user.username}
          </h5>

          <i className="bi bi-gear fs-5"></i>

        </div>


        <div className="mt-2 fw-bold">

          {user.name}

        </div>

      </div>

    </div>

  );
}

export default ProfileHeader;