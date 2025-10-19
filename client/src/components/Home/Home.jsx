import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Upload from '../Svg/Upload'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="left-container">
          <h1 className='left-container-heading'>Securely Share & <br />Access Your Files <br />Anywhere</h1>
          <p className="left-container-content">
            Upload, store and share your files with ease. Fast, reliable, and secure file sharing for everyone.
          </p>
          <button className='get-started-btn'>
            Get Started - It's Free
          </button>
        </div>
        <div className="right-container">
          <Upload />
        </div>
      </div>
    </div>
  )
}

export default Home
