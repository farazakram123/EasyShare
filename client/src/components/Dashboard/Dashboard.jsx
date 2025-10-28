import React from 'react'
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'
import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import FileItem from '../FileItem/FileItem'

const Dashboard = () => {
    const [email, setEmail] = useState('');
    const [file, setFile] = useState(null);

    const onChangeEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const onChangeFileHandler = (e) => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('file', file);
        formData.append('email', email);

        const response = await axios.post('http://localhost:8000/api/file/upload', formData);
        toast.success(response.data.message);
    }

    const [userFiles, setUserFiles] = useState([]);
    const fetchUserFiles = async () => {
        const response = await axios.post('http://localhost:8000/api/file/fetch', { email: localStorage.getItem('loggedInUserEmail') });
        setUserFiles(response.data.allFiles);
    }

    fetchUserFiles();

    useEffect(() => {
        
    }, []);

    return (
        <div>
            <Navbar />
            <div className="dashboard">
                <h1>Dashboard</h1>
                <div className="dashboard-container">
                    <div className="left-container">
                        <form onSubmit={handleSubmit} className="upload-form">
                            <input type="file" name="file" id="file" onChange={onChangeFileHandler} />
                            <input type="email" name="email" id="email" placeholder='Enter email to send file' className='email-to-send' onChange={onChangeEmailHandler} />
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
                        <div className="right-container-files">
                            {
                                userFiles && userFiles.length > 0 ?
                                    userFiles.map((file, index) => (
                                        <div key={index} className="file-item">
                                            <FileItem file={file} />
                                        </div>
                                    )) : (
                                        <p>No files found</p>
                                    )
                            }
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard
