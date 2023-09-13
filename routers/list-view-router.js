const express = require('express');
const router = express.Router();


const taskList = require('../data/tasks');

const {validateGetParams} = require('../middlewares/validateGetParams');
const {tasksCompleted, tasksPending} = require('../modules/showTasks');

/* router.use(validateGetParams); */

router.get('/show/:key', validateGetParams, (req, res) => {
    /* console.log(req.params.key); */
    /* console.log(`Enviando tareas completas al cliente`);
    res.status(200).json(tasksCompleted(taskList)); */
});

router.get('/show/:pending', validateGetParams, (req, res) => {
    req.params.pending;
    console.log(`Enviando tareas pendientes al cliente`);
    res.status(200).json(tasksPending(taskList));
}); 

router.get('/show/:all', validateGetParams, (req, res) => {
    req.params.all;
    console.log(`Enviando lista de tareas al cliente`);
    res.status(200).json(taskList);
});

module.exports = router;