import React from 'react'
import Images from "../Images/celeb.png"

function Header() {
  return (
    <div>

        <div className='navBar'>
        <img src={Images} alt="Logo" />
        <h2>X Y Z SYSTEMS LLP.</h2>
        </div>
    </div>
  )
}

export default Header