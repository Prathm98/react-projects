const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../middleware/auth');
const Contact = require('../models/Contact');
const User = require('../models/User');

// @route     GET /api/contacts
// @desc      Get a contact
// @access    Private
router.get("/", auth, async (req, res) => {
  try {
    let contact = await Contact.find({user: req.user.id}).sort({ date: -1 });
    res.json(contact);
  } catch (error) {
    return res.status(500).json({msg: "Server Error"});    
  }
  // res.send('Get contact /');
});

// @route     POST /api/contacts
// @desc      Add a contact
// @access    Private
router.post("/", auth, [
  check('name', 'Please enter name').not().isEmpty(),
  check('email', 'Please enter valid email').isEmail(),
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});    
  }

  const {name, email, phone, type} = req.body;

  try {
    let contactObj = new Contact({
      name, email, phone, type,
      user: req.user.id
    });

    let contact = await contactObj.save();
    res.json(contact);
  }catch(error){
    return res.status(500).json({msg: "Server Error"});
  }
});

// @route     PUT /api/contacts/:id
// @desc      Update a contact
// @access    Private
router.put("/:id", auth, async (req, res) => {
  const {name, email, phone, type} = req.body;
  const contactFields = {};

  if(name) contactFields.name = name;
  if(email) contactFields.email = email;
  if(phone) contactFields.phone = phone;
  if(type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if(!contact){
      return res.status(404).json({msg: "Contact not found"});
    }

    if(contact.user.toString() !== req.user.id){
      return res.status(401).json({msg: "Unathorized access"});
    }

    contact = await Contact.findByIdAndUpdate(req.params.id, {
      $set: contactFields
    },{
      new : true
    });

    res.json(contact);
  }catch(error){
    return res.status(500).json({msg: "Server Error"});
  }
});

// @route     DELETE /api/contacts/:id
// @desc      Delete a contact
// @access    Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    if(!contact){
      return res.status(404).json({msg: "Contact not found"});
    }

    if(contact.user.toString() !== req.user.id){
      return res.status(401).json({msg: "Unathorized access"});
    }

    await Contact.findByIdAndRemove(req.params.id);

    res.json({msg: "Contact deleted successfully"});
  }catch(error){
    return res.status(500).json({msg: "Server Error"});
  }
});

module.exports = router;