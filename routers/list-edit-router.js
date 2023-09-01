const express = require("express");
const router = express.Router();

const taskList = require("../data/tasks");

const serviceAddTask = require("../modules/addTask");
const serviceDeleteTask = require("../modules/deleteTask");
const addTask = serviceAddTask;
const deleteTask = serviceDeleteTask;

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

router.delete("/delete/:task", (req, res) => {
  const task = req.params.task;
  deleteTask(taskList, task)
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(404).send(error));
});

router.put("/update", (req, res) => {});

module.exports = router;
