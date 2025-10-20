import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRouter from './routes/userRoute.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
