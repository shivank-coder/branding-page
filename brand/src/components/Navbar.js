
import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div>
      <nav className='navbar'>
      <img src="data:image/jpeg;base64,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" alt="" />
    
     <ul className='ul-list'>
      <li>MENU</li>
      <li>LOCATION</li>
      <li>ABOUT</li>
      <li>CONTACT</li>
     </ul>
     
      <button>Login</button>
    
     </nav> 
    </div>
  )
}

export default Navbar










 