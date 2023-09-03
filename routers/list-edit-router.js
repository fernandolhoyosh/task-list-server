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
      res.status(response.code).send(response);
      console.log("New task added:", response.newTask);
      console.log(taskList);
    })
    .catch((error) => {
      res.status(error.code).json(error);
    });
});

router.delete("/delete/:id", (req, res) => {
  const idTask = req.params.id;
  deleteTask(taskList, idTask)
    .then((response) => res.status(response.code).send(response))
    .catch((error) => res.status(error.code).send(error));
});

router.put("/update/:id", (req, res) => {
    const idTask = req.params.id;
    const {name, completed} = req.query;
    updateTask(taskList, idTask, name, completed)
        .then(response => res.status(response.code).send(response))
        .catch(error => res.status(error.code).send(error));
});

module.exports = router;
