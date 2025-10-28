import React from 'react'
import './FileItem.css'

const FileItem = ({ file }) => {
    const downloadFile = (url) => {
        window.open(url, '_blank');
    }
    return (
        <div className="file-item">
            <p className="file-name">{file.name}</p>
            <p className="file-format">{file.format}</p>
            <p className="file-size">{file.size} KB</p>
            <button onClick={() => downloadFile(file.url)} className="download-btn">Download</button>
        </div>
    )
}

export default FileItem;
