const fs = require("fs");
const path = require("path");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../config/emailConfig");
const UserModel = require("../models/userModel");
require("dotenv").config();

// register user
const registerUser = async (req, res) => {
    const { name, email, password, phone } = req.body;

    if (name === password) {
        return res.status(400).send({ msg: "Name and password must be unique", success: false });
    }

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ msg: "Email already exists", success: false });
        }

        const otp = Math.floor(100000 + Math.random() * 900000);
        const hashedPassword = await bcrypt.hash(password, 10);

        const token = jwt.sign(
            { name, email, password: hashedPassword, phone, otp },
            process.env.SECRET_KEY,
            { expiresIn: "5m" }
        );

        // Load and modify the email template
        const emailTemplatePath = path.join(__dirname, "../public/emailTemplate.html");
        let emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");
        emailTemplate = emailTemplate.replace("{{otp}}", otp);

        await sendEmail(email, "Email Verification", emailTemplate);

        return res.send({
            success: true,
            msg: "OTP sent to your email.",
            token,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ success: false, msg: "error sending OTP" });
    }
};

// verify otp
const verifyOtp = async (req, res) => {
    const { otp, token } = req.body;

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        if (decoded.otp == otp) {
            let newUser = {
                name: decoded.name,
                email: decoded.email,
                password: decoded.password,
                phone: decoded.phone,
            };

            newUser = await userModel.create({
                ...newUser,
            });

            const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
                expiresIn: "10d",
            });

            return res.send({
                success: true,
                msg: "registration successful",
                newUser,
                token,
            });
        } else {
            return res.status(400).send({
                success: false,
                msg: "Invalid OTP",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            msg: "Invalid OTP",
        });
    }
};

// user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            return res.status(400).send({ msg: "email not found", success: false });
        }
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(400).send({ msg: "wrong email or password", success: false });
        }
        const token = jwt.sign({ id: existingUser._id }, process.env.SECRET_KEY, {
            expiresIn: "10d",
        });
        res.send({ msg: "login successful", success: true, existingUser, token });
    } catch (error) {
        res.status(500).send({ msg: "an error occurred", success: false });
    }
};

// Controller to get role by email
const getCurrentUser = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).send({ msg: "User not found", success: false });
        }
        res.send({ msg: "User role retrieved successfully", success: true, role: user.role });
    } catch (error) {
        res.status(500).send({ msg: "An error occurred", success: false, error });
    }
};

module.exports = {
    registerUser,
    loginUser,
    verifyOtp,
    getCurrentUser,
};
