const httpMethods = (req, res, next) => {
  const httpMethods = ["GET", "POST", "PUT", "DELETE"];
  const method = httpMethods.includes(req.method);

  if (!method) {
    return res.status(405).json({
        status:"error",
        code: 405,
        message:`method ${req.method} not allowed`
    })
  }
  next();
};

module.exports = { httpMethods };
