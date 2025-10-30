import { Schema, model } from "mongoose";

const fileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    format : {
      type: String,
      default: 'docx',
      required: true,
    }
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const File = model("File", fileSchema);
export default File;
