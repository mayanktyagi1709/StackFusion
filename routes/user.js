const express = require('express');
const User = require("../models/User");
const router = express.Router();


// get all forms
router.get('/', async(req, res) =>{
    try{
        const forms = await User.find();
        res.status(200).send(forms);
    }
    catch(err){
        res.status(400).send(err);
    }
});

// create a form
router.post('/', async(req, res)=>{
    const form = new User(req.body);
    try{
        const savedForm = await form.save();
        res.status(200).send(savedForm);
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;