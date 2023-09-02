const updateTask = (taskList, idTask, newTaskName, status) => {
    return new Promise((resolve, reject) => {
       const taskUpdate = taskList.find(task => task.id === idTask);  //Referencia de memoria del array original
       if (!taskUpdate) {
        reject({
            status: "error",
            code: 404,
            message: "task ID not found",
            value: idTask
        });
       } else {
        newTaskName ? taskUpdate.description = newTaskName : taskUpdate.description;
        status ? taskUpdate.completed = status === "true" : taskUpdate.completed;
        resolve({
            status: "OK",
            code: 200,
            message: "task successfully updated",
            taskUpdate
        });
       }
    })
}

module.exports = {updateTask};