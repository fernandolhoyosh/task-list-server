const express = require("express");
const router = express.Router();

//Importo la lista de tareas
const taskList = require("../data/tasks");

// Importo middleware de validacion de errores para metodos POST y PUT
const {validateErrors} = require("../middlewares/validateErrors");

// Importo modulos para añadir, eliminar y actualizar tareas
const {addTask} = require("../modules/addTask");
const {deleteTask} = require("../modules/deleteTask");
const {updateTask} = require('../modules/updateTask');


// Defino las rutas

router.post("/add", validateErrors, (req, res) => {
  const taskName = req.body.description;
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

router.put("/update/:id", validateErrors, (req, res) => {
    const idTask = req.params.id;
    const {description, completed} = req.body;
    updateTask(taskList, idTask, description, completed)
        .then(response => res.status(response.code).send(response))
        .catch(error => res.status(error.code).send(error));
});

module.exports = router;
