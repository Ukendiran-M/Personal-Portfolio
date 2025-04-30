const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: 'https://ukendiran.netlify.app', // Replace with your real Netlify domain
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.post('/send', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ukimanimaran@gmail.com',       // replace with your Gmail
      pass: 'ekvxsjionleltxaj',         // use App Password if 2FA is on
    },
  });

  const mailOptions = {
    from: email,
    to: 'ukimanimaran@gmail.com',
    subject: `New message from ${name}: ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Email sending failed' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));