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
      console.log("ESTATUS SERVICE UPDATE",status)
      const test = status;
      if (status === false || status === true) {
        console.log("VALUE TEST", test)
      taskUpdate.completed = test;
      } else  taskUpdate.completed;
      console.log("SERVICEUPDATE", taskUpdate.completed)
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
