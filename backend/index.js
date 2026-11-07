// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// const connectDB = require("./config/db");

// // Load environment variables
// dotenv.config();

// // Connect MongoDB
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Test route
// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "HCAH Backend API is running",
//   });
// });

// // Server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const dotenv = require("dotenv");
dotenv.config(); // load .env FIRST

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const connectDB = require("./config/db");
const Lead = require("./models/Lead");
const Appointment = require("./models/Appointment");
const CareerApplication = require("./models/CareerApplication");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, callback) => {
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    callback(null, allowedTypes.includes(file.mimetype));
  },
});

// Test route
app.get("/", (req, res) => {
  res.json({ success: true, message: "HCAH Backend API is running" });
});

app.post("/api/leads", async (req, res) => {
  try {
    const { name, phone, location, email } = req.body;

    if (!name || !phone || !location) {
      return res.status(400).json({ success: false, message: "Name, phone, and location are required." });
    }

    const lead = await Lead.create({ name, phone, location, email });
    return res.status(201).json({ success: true, id: lead._id });
  } catch (error) {
    console.error("Lead submission error:", error.message);
    return res.status(500).json({ success: false, message: "Unable to save lead." });
  }
});

app.post("/api/appointments", async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    return res.status(201).json({ success: true, id: appointment._id });
  } catch (error) {
    console.error("Appointment submission error:", error.message);
    return res.status(400).json({ success: false, message: "Please provide all appointment details." });
  }
});

app.post("/api/career-applications", upload.single("resume"), async (req, res) => {
  try {
    const requiredFields = ["name", "phone", "email", "education", "position"];
    const missingField = requiredFields.find((field) => !req.body[field]);

    if (missingField) {
      return res.status(400).json({ success: false, message: `${missingField} is required.` });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: "A PDF, DOC, or DOCX resume is required." });
    }

    const application = await CareerApplication.create({
      ...req.body,
      resume: req.file
        ? {
            name: req.file.originalname,
            mimeType: req.file.mimetype,
            size: req.file.size,
            data: req.file.buffer,
          }
        : undefined,
    });

    return res.status(201).json({ success: true, id: application._id });
  } catch (error) {
    console.error("Career application error:", error.message);
    return res.status(400).json({ success: false, message: "Please provide valid application details and resume." });
  }
});

// Start server only after DB is connected
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
