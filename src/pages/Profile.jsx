import React, { useState } from 'react'
import ProfileMenu from '../components/ProfileMenu'
import "./Profile.css"
const Profile = () => {
    const [showMenu, hideMenu] = useState(false)

  const openMenu = () =>{
    
  }



  return (
    <div className='.profile-container'>
    <ProfileMenu/>
      
    </div>
  )
}

export default Profile