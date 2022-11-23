import React from 'react'
import cw from "../assets/cw.jpeg"



const Header = () => {
  return (
    <div className='header-container'>
        <div><img width="30" height="30" src={cw} alt="" /></div>
        <div>{"<Sinan's/> blog"}</div>
        <div> Profil Logo</div>
    </div>
  )
}

export default Header