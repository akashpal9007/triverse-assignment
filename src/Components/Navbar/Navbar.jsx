import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-l'>
          <img id='logo' src={logo} alt="" />
        <h1 className='logo-name'>PURI</h1>
        </div>
        <img width={30} src="https://cdn-icons-png.flaticon.com/512/4947/4947596.png" alt="" />
    </div>
  )
}

export default Navbar