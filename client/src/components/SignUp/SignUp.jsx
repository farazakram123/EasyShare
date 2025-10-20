import React from 'react'
import './SignUp.css'
import { useState } from 'react'
import { useEffect } from 'react';

const SignUp = ({ toggleLoginStatus, toggleSignupStatus }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData(data => ({ ...data, [name]: value }));
    }

    const onSignup = (e) => {
        e.preventDefault();
        // Handle signup logic here

        console.log('User signed up with data:', data);
    }

    return (
        <div className="signup-popup">
            <form onSubmit={onSignup} className='signup-popup-container'>
                <div className="signup-popup-top">
                    <h1 className="create-account">Create Account</h1>
                    <p onClick={toggleSignupStatus} className="x">X</p>
                </div>
                <div className="signup-popup-middle">
                    Join us and start sharing your files securely.
                </div>
                <div className="signup-popup-inputs">
                    <input onChange={onChangeHandler} name='name' value={data.name} type="text" placeholder='Enter your name' required />
                    <input onChange={onChangeHandler} name='email' value={data.email} type="email" placeholder='Enter your email' required />
                    <input onChange={onChangeHandler} name='password' value={data.password} type="password" placeholder='Enter your password' required />
                </div>

                <button className='signup-btn'>Sign Up</button>
                <div className="login-here">
                    <p>Already have an account? <span onClick={toggleLoginStatus}>
                        Log In here
                    </span> </p>
                </div>
            </form>
        </div>
    )
}

export default SignUp
