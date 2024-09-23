const express = require("express");
const app = express();
const middleware = require("./utils/middleware");
const vansRouter = require("./routes/vansRouter");

app.use("/api", vansRouter);

app.use(middleware.requestLogger);
app.use(middleware.unknownEndPoint);

module.exports = app;
