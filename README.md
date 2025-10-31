# EasyShare 📁

A modern MERN stack file sharing application that allows users to upload, store, and manage files in the cloud with ease.

## 🚀 Features

- **User Authentication**: Secure user registration and login with JWT tokens
- **File Upload**: Upload files to Cloudinary cloud storage
- **File Management**: View and manage all your uploaded files
- **Cloud Storage**: Files are stored securely on Cloudinary
- **Download Files**: Easy file download functionality
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Notifications**: Toast notifications for user actions

## 🛠️ Tech Stack

### Frontend

- **React** 19.1.1 - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Toastify** - Elegant notifications

### Backend

- **Node.js** with **Express** 5.1.0 - Server framework
- **MongoDB** with **Mongoose** 8.19.1 - Database
- **Cloudinary** - Cloud file storage
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Express File Upload** - File upload middleware
- **Validator** - Email and input validation

## 📁 Project Structure

```
EasyShare/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard/  # User dashboard with file list
│   │   │   ├── Home/       # Landing page
│   │   │   ├── Login/      # Login component
│   │   │   ├── SignUp/     # Registration component
│   │   │   ├── Navbar/     # Navigation bar
│   │   │   ├── FileItem/   # File display component
│   │   │   └── Svg/        # SVG components
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── server/                 # Backend Node.js application
    ├── config/
    │   ├── db.js           # MongoDB connection
    │   └── cloudinary.js   # Cloudinary configuration
    ├── controllers/
    │   ├── userController.js   # User auth logic
    │   └── sendFiles.js        # File operations logic
    ├── models/
    │   ├── userModel.js    # User schema
    │   └── fileModel.js    # File schema
    ├── routes/
    │   ├── userRoute.js    # User routes
    │   └── fileRoute.js    # File routes
    ├── server.js           # Main server file
    └── package.json
```

## 🔧 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account

### 1. Clone the repository

```bash
git clone https://github.com/farazakram123/EasyShare.git
cd EasyShare
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 3. Frontend Setup

```bash
cd ../client
npm install
```

Create a `.env` file in the client directory (if needed):

```env
VITE_API_URL=http://localhost:3000
```

## 🚀 Running the Application

### Start Backend Server

```bash
cd server
npm run dev
```

Server will run on `http://localhost:3000`

### Start Frontend Development Server

```bash
cd client
npm run dev
```

Client will run on `http://localhost:5173`

## 📡 API Endpoints

### User Routes (`/api/user`)

- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Login user

### File Routes (`/api/file`)

- `POST /api/file/upload` - Upload a file
- `POST /api/file/fetch` - Fetch user's files

## 📊 Database Models

### User Model

```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  files: [ObjectId] (references File model)
}
```

### File Model

```javascript
{
  name: String (required),
  url: String (required),
  size: Number (required, in KB),
  format: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Email validation
- Password strength validation (minimum 8 characters)
- Secure file upload with Cloudinary

## 🎨 UI Components

- **Home**: Landing page with app introduction
- **Dashboard**: User dashboard showing all uploaded files
- **Login/SignUp**: Authentication forms
- **FileItem**: Individual file display with download button
- **Navbar**: Navigation component

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Faraz Akram**

- GitHub: [@farazakram123](https://github.com/farazakram123)

## 🙏 Acknowledgments

- MongoDB for the database
- Cloudinary for file storage
- React and Node.js communities

---

Made with ❤️ by Faraz Akram
