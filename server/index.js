const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

require('dotenv').config()

app.use(express.json())

const PORT = process.env.PORT || 4000;

const myRoute = require('./routes/myRoute')
app.use('/api/v1', myRoute)

const connectDB = require("./config/database");
connectDB();

app.get("/", (req, res) => {
  res.send("<h1> This is Backend HomePage</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is runnnig at port ${PORT}`);
});
