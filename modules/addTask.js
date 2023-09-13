const {addMessages} = require('../resources/messages/objectsResponse');

const addTask = (taskslist, taskName) => {
    return new Promise((resolve, reject) => {
       
        const taskFilter = taskslist.find(task => task.description === taskName);

        if (taskFilter) {
            reject({...addMessages.conflictFound, taskFilter});
        } else {
            const idTask = String(taskslist.length === 0 ? 1 : parseInt(taskslist[taskslist.length-1].id) + 1);
            const newTask = {
                id: idTask,
                description: taskName,
                completed: false,
            }    
            taskslist.push(newTask);
            resolve({...addMessages.success, newTask});
        }
    });
}

module.exports = {addTask};