const express = require('express');
const router = express.Router();

const taskList = require('../data/tasks');

const {validateTaskId} = require('../middlewares/validateGetParams');
const {validateToken} = require("../middlewares/auth/validateToken");

const {showTasks} = require('../modules/showTasks');

router.use(validateToken);

//Endpoint para mostrar al usuario todas las tareas
router.get('/show/all', (req, res) => {
    res.status(200).json(showTasks(taskList, 'all'));
});

//Endpoint para mostrar al usuario las tareas completadas
router.get('/show/completed', (req, res) => {
    res.status(200).json(showTasks(taskList, 'completed'));
});

//Endpoint para mostrar al usuario las tareas pendientes
router.get('/show/pending', (req, res) => {
    res.status(200).json(showTasks(taskList, 'pending'));
});

//Endpoint para mostrar una sola tarea deseada
router.get('/show/id/:id', validateTaskId, (req, res) => {
    const task = req.taskFound;
    res.status(200).json({status: "OK", task: task});
});

module.exports = router;