const validateGetParams = (req, res, next) => {
    const getParams = ['completed','pending','all'];
    const param = req.params.key;
    console.log(req.params)

    if (!getParams.includes(param)) {
        res.status(400).json({message:"invalid param"});
    }
    next();
}

module.exports = {validateGetParams};