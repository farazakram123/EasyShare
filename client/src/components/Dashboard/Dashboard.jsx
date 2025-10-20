import React from 'react'
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'
const Dashboard = ({loginStatus, signupStatus, toggleLoginStatus, toggleSignupStatus, loginSuccess, logoutFunction}) => {
    return (
        <div>
            <Navbar loginStatus={loginStatus} signupStatus={signupStatus} toggleLoginStatus={toggleLoginStatus} toggleSignupStatus={toggleSignupStatus} loginSuccess={loginSuccess} logoutFunction={logoutFunction} />
            <div className="dashboard">
                <h1>Dashboard</h1>
                <div className="dashboard-container">
                    <div className="left-container">
                        <form onSubmit={(e) => e.preventDefault()} className="upload-form">
                            <input type="file" />
                            <input type="email" name="email" id="email" placeholder='Enter email to send file' className='email-to-send'/>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    <div className="right-container">
                        <div className="right-container-headings">
                            <h3>Recent Files</h3>
                            <h3>Type</h3>
                            <h3>Size</h3>
                            <h3>Action</h3>
                        </div>
                        {/* // Fetch file details */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard
