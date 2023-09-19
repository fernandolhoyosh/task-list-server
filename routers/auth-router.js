const express = require('express');
const router = express.Router();

const users = require('../data/users');
const {loginUser} = require('../middlewares/auth/loginUser');

router.post('/login', loginUser, (req, res) => {
    const token = req.accessToken;
    res.status(201).json({token});
});

module.exports = router;