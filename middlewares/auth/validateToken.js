const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({error:"Token no proporcionado"});
    }
    try {
        const tokenDecoded = jwt.verify(token, SECRET_KEY);
    
        if (tokenDecoded.rol === 'admin' || tokenDecoded.rol === 'user') {
          req.headers = {...req.headers, rol: tokenDecoded.rol}
        }else {
          return res.status(401).json({ error: "Rol no válido" });
        }
        next();
      } catch (error) {
        return res.status(401).json({error:"Token Invalido"});
      }
}

module.exports = {validateToken}