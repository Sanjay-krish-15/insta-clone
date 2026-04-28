import React from 'react'
import "../Styles/footer.css"
import "tailwindcss";

function Footer() {
  return (
    <div>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-2 ">

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


        <div className="d-flex flex-wrap justify-content-center gap-3 mt-2 pb-5 ">

          <span className="base-text">

            English (United States)
            <i className="bi bi-chevron-down ms-1"></i>

          </span>

          <span className="base-text">

            © 2024 Instagram from Meta

          </span>

        </div>
    </div>
          )
}


export default Footer