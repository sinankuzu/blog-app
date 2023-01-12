import React from 'react'
import "./ProfileMenu.css"
const ProfileMenu = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <aside className="profile-menu">
          <div>Profile</div>
          <div>Account Settings</div>
          <div>Posts</div>
        </aside>
      </div>
    </div>
  );
}

export default ProfileMenu