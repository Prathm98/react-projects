const express = require('express');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// @route     POST /api/auth
// @desc      Get login user
// @access    Private
router.post("/", [
  check('email', 'Please enter valid email').isEmail(),
  check('password', 'Please enter password with length 6 or more characters').isLength({min: 6})
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});    
  }

  const { email, password} = req.body;

  try {
    let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({msg: "Invalid Credentials"});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      return res.status(400).json({msg: "Invalid Credentials"});
    }

    let payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: 36000
    }, (err, token) => {
      res.json({token});
    });
  } catch (error) {
    res.send({msg: "Server Error"});
  }
});

// @route     POST /api/auth
// @desc      Auth user & get token
// @access    Public
router.get("/", (req, res) => {
  res.send('Auth Post /');
});

module.exports = router;