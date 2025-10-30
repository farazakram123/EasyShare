import { v2 as cloudinary } from "cloudinary";
import File from "../models/fileModel.js";
import User from "../models/userModel.js";

const uploadFileToCloudinary = async (file, folder) => {
  const options = { folder };
  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
};

export const uploadFiles = async (req, res) => {
  try {
    const file = req.files.file;

    const { email } = req.body;

    if (!email || !file) {
      return res.status(200).json({
        success: false,
        message: "Enter all details",
      });
    }

    const user = await User.findOne({email});
    if(!user){
      return res.status(200).json({
        success: false,
        message: "User not found",
      });
    }
    
    const response = await uploadFileToCloudinary(file, "newFolder");
    console.log(response);

    const newFile = new File({
      name: response.original_filename,
      url: response.secure_url,
      size: Math.ceil(file.size / 1024), // size in KB
      format: file.name.slice(file.name.lastIndexOf(".")+1)
    });

    await newFile.save();

    await user.updateOne({ $push: { files: newFile._id } });

    res.status(200).json({
      success: true,
      message: "File sent successfully",
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error while sending file.",
    });
  }
};


export const fetchFiles = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(200).json({
        success: false,
        message: "User not found.",
      });
    }

    let allFiles = [];

    for(let i=0; i<user.files.length; i++){
        const file = await File.findById(user.files[i])
        if(!file) continue;
        let string = "";       
        string = file.url.substr(0,50) + "fl_attachment/" + file.url.substr(50);

        allFiles.push({
              url : string, 
              name: file.name, 
              size: file.size,
              format: file.format
        })
    }
    res.status(200).json({
      success: true,
      message: "User found.",
      allFiles,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
