const deleteTask = (tasklist, idTaskDelete) => {
  return new Promise((resolve, reject) => {
    if (tasklist.find((task) => task.id === idTaskDelete)) {
      const index = tasklist.findIndex((task) => task.id === idTaskDelete);
      const idTask = tasklist[index].id;
      const taskName = tasklist[index].description;
      tasklist.splice(index, 1);
      resolve({
        status: "OK",
        code: 200,
        message: "task successfully deleted",
        id: idTask,
        task: taskName,
      });
    } else {
      reject({
        status: "error",
        code: 404,
        message: `Task ID not found`,
        value: idTaskDelete,
      });
    }
  });
};

module.exports = {deleteTask};
