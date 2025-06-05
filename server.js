const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Nodemailer transporter setup using Gmail service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seikht542@gmail.com',        // your Gmail address
    pass: 'nnrcwarnhhtramtg'            // your 16-character App Password
  }
});

// 🔔 Log every request
app.use((req, res, next) => {
  console.log(`🔔 ${req.method} ${req.url}`);
  next();
});

// 📬 Handle POST request from contact form
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('All fields are required.');
  }

  const mailOptions = {
    from: email,
    to: 'seikht542@gmail.com',  // your own email to receive messages
    subject: `New Contact Form Submission from ${name}`,
    text: `You received a new message:\n\nFrom: ${name} (${email})\n\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Error sending email:', error);
      return res.status(500).send('Failed to send message. Try again later.');
    }
    console.log('✅ Email sent:', info.response);
    res.send('Message sent successfully!');
  });
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
