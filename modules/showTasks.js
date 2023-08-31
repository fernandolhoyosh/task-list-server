const tasksCompleted = (taskList) => {
    const tasks = taskList.filter((task) => task.completed);
    return tasks;
}

const tasksPending = (taskList) => {
    const tasks = taskList.filter((task) => !task.completed);
    return tasks;
}

const showTasks = () => {

}

module.exports = {tasksCompleted, tasksPending};