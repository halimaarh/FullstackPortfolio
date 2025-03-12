import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import { dirname } from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Ensure `dist` folder exists
const distPath = path.join(__dirname, "..", "frontend", "dist");
if (!fs.existsSync(distPath)) {
  console.error(
    "❌ ERROR: `dist` folder not found. Run `npm run build` first."
  );
  process.exit(1);
}

app.use(express.static(distPath));

// ✅ Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ ERROR: Missing EMAIL_USER or EMAIL_PASS in .env file");
  process.exit(1);
}

console.log("✅ Email User:", process.env.EMAIL_USER);

// ✅ Email Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Resume Download API
app.get("/api/resume", (req, res) => {
  const filePath = path.join(
    __dirname,
    "..",
    "frontend",
    "public",
    "myCV.docx"
  );

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Resume file not found" });
  }

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  );
  res.setHeader("Content-Disposition", "attachment; filename=myCV.docx");

  fs.createReadStream(filePath).pipe(res);
});

// ✅ Contact Form API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required" });
    }

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    console.log("📩 Sending email...");
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("❌ ERROR: Failed to send email", error);
    res.status(500).json({
      success: false,
      error: "Failed to send message",
      details: error.message,
    });
  }
});

// ✅ Serve React App
app.get("*", (req, res) => {
  const indexPath = path.join(distPath, "index.html");
  if (!fs.existsSync(indexPath)) {
    return res.status(500).json({ error: "React build not found" });
  }
  res.sendFile(indexPath);
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
