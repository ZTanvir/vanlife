const logger = require("./utils/logger");
const config = require("./utils/config");
const app = require("./app");

app.listen(config.PORT, () => {
  logger.info(`Server is running at port ${config.PORT}`);
});
