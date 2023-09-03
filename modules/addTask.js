const addTask = (taskslist, taskName) => {
    return new Promise((resolve, reject) => {
        const taskNameTrim = taskName.trim();
        if (!taskNameTrim) {
            return reject({
                status:"bad request",
                code: 400,
                message: "the task cannot be empty",
                value: taskName,
            });
        }    
            const taskFilter = taskslist.find(task => task.description === taskNameTrim);
        if (taskFilter) {
            reject({
                status:"conflict found",
                code: 409,
                message: "the task you entered already exists in the list",
                taskFilter,
            });
        } else {
            const idTask = String(taskslist.length === 0 ? 1 : parseInt(taskslist[taskslist.length-1].id) + 1);
            const newTask = {
                id: idTask,
                description: taskNameTrim,
                completed: false,
            }    
            taskslist.push(newTask);
            resolve({
                status:"OK",
                code: 201,
                message: "Task successfully added",
                newTask,
            });
        }
    });
}

module.exports = {addTask};