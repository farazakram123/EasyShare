import React from 'react'
import './Navbar.css'
import fileLogo from '../../assets/fileLogo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-image">
            <img src={fileLogo} alt="LOGO" />
            <p>Easy Share</p>
        </div>
        <ul className="menu">
            <Link to="/"><li><span>Home</span></li></Link>
            <Link to="/"><li>About</li></Link>
            <Link to="/"><li>Contacts</li></Link>
            <Link to="/"><li>FAQ</li></Link>
        </ul>
        <div className="main-btn">
            <Link to="/login"><button className='login-btn'>Login</button></Link>
            <Link to="/signup"><button className='signup-btn'>SignUp</button></Link>
        </div>
        </div>
  )
}

export default Navbar
