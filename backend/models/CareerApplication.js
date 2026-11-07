const mongoose = require("mongoose");

const careerApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    education: { type: String, required: true, trim: true },
    experience: { type: String, trim: true },
    position: { type: String, required: true, trim: true },
    location: { type: String, trim: true },
    skills: { type: String, trim: true },
    message: { type: String, trim: true },
    resume: {
      name: String,
      mimeType: String,
      size: Number,
      data: Buffer,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CareerApplication", careerApplicationSchema);
