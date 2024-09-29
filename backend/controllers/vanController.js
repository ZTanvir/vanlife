const db = require("../models/connectSqlDb");

const getVanImage = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json("error:No file uploaded.");
  }
  const { filename, path } = req.file;

  const addVanImageQuery = `
    INSERT INTO van_images(path,filename)
    VALUES (?,?);
  `;
  db.run(addVanImageQuery, [path, filename], (err) => {
    if (err) {
      // return res.status(500).send("Error saving image to the database");
      console.error("Error saving image to the database");
    } else {
      // return res.status(200).send("Image uploaded and saved successfully");
      console.log("Image uploaded and saved successfully");
    }
  });

  next();
};

module.exports = { getVanImage };
