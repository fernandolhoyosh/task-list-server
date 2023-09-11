/* const validateErrors = (req, res, next) => {
  const data = { status: "bad request", code: 400 };

  if (req.method === "POST" || req.method === 'PUT') {
    const task = JSON.parse(JSON.stringify(req.body));
    console.log(task)
    if (Object.keys(task).length == 0) {
      return res.status(400).json({ ...data, message: "no valid JSON data provided" });
    }
    if (!task.description) {
      return res.status(400).json({
        ...data,
        message: "invalid attributes",
        validAttributes: { description: "String"},
      });
    } else {
      const taskNameTrim = task.description.trim();
      if (!taskNameTrim) {
        return res.status(400).json({ ...data, message: "the task cannot be empty" });
      } else {
        req.body.description = taskNameTrim;
      }
    }
    if (!task.completed) {
      return res.status(400).json({
        ...data,
        message: "invalid attributes",
        validAttributes: { completed: "Boolean" },
      });
    } else {
      const status = task.completed;
      if (!JSON.parse(status)) {
        return res.status(400).json({
          ...data,
          message: "Only the status of the task can be entered as true or false"
        });
      } else {
        req.body.completed = JSON.parse(status);
      }
    }
  }

  next();
};

module.exports = { validateErrors }; */

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
      
    }
    else if (lenghtObject === 2) {
      
    }



   /*  let control = 0;
    let key = false;

    if ('description' in task) {
      control ++
      const description = task.description.trim();
      if (description === '') {
        return res.status(400).json({ ...data, message: "The task cannot be empty" });
      }
      req.body.description = description;
    }

    if ('completed' in task) {
      control ++
      const status = task.completed;
      if ((status !== true && status !== false && status !== "true" && status !=="false")) {
        return res.status(400).json({ ...data, message: "Only the status of the task can be entered as true or false" });
      }
      console.log("MIDDLE",status)
      req.body.completed = JSON.parse(status);
      console.log("MIDLE REQ",req.body.completed)
    } 

    if(control===0){
      return res.status(400).json({
        ...data,
        message: "invalid attributes",
        validAttributes: { description: "String", completed: "Boolean" },
      });
    }*/
  } 
  next();
};

module.exports = { validateErrors };