const express = require("express");
const app = express();
const cors = require("cors");
const middleware = require("./utils/middleware");
const vansRouter = require("./routes/vansRouter");
app.use(express.json());
app.use(cors());

app.use("/api", vansRouter);

app.use(middleware.requestLogger);
app.use(middleware.unknownEndPoint);

module.exports = app;
