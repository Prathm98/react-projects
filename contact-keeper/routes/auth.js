const express = require('express');
const router = express.Router();

// @route     GET /api/auth
// @desc      Get login user
// @access    Private
router.get("/", (req, res) => {
  res.send('Auth Get /');
});

// @route     POST /api/auth
// @desc      Auth user & get token
// @access    Public
router.post("/", (req, res) => {
  res.send('Auth Post /');
});

module.exports = router;