import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Upload from '../Svg/Upload'
import { useState, useContext } from 'react'
import { StoreContext } from '../../context/StoreContext.jsx'
import Login from '../Login/Login'
import Signup from '../SignUp/SignUp'
import Dashboard from '../Dashboard/Dashboard'

const Home = () => {
  const {loginStatus, signupStatus, toggleSignupStatus} = useContext(StoreContext);

  return (
    <div>
      {
        (localStorage.getItem('token')) ? <Dashboard /> :
          <div className='home-main-container'>
            <Navbar />

            <div className="home-container">
              <div className="left-container">
                <h1 className='left-container-heading'>Securely Share & <br />Access Your Files <br />Anywhere</h1>
                <p className="left-container-content">
                  Upload, store and share your files with ease. Fast, reliable, and secure file sharing for everyone.
                </p>
                <button onClick={toggleSignupStatus} className='get-started-btn'>
                  Get Started - It's Free
                </button>
              </div>
              <div className="right-container">
                <Upload />
              </div>
            </div>
          </div>
      }
      <div>
        {
          loginStatus && <div className="login-signup-container">
            <Login />
          </div>
        }
        {
          signupStatus && <div className="login-signup-container">
            <Signup />
          </div>
        }
      </div>
    </div>

  )
}

export default Home
