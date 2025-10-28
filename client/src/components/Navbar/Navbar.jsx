import React from 'react'
import './Navbar.css'
import fileLogo from '../../assets/fileLogo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext.jsx'

const Navbar = () => {
    const {logoutFunction, loginStatus, signupStatus, toggleLoginStatus, toggleSignupStatus} = useContext(StoreContext);
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
            {
                (localStorage.getItem('token')) ? <button onClick={() => logoutFunction()} className='logout-btn main-btn'>Logout</button> :
                    <div className="main-btn">
                        <button onClick={toggleLoginStatus} className='login-btn'>{loginStatus ? 'Close' : 'Login'}</button>
                        <button onClick={toggleSignupStatus} className='signup-btn'>{signupStatus ? 'Close' : 'SignUp'}</button>
                    </div>
            }
        </div>
    )
}

export default Navbar
