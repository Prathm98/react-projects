const express = require('express');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

// @route     GET /api/users
// @desc      Get logged in user
// @access    Public
router.get("/", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id);
    res.json(user);
  } catch (error) {
    return res.status(401).json({msg: "Server Error"});
  }
});

// @route     POST /api/users
// @desc      Register a user
// @access    Public
router.post("/", [
  check('name', 'Please enter name').not().isEmpty(),
  check('email', 'Please enter valid email').isEmail(),
  check('password', 'Please enter password with length 6 or more characters').isLength({min: 6})
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});    
  }

  const {name, email, password} = req.body;

  try {
    let user = await User.findOne({email});
    if(user){
      return res.status(400).json({msg: "User email already exist"});
    }

    user = new User({ name, email, password });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

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

module.exports = router;