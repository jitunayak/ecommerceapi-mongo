const router = require('express').Router();
const User = require('../models/User')

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body

    try {
        const newuser = new User({
            username: username,
            email: email,
            password: password
        })
        const savedUser = await newuser.save();
        res.status(201).json(savedUser)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;