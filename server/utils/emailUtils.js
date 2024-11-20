const nodemailer = require("nodemailer");

const sendUserRegistrationEmail = async (newUser) => {
    const transporter = nodemailer.createTransport({
        service: "gmail", // Using Gmail
        auth: {
            user: "vaibhav.redmi.123@gmail.com", // Sender email
            pass: "mwlm rgpm ypdx okdw", // App password (hardcoded)
        },
    });

    const mailOptions = {
        from: "vaibhav.redmi.123@gmail.com", // Sender email
        to: "vaibhav.1098@gmail.com", // Fixed recipient email
        subject: "New User Registered",
        text: `A new user has created an account.\n\nDetails:\nName: ${newUser.name}\nEmail: ${newUser.email}\nPhone: ${newUser.phone}`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send registration email.");
    }
};

module.exports = { sendUserRegistrationEmail };
