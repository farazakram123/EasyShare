const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with DB is successful.");
  } catch (err) {
    console.log(err.message);
    console.log("Unable to Connect with DB.");
  }
};

module.exports = connectDB;
