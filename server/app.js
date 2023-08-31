
const fs = require("node:fs");          // Importo el modulo File System
const patch = require('node:path');     // Importo el modulo Patch de Node
const express = require("express");     // Importo Express

const app = express();
const port = 3000;

 //Establezco la ruta del archivo JSON que contiene la lista de tareas
 const filePatch = patch.join(__dirname,'..','data','tasks.json');

// respuesta del servidor al recibir el metodo GET y ruta raiz
app.get("/", (req, res) => {
    // Con file system cargo el archivo JSON con la lista de tareas para enviar al cliente
  fs.readFile(filePatch, "utf-8", (error, data) => {
    // Si el archivo tiene un error al cargar el archivo JSON imprime la respuesta de error al cliente
    if (error) {
      const messageError = {message: "Error al leer el archivo JSON. Ruta no encontrada", error}
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
        res.status(500);
        res.send(messageError);
      }
    }
  });
});

// Iniciar el servidor

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
