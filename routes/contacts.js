const express = require("express");
const router = express.Router();

// @route       POST api/contacts
// @desc        Add new contact
// @access      Private

router.post("/", (req, res) => {
    res.send("Add contact");
});

// @route       PUT api/contacts/:id
// @desc        Update contact
// @access      Pri vate

router.put("/:id", (req, res) => {
    res.send("Update contact");
});

// @route       DELETE api/contacts/:id
// @desc        Delete contact
// @access      Pri vate

router.delete("/:id", (req, res) => {
    res.send("Delete contact");
});

module.exports = router;