const addTask = (taskslist, taskName) => {
    return new Promise((resolve, reject) => {
        const newTask = {
            description: taskName,
            completed: false,
        }
        taskslist.push(newTask);
        resolve({
            status:"OK",
            code: 201,
            message: "Task successfully added",
            newTask,
        });
    });
}

module.exports = addTask;