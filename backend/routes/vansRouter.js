const express = require("express");
const vanRouter = express.Router();
const crypto = require("crypto");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const nameOfFile = `${crypto
      .randomBytes(4)
      .toString("hex")}${file.originalname.split(" ").join("")}`;
    console.log(nameOfFile);
    cb(null, nameOfFile);
  },
});
var upload = multer({ storage: storage });
vanRouter.use("/uploads", express.static("uploads"));

vanRouter.get("/van", (req, res) => {
  res.status(200).send("<h1>Van route</h1>");
});

vanRouter.get("/van/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send(`<h1>Van id ${id}</h1>`);
});

vanRouter.post("/van/uploads", upload.single("bus"), (req, res) => {
  res.json(req.file);
});

module.exports = vanRouter;
