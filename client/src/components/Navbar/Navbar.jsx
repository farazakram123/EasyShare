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
            <Link to="/"><li>Contact Us</li></Link>
        </ul>
        <div className="main-btn">
            <Link to="/signup"><button>SignUp</button></Link>
            <Link to="/login"><button>Login</button></Link>
        </div>
        </div>
  )
}

export default Navbar
