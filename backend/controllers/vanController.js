const db = require("../models/connectSqlDb");

const getAllVansInformation = (req, res) => {
  const getVansDetailsQuery = "SELECT * FROM vans_details";

  db.all(getVansDetailsQuery, (err, row) => {
    if (err) {
      return res
        .status(500)
        .json({ Error: `Error getting all vans informations,${err}` });
    }
    return res.status(200).json(row);
  });
};

const getSingleVanInformation = (req, res) => {
  console.log(req.params);

  const { id } = req.params;
  const getVanDetailQuery = "SELECT * FROM vans_details WHERE id=?";
  db.get(getVanDetailQuery, [id], (err, row) => {
    if (err) {
      return res
        .status(500)
        .json({ Error: `Error getting all vans informations,${err}` });
    }
    // check does the item in the db?
    // if found return {item},if not null return
    !row
      ? res.status(200).json({ message: `Van infomation not found in the db` })
      : res.status(200).json(row); //item found
  });
};

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

module.exports = {
  getAllVansInformation,
  getSingleVanInformation,
  getVanImage,
};
