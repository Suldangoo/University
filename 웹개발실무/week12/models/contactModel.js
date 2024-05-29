// ./models/contactModel.js
const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true ,
        },
        email: {
            type: String ,
        },
        phone: {
            type: String ,
            required: [true, '전화번호는 꼭 입력해 주세요'],
        },
    },
    {
        timestamps: true ,
    }
);

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;

// module.exports = mongoose.model("Contact", contactSchema);
