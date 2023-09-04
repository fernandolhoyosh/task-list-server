Servidor lista de tareas en Express.

CREATE, READ, UPDATE and DELETE tasks

Comando para iniciar el servidor: npm start

Funciones:

para probar las rutas http puede utilizar POSTMAN u otro parecido.

- Añadir tareas a la lista pasando el nombre de la tarea como parametro en la ruta. el ID se asigna automatico y el estado de la tarea por defecto es FALSE. Ejemplo de uso para añadir 'task1':

POST http://localhost:3000/tasks/add/task1

- Eliminar tareas de la lista pasando el ID de la tarea como parametro. Ejemplo de uso para borrar 'task1':

DELETE http://localhost:3000/tasks/delete/1

- Actualizar el nombre y/o el estado de una tarea parsando como paarmetro el ID de la tarea y el nombre y estado por query params. Ejemplo:

PUT http://localhost:3000/tasks/update/1?name=nuevonombre&completed=false

- Ver las tareas que estan completadas:

GET http://localhost:3000/tasks/completed

- Ver las tareas que estan pendientes por completar:

GET http://localhost:3000/tasks/pending

- Ver todas la tareas almacenadas en la lista:

GET http://localhost:3000/tasks/all