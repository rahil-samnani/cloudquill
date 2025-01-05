const express = require("express");
const User = require("../models/User")
const router = express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const fetchUser  = require('../middleware/fetchUser')
const { validationResult, check } = require('express-validator');

const JSWT_SECRET = "R@#i|i$@G00dBoy";

//Route 1
// Create a user using POST at /api/auth/createUser
router.post("/createuser", check("name").isLength({ min: 3 }).withMessage('Name nust be atleast 3 character long'), check("email").isEmail().withMessage('Enter valid email'), check("password").isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'), async (req, res) => {

    let success = false

    // if there are errors return bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ success, errors: errors.array() });
    }
    else {
        // check for unique email
        try {
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                return res.status(400).json({success, error: "Email already in use" })
            }
            const salt = await bcrypt.genSalt(10)
            const secPassword = await bcrypt.hash(req.body.password, salt)
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword
            })

            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JSWT_SECRET)

            res.json({success : true, authToken })
        }
        catch (error) {
            console.error(error.message)
            res.status(500).json({success, error: "Some Error Occured" })
        }
    }

})



// Route 2
// verify a user using POST at api/auth/login . No Login
router.post("/login", check("email").isEmail().withMessage('Enter valid email'), check("password").exists().withMessage('Password cannot be Blank'), async (req, res) => {

    let success = false

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ success ,  errors: errors.array() });
    }

    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!user || !passwordCompare) {
            return res.status(400).json({success , errors : "Inavlid Credentials"})
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JSWT_SECRET)
        res.json({ success : true , authToken })
    }
    catch (error) {
        console.error(error.message)
        res.status(500).json({ success, error: "Some Error Occured" })
    }

})


// Route 3
// get loggedin user detail using : POST "/api/auth/getuser". Login required
router.post("/getuser",fetchUser, async (req, res) => {
    try{
        userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    }
    catch(error){
        console.error(error.message)
        res.status(500).json({ error: "Some Error Occured" })
    }
})

module.exports = router;