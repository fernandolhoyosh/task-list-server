const validateGetParams = (req, res, next) => {
    console.log("PARAMS DESDE MIDDLE GET",req.params)
    const getParams = ['completed','pending','all'];
    const param = req.params.key;

    if (!getParams.includes(param)) {
        return res.status(400).json({status:"error", code:400, message:"invalid parameters"});
    }
    next();
}

module.exports = {validateGetParams};