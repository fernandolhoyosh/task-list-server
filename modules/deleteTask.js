const {deleteMessages} = require('../resources/messages/objectsResponse');

const deleteTask = (tasklist, idTaskDelete) => {
  return new Promise((resolve, reject) => {
    if (tasklist.find((task) => task.id === idTaskDelete)) {
      const index = tasklist.findIndex((task) => task.id === idTaskDelete);
      const idTask = tasklist[index].id;
      const taskName = tasklist[index].description;
      tasklist.splice(index, 1);
      resolve({...deleteMessages.success, id: idTask, task: taskName});
    } else {
      reject({...deleteMessages.error, value: idTaskDelete});
    }
  });
};

module.exports = {deleteTask};
