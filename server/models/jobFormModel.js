const mongoose = require("mongoose");

const jobForm = new mongoose.Schema(

    {
        fullName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        resume: { type: String, required: true },
        jobTitle: { type: String, required: true },
        additionalInfo: { type: String },
    }
    //   { collection: "PdfDetails" }
);

// mongoose.model("jobform", jobForm);
const jobModel = mongoose.model("jobform", jobForm);
module.exports = jobModel;
