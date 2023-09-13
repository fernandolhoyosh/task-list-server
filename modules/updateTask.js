const {updateMessages} = require('../resources/messages/objectsResponse')

const updateTask = (taskList, idTask, newTaskName, status) => {
  return new Promise((resolve, reject) => {
    const taskUpdate = taskList.find((task) => task.id === idTask); //Referencia de memoria del array original
    if (!taskUpdate) {
      reject({...updateMessages.errorNotFound, value: idTask});
    } else {
      newTaskName ? (taskUpdate.description = newTaskName.trim()) : taskUpdate.description;
      if (status === false || status === true) {
      taskUpdate.completed = status;
      } else  taskUpdate.completed;
      resolve({...updateMessages.success, taskUpdate});
    }
  });
};

module.exports = { updateTask };
