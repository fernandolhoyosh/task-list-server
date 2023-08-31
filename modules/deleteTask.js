const deleteTask = (tasklist, taskNameDelete) => {
  return new Promise((resolve, reject) => {
    if (tasklist.find((task) => task.description === taskNameDelete)) {
      const index = tasklist.findIndex((task) => task.description === taskNameDelete);
      const taskName = tasklist[index].description;
      tasklist.splice(index, 1);
      resolve({
        status: "OK",
        code: 200,
        message: "task successfully deleted",
        value: taskName,
      });
    } else {
      reject({
        status: "error",
        code: 404,
        message: `Task not found`,
        value: taskNameDelete,
      });
    }
  });
};

module.exports = deleteTask;
