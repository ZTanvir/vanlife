const logger = require("../utils/logger");
const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(
  "./models/vanlife.db",
  sqlite3.OPEN_READWRITE,
  (error) => {
    if (error) {
      logger.error("Error on connecting to database", error.message);
    } else {
      logger.info("Connected to vanlife database");
    }
  }
);

const createVanImageTable = `
CREATE TABLE IF NOT EXISTS "van_images"(
  "id" INTEGER,
  "path" TEXT NOT NULL,
  "filename" TEXT NOT NULL,
  "createat" INTEGER DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);
`;

db.run(createVanImageTable, (err) => {
  err
    ? logger.error("Error on creating van_images table")
    : logger.info("van_images table created successfully");
});

const createVanTable = `
CREATE TABLE IF NOT EXISTS "vans"(
  "id" INTEGER,
  "image_id" INTEGER,
  "name" TEXT NOT NULL,
  "rent" INTEGER NOT NULL,
  "descriptions" TEXT NOT NULL,
  "type" TEXT check(type IN ("simple","rugged","luxury")),
  PRIMARY KEY(id),
  FOREIGN KEY ("image_id") REFERENCES van_images ("id") ON DELETE CASCADE
)
`;

db.run(createVanTable, (err) => {
  err
    ? logger.error("Error on creating vans table", err.message)
    : logger.info("vans table created successfully");
});

module.exports = db;
