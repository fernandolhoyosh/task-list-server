const express = require("express");
const router = express.Router();

const taskList = require("../data/tasks");

const {addTask} = require("../modules/addTask");
const {deleteTask} = require("../modules/deleteTask");
const {updateTask} = require('../modules/updateTask');

router.post("/add/:task", (req, res) => {
  const taskName = req.params.task;
  addTask(taskList, taskName)
    .then((response) => {
      res.status(201).send(response);
      console.log("New task added:", response.newTask);
      console.log(taskList);
    })
    .catch((error) => {
      res.status(400).send(`error 400`);
    });
});

router.delete("/delete/:id", (req, res) => {
  const idTask = req.params.id;
  deleteTask(taskList, idTask)
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(404).send(error));
});

router.put("/update/:id", (req, res) => {
    const idTask = req.params.id;
    const {name, completed} = req.query;
    updateTask(taskList, idTask, name, completed)
        .then(response => res.status(200).send(response))
        .catch(error => res.status(404).send(error));
});

module.exports = router;
