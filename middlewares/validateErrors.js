const validateErrors = (req, res, next) => {
  const data = { status: "bad request", code: 400 };
  const task = JSON.parse(JSON.stringify(req.body));

  if (Object.keys(task).length == 0) {
    return res.status(400).json({ ...data, message: "no valid JSON data provided" });
  }

  if (req.method === "POST") {

    if ('description' in task) {
      const description = task.description.trim();
      if (description === '') {
        return res.status(400).json({ ...data, message: "The task cannot be empty" });
      }
      req.body.description = description;
    }else{
      return res.status(400).json({
        ...data,
        message: "invalid attribute",
        validAttributes: { description: "String" },
      });
    }
  }

  if (req.method === 'PUT') {

    const lenghtObject = Object.keys(task).length;

    if (lenghtObject === 1) {
      if ('description' in task) {
        const description = task.description.trim();
        if (description === ''){
          return res.status(400).json({ ...data, message: "The task cannot be empty" });
        }
        req.body.description = description;
      }
      else if ('completed' in task) {
        const status = task.completed;
        if ((status !== true && status !== false && status !== "true" && status !=="false")) {
          return res.status(400).json({ ...data, message: "Only the status of the task can be entered as true or false" });
        }
        req.body.completed = JSON.parse(status);
      }
      else{
        return res.status(400).json({
          ...data,
          message: "invalid attributes",
          validAttributes: { description: "String", completed: "Boolean" },
        });
      }
    }
    else if (lenghtObject === 2) {
      if ('description' in task && 'completed' in task) {
        const description = task.description.trim();
        const status = task.completed;
        if (description === ''){
          return res.status(400).json({ ...data, message: "The task cannot be empty" });
        }
        if ((status !== true && status !== false && status !== "true" && status !=="false")) {
          return res.status(400).json({ ...data, message: "Only the status of the task can be entered as true or false" });
        }
        req.body.description = description;
        req.body.completed = JSON.parse(status);
      }
      else{
        return res.status(400).json({
          ...data,
          message: "invalid attributes",
          validAttributes: { description: "String", completed: "Boolean" },
        });
      }
    }
    else{
      return res.status(400).json({ ...data, message: "Only two properties maximum" });
    }
  } 
  next();
};

module.exports = { validateErrors };