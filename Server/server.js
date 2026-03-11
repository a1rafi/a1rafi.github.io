const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const https = require("https");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("Not allowed by CORS"));
    },
  })
);
app.use(express.json({ limit: "1mb" }));

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error.message));

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  subject: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    res.status(400).json({ success: false, message: "All fields are required." });
    return;
  }

  try {
    await Message.create({ name, email, subject, message });
    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

function httpsRequest(url, options = {}, body = null) {
  return new Promise((resolve, reject) => {
    const request = https.request(url, options, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        resolve({ status: response.statusCode, headers: response.headers, body: data });
      });
    });

    request.on("error", (error) => reject(error));

    if (body) {
      request.write(body);
    }

    request.end();
  });
}

function extractCsrfToken(html) {
  const match = html.match(/name="csrfmiddlewaretoken" value="([^"]+)"/);
  return match ? match[1] : "";
}

function extractCookies(setCookie = []) {
  if (!Array.isArray(setCookie)) return "";
  return setCookie
    .map((cookie) => cookie.split(";")[0])
    .filter(Boolean)
    .join("; ");
}

app.post("/api/anonymous", async (req, res) => {
  const { body, author } = req.body || {};

  if (!body || !String(body).trim()) {
    res.status(400).json({ success: false, message: "Message is required." });
    return;
  }

  try {
    const formUrl = "https://www.admonymous.co/a1rafi/post";
    const getResponse = await httpsRequest(formUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "text/html,application/xhtml+xml",
      },
    });

    const csrfToken = extractCsrfToken(getResponse.body);
    const cookieHeader = extractCookies(getResponse.headers["set-cookie"]);

    if (!csrfToken || !cookieHeader) {
      res.status(502).json({
        success: false,
        message: "Could not initialize anonymous form session.",
      });
      return;
    }

    const payload = new URLSearchParams();
    payload.set("csrfmiddlewaretoken", csrfToken);
    payload.set("email", "");
    payload.set("body", body);
    payload.set("author", author && String(author).trim() ? author : "anonymous");

    const postResponse = await httpsRequest(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(payload.toString()),
        Cookie: cookieHeader,
        Origin: "https://www.admonymous.co",
        Referer: formUrl,
        "User-Agent": "Mozilla/5.0",
      },
    }, payload.toString());

    if (postResponse.status !== 200) {
      res.status(502).json({
        success: false,
        message: "Anonymous message failed.",
      });
      return;
    }

    res.status(200).json({ success: true, message: "Anonymous message sent!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
