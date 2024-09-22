const logger = require("./logger");

const requestLogger = (req, res, next) => {
  logger.info("Method:", req.method);
  logger.info("Path:  ", req.path);
  logger.info("Body:  ", req.body);
  logger.info("---");
  next();
};

const unknownEndPoint = (req, res, next) => {
  res.status(404).send({ error: "unknown endpoint" });
  next();
};

module.exports = { requestLogger, unknownEndPoint };
