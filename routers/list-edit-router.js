const express = require('express');
const router = express.Router();

const taskList = require('../data/tasks');

const serviceAddTask = require('../modules/addTask');
const addTask = serviceAddTask;

router.post('/add/:task', (req, res) => {
    const newTask = {
        task: req.params.task,
        completed: false,
    }
    addTask(taskList, newTask);
    console.log('Se ha añadido una nueva tarea a la lista:', newTask.task);
    console.log(taskList);
    res.status(201).send(`Task successfully added`);
});

router.delete('/delete', (req, res) => {

});

router.put('/update', (req, res) => {

});

module.exports = router;