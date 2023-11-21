const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 4000;

const connectDB = require("./config/database");
connectDB();

app.get("/", (req, res) => {
  res.send("<h1> This is Backend HomePage</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is runnnig at port ${PORT}`);
});
