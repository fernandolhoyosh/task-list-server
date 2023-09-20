const express = require('express');
const router = express.Router();

const {loginUser} = require('../middlewares/auth/loginUser');
const {validateToken} = require('../middlewares/auth/validateToken');

router.post('/login', loginUser, (req, res) => {
    const token = req.accessToken;
    res.status(201).json({token});
});

router.get('/ruta-protegida', validateToken, (req, res) => {
    const userRol = req.headers.rol;
  
    if (userRol === 'admin') {
      res.status(200).send("ACCESO CORRECTO");
    } else {
      res.status(401).json({ error: "Access not allowed" });
    }
  });

module.exports = router;