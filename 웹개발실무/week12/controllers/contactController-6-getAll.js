// ./controller/contactController.js
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getAllContacts = asyncHandler(async (req, res) => {
        const contacts = await Contact.find();
        res.status(200).send(contacts);
});

const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone ) {
      return res.status(400).send("필수값이 입력되지 않았습니다");
    }
    const contact = await Contact.create(
        { name, email, phone }
    );
    res.status(201).send("Create Contacts");
});

const getContact = asyncHandler(async (req,res) => {
    res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

const updateContact = asyncHandler(async (req,res) => {
    res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});


module.exports = {
    getAllContacts ,
    createContact ,
    getContact ,
    updateContact ,
    deleteContact
};

