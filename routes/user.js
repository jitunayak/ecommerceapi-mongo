const router = require('express').Router();

router.get('/usertest', (req, res) => {
    res.send('user test successfull')
})

router.post('/usertestpost', (req, res) => {
    const username = req.body.username;
    res.send("hello user : " + username);
})

module.exports = router;