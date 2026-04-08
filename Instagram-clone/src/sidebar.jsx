import React from 'react'
import './index.css'

function Sidebar() {
  return (
    <div className="m-3 position-fixed">
      <div className='d-flex flex-column gap-3' style={{ padding: '10px', marginBottom: '10px' }}> 
        <i className="bi bi-instagram"></i>
        <div className="sidebar-items d-flex flex-column gap-3" style={{hover: {color: 'gray'}}}>
          <div className="menu-item"><i className="bi bi-house-door-fill"></i><span className="label">Home</span></div>
          <div className="menu-item"><i className="bi bi-play-btn"></i><span className="label">Reel</span></div>
          <div className="menu-item"><i className="bi bi-send"></i> <span className="label">Messages</span></div>
          <div className="menu-item"><i className="bi bi-search"></i><span className="label">Search</span></div>
          <div className="menu-item"><i className="bi bi-compass"></i><span className="label">Explore</span></div>             
          <div className="menu-item"><i className="bi bi-heart"></i> <span className="label">Notifications</span></div>
          <div className="menu-item"><i className="bi bi-plus-lg"></i><span className="label">Create</span></div>
          <div className="menu-item"><i className="bi bi-person-circle"></i><span className="label">Profile</span></div>
        </div>
        <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
          <div className="menu-item"><i className="bi bi-list"></i><span className="label">More</span></div>
          <div className="menu-item"><i className="bi bi-boxes"></i><span className="label">Also from Meta</span></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar