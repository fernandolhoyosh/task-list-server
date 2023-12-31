const updateTask = (taskList, idTask, newTaskName, status) => {
  return new Promise((resolve, reject) => {
    const taskUpdate = taskList.find((task) => task.id === idTask); //Referencia de memoria del array original
    if (!taskUpdate) {
      reject({
        status: "error",
        code: 404,
        message: "task ID not found",
        value: idTask,
      });
    } else {
      newTaskName ? (taskUpdate.description = newTaskName.trim()) : taskUpdate.description;
      if (status) {
        if (status !== "true" && status !== "false") {
          reject({
            status: "bad request",
            code: 400,
            message: "Only the status of the task can be entered as true or false",
            value: status
          });
        } else {
          taskUpdate.completed = JSON.parse(status);
        }
      }
      resolve({
        status: "OK",
        code: 200,
        message: "task successfully updated",
        taskUpdate,
      });
    }
  });
};

module.exports = { updateTask };
