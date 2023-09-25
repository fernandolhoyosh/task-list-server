const tasks = require("../data/tasks");

const validateGetParams = (req, res, next) => {
  const getParams = ["completed", "pending", "all"];
  const param = req.params.key;

  if (!getParams.includes(param)) {
    return res
      .status(400)
      .json({ status: "error", code: 400, message: "invalid parameters" });
  }
  next();
};

const validateTaskId = (req, res, next) => {
  const idTask = req.params.id;
  const taskFilter = tasks.filter((task) => task.id === idTask);
  console.log(taskFilter)
  if (taskFilter.length === 0) {
    return res
      .status(404)
      .json({ status: "error", code: 404, message: "Task ID not found" });
  }
  req.taskFound = taskFilter;
  next();
};

module.exports = { validateGetParams, validateTaskId };
