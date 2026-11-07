const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    service: { type: String, required: true, trim: true },
    requiredBy: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    appointmentDate: { type: String, required: true, trim: true },
    status: { type: String, default: "new", enum: ["new", "contacted", "completed"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
