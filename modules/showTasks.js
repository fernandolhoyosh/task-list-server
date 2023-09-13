const showTasks = (taskList, param) => {
    if (param === 'completed') {
        const tasks = taskList.filter((task) => task.completed);
        return tasks;
    }
    if (param === 'pending') {
        const tasks = taskList.filter((task) => !task.completed);
        return tasks;
    }
    if (param === 'all') {
        return taskList;
    }
}

module.exports = {showTasks};