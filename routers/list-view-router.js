const express = require('express');
const router = express.Router();

const taskList = require('../data/tasks');

const {validateGetParams} = require('../middlewares/validateGetParams');
const {showTasks} = require('../modules/showTasks');

/* router.use(validateGetParams); */

router.get('/show/:key', validateGetParams, (req, res) => {
    const parameter = req.params.key;
    console.log('Sending tasks to the client');
    res.status(200).json(showTasks(taskList, parameter));
});

module.exports = router;