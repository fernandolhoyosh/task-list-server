Servidor lista de tareas en Express.

CREATE, READ, UPDATE and DELETE tasks

Comando para iniciar el servidor: npm start

Funciones:

para probar las rutas http puede utilizar POSTMAN u otro parecido client.

- Añadir tareas a la lista pasando el nombre de la tarea como JSON en el body. el ID se asigna automatico y el estado de la tarea por defecto es FALSE. Ejemplo de uso para añadir 'task1':

ENDPOINT:
POST http://localhost:3000/tasks/add

BODY JSON:

{
    "description": "task1"
}

- Eliminar tareas de la lista pasando el ID de la tarea como parametro. Ejemplo de uso para borrar 'task1':

ENDPOINT:
DELETE http://localhost:3000/tasks/delete/1

- Actualizar el nombre y/o el estado de una tarea pasando como parametro en la URL el ID de la tarea y el nombre o estado por el cuerpo (body JSON). Ejemplo para actualizar la tarea 'task1' por 'taskOne' y su estado a completado:

ENDPOINT:
PUT http://localhost:3000/tasks/update/1

BODY JSON:

{
    "description": "taskOne",
    "completed": true
}

-- Rutas GET para visualizar tareas

parametros aceptados = ['completed','pending','all']

- Ver las tareas que estan completadas:

GET http://localhost:3000/tasks/show/completed

- Ver las tareas que estan pendientes por completar:

GET http://localhost:3000/tasks/show/pending

- Ver todas la tareas almacenadas en la lista:

GET http://localhost:3000/tasks/show/all