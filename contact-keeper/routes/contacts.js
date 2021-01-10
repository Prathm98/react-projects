const express = require('express');
const router = express.Router();

// @route     GET /api/contacts
// @desc      Get a contact
// @access    Public
router.get("/", (req, res) => {
  res.send('Get contact /');
});

// @route     POST /api/contacts
// @desc      Add a contact
// @access    Public
router.post("/", (req, res) => {
  res.send('Create contact /');
});

// @route     PUT /api/contacts/:id
// @desc      Update a contact
// @access    Public
router.put("/:id", (req, res) => {
  res.send('Update a contact /id');
});

// @route     DELETE /api/contacts/:id
// @desc      Delete a contact
// @access    Public
router.delete("/:id", (req, res) => {
  res.send('Delete a contact /id');
});

module.exports = router;