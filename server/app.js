// Importo file System
const fs = require("fs");
// Importo Express
const express = require("express");
const app = express();
const port = 3000;

// respuesta del servidor al recibir el metodo GET y ruta raiz
app.get("/", (req, res) => {
    // Con file system cargo el archivo JSON con la lista de tareas para enviar al cliente
  fs.readFile("data/tasks.json", "utf-8", (error, data) => {
    // Si el archivo tiene un error al cargar el archivo JSON imprime la respuesta de error al cliente
    if (error) {
      const messageError = {mensaje: "Error al leer el archivo JSON", error}
      res.status(404);
      res.send(messageError);
    } else {
        // Si todo esta ok Imprime la lista de tareas al cliente
      try {
        const taskList = JSON.parse(data);
        res.status(200);
        res.send(taskList);
      } catch (err) {
        // si no puede convertir a JSON el archivo cargado imprime el error y lo muestra al cliente
        console.error(err);
        const messageError = err.toString();
        res.status(404);
        res.send(messageError);
      }
    }
  });
});

// Iniciar el servidor

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
