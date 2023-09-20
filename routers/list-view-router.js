const express = require('express');
const router = express.Router();

const taskList = require('../data/tasks');

const {validateGetParams} = require('../middlewares/validateGetParams');
const {validateToken} = require("../middlewares/auth/validateToken");

const {showTasks} = require('../modules/showTasks');

router.use(validateToken);
/* router.use(validateGetParams); */

router.get('/show/:key', validateGetParams, (req, res) => {
    const userRol = req.headers.rol;
  
    if (userRol !== 'admin') {
        res.status(401).json({ error: "Access not allowed" });
    } else {    
        const parameter = req.params.key;
        console.log('Sending tasks to the client');
        res.status(200).json(showTasks(taskList, parameter));
    }
});

module.exports = router;