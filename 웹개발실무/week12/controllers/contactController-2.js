// ./controller/contactController.js
const asyncHandler = require("express-async-handler");

const getAllContacts = asyncHandler(async (req, res) => {
        res.status(200).send("Contacts Page");
});
