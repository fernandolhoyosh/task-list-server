const updateTask = (taskList, idTask, newTaskName, status) => {
    return new Promise((resolve, reject) => {
       const taskUpdate = taskList.find(task => task.id === idTask);  //Referencia de memoria del array original
       if (!taskUpdate) {
        reject('tarea no encontrada');
       } else {
        newTaskName ? taskUpdate.description = newTaskName : taskUpdate.description;
        status ? taskUpdate.completed = status === "true" : taskUpdate.completed;
        resolve('tarea actualizada');
       }
    })
}

module.exports = {updateTask};