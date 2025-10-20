import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Upload from '../Svg/Upload'
import { useState } from 'react'
import { useEffect } from 'react'
import Login from '../Login/Login'
import Signup from '../SignUp/SignUp'
import Dashboard from '../Dashboard/Dashboard'

const Home = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [signupStatus, setSignupStatus] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(true);

  const toggleLoginStatus = () => {
    setLoginStatus(!loginStatus);
    setSignupStatus(false);
  }

  const toggleSignupStatus = () => {
    setSignupStatus(!signupStatus);
    setLoginStatus(false);
  }

  const logoutFunction = () => {
    setLoginSuccess(false);
  }

  return (
    <div>
      {
        loginSuccess ? <Dashboard loginStatus={loginStatus} signupStatus={signupStatus} toggleLoginStatus={toggleLoginStatus} toggleSignupStatus={toggleSignupStatus} loginSuccess={loginSuccess} logoutFunction={logoutFunction} /> :
          <div className='home-main-container'>
            <Navbar loginStatus={loginStatus} signupStatus={signupStatus} toggleLoginStatus={toggleLoginStatus} toggleSignupStatus={toggleSignupStatus} loginSuccess={loginSuccess} />

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
            <Login toggleLoginStatus={toggleLoginStatus} toggleSignupStatus={toggleSignupStatus} />
          </div>
        }
        {
          signupStatus && <div className="login-signup-container">
            <Signup toggleLoginStatus={toggleLoginStatus} toggleSignupStatus={toggleSignupStatus} />
          </div>
        }
      </div>
    </div>

  )
}

export default Home
