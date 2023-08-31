const express = require('express');
const router = express.Router();

const taskList = require('../data/tasks');

const serviceTasks = require('../modules/showTasks');
const tasksCompleted = serviceTasks.tasksCompleted;
const tasksIncomplete = serviceTasks.tasksPending;

router.get('/completed', (req, res) => {
    console.log(`Enviando tareas completas al cliente`);
    res.status(200).json(tasksCompleted(taskList));
});

router.get('/pending', (req, res) => {
    console.log(`Enviando tareas pendientes al cliente`);
    res.status(200).json(tasksIncomplete(taskList));
});

module.exports = router;