const bcrypt = require("bcrypt");
const User = require("../models/User");

// SignUp
exports.signUp = async (req, res) => {
  try {
    // extracting information of the user
    const { firstName, lastName, phone, email, password, username } = req.body;

    if (!firstName || !lastName || !phone || !email || !password || !username) {
      return res.status(200).json({
        success: false,
        message: "Please fill all the required details.",
      });
    }

    // check for existing user
    const user = await User.findOne({ email });

    if (user) {
      return res.status(200).json({
        success: false,
        message: "Email already exists",
      });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    if (!hashedPassword) {
      return res.status(200).json({
        success: false,
        message: "Password did not hashed properly.",
      });
    }

    // save the user entry to the DB
    const newUser = new User({
      name: firstName + " " + lastName,
      username,
      email,
      password: hashedPassword,
      posts: [],
    });

    await newUser.save();

    // return response
    res.status(200).json({
      success: true,
      message: "User registered successfully.",
    });
  } catch (err) {
    console.log(err.message);

    res.status(500).json({
      success: false,
      message: "Server error while Signup.",
    });
  }
};

// login
exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // console.log(email, password);

    if (!email || !password) {
      return res.status(200).json({
        success: false,
        message: "Please enter all the details.",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(200).json({
        success: false,
        message: "User does not exists.",
      });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(200).json({
        success: false,
        message: "Password missmatch",
      });
    }
    res.status(200).json({
      success: true,
      message: "Login Successful.",
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error while login.",
    });
  }
};
