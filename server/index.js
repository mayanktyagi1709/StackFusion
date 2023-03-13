const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const cors = require('cors');


const app = express();
const PORT = 8800;
dotenv.config();

mongoose.set("strictQuery", false);

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("DB is running");
    } catch (err) {
      throw err;
    }
};
  
mongoose.connection.on("disconnect", () => {
    console.log("DB is disconnected");
});

// nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
});

// send email function
const sendEmail = (to, subject, message) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        html: message,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
    });
};

app.use(cors());
app.use(express.json());
app.use('/api/user', userRoute)

// example route to send email to a user
app.post('/api/send-email', async (req, res) => {
    const { email, subject, message } = req.body;

    try {
        await sendEmail(email, subject, message);
        res.status(200).send('Email sent successfully!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error sending email');
    }
});

app.listen(PORT, ()=>{
    connect();
    console.log(`listening on ${PORT}`);
})
