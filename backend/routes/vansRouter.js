const express = require("express");
const vanRouter = express.Router();

vanRouter.get("/van", (req, res) => {
  res.status(200).send("<h1>Van route</h1>");
});

vanRouter.get("/van/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send(`<h1>Van id ${id}</h1>`);
});

module.exports = vanRouter;
