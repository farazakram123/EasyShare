import React from 'react'
import './Login.css'
import { useState, useContext } from 'react'
import { StoreContext } from '../../context/StoreContext.jsx'
import axios from 'axios'
import {toast} from 'react-toastify'

const Login = () => {
  const {url, toggleSignupStatus, toggleLoginStatus, setLoginSuccess} = useContext(StoreContext);

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(data => ({...data, [name]: value}));
  }

  const onLogin = async (e) => {
    e.preventDefault();
    // Handle login logic here
    let newUrl = url + '/api/user/login';

    const response = await axios.post(newUrl, data);

    if(response.data.success){
      toast.success(response.data.message);
      toggleLoginStatus();
      setLoginSuccess(true);

    } else {
      toast.error(response.data.message);
    }
    console.log('User logged in with data:', data);
  }

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className="login-popup-top">
          <h1 className="welcome-back">Welcome back</h1>
          <p onClick={toggleLoginStatus} className="x">X</p>
        </div>
        <div className="login-popup-middle">
          Access your files securely.
        </div>

        <div className="login-popup-inputs">
          <input onChange={onChangeHandler} name='email' value={data.email} type="email" placeholder='Enter your email' required />

          <input onChange={onChangeHandler} name='password' value={data.password} type="password" placeholder='Enter your password' required />
        </div>

        <button className='login-btn'>Login</button>
        <div className="create-new-acc">
          <p>Create a new account? <span onClick={toggleSignupStatus}> 
            Sign Up here
          </span> </p>
        </div>
      </form>
    </div>
  )
}

export default Login
