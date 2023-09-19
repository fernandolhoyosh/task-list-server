const users = require('../../data/users');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

const loginUser = (req, res, next) => {
    const {username, password} = req.body;
    const userExisting = users.find(user => user.username === username && user.password === password);
    if (!userExisting) {
        res.status(401).send({error:"Invalid username or password"});
    } else {
        const payload = {
            username: userExisting.username,
            email: userExisting.email,
            rol: userExisting.rol
        }
        const accessToken = jwt.sign(payload, SECRET_KEY, {expiresIn: '1h'});
        req.accessToken = accessToken;
        next();
    }
}

module.exports = {loginUser}