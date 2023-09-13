//JSON de respuesta cuando se utilize el servicio de añadir tareas
const addMessages = {
  conflictFound: {
    status: "conflict found",
    code: 409,
    message: "the task you entered already exists in the list",
  },
  success: {
    status:"OK",
    code: 201,
    message: "Task successfully added"
  },
};
//JSON de respuesta cuando se utilize el servicio de actualizar tareas
const updateMessages = {
  errorNotFound: {
    status: "error",
    code: 404,
    message: "task ID not found",
  },
  success: {
    status: "OK",
    code: 200,
    message: "task successfully updated",
  },
};
//JSON de respuesta cuando se utilize el servicio de eliminar tareas
const deleteMessages = {
  error: {
    status: "error",
    code: 404,
    message: "Task ID not found",
  },
  success: {
    status: "OK",
    code: 200,
    message: "task successfully deleted",
  },
};

module.exports = { updateMessages, deleteMessages, addMessages };
