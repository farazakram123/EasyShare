import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRouter from './routes/userRoute.js';
import fileRouter from './routes/fileRoute.js';
import fileUpload from 'express-fileupload';
import cloudinaryConnect from './config/cloudinary.js';

dotenv.config();
connectDB();
cloudinaryConnect();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(fileUpload({
    useTempFiles : true
}))

app.use('/api/user', userRouter);
app.use('/api/file', fileRouter);

app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
