const validatePost = ( req, res, next) => {

    const data = {status: "bad request", code: 400}

    const task = JSON.parse(JSON.stringify(req.body));
    console.log(task);
    if (Object.keys(task).length == 0) {
      return res.status(400).json({...data, message:"no valid JSON data provided"})
    }
    if(!task.description){
      return res.status(400).json({
        ...data,
        message:"invalid attributes",
        validAttributes: {description:"String", completed:"Boolean"}
      })
    }else{
      const taskNameTrim = task.description.trim();
      if (!taskNameTrim) {
        return res.status(400).json({...data, message: "the task cannot be empty"})
      }else{
        req.body.description = taskNameTrim;
      }
    }
  next();
}

module.exports = {validatePost};