const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
          status: "Unauthorized",
          code: 401,
          error: "Token not provided or invalid user"
        });
    }
    try {
        const tokenDecoded = jwt.verify(token, SECRET_KEY);
        if (tokenDecoded.rol === 'admin' || tokenDecoded.rol === 'user') {
          req.headers = {...req.headers, username: tokenDecoded.username, rol: tokenDecoded.rol}
        }else {
          return res.status(401).json({
            status: "Unauthorized",
            code: 401,
            error: "invalid role"
          });
        }
        next();
      } catch (error) {
        return res.status(401).json({
          status: "Unauthorized",
          code: 401,
          error: "invalid token"
        });
      }
}

module.exports = {validateToken}