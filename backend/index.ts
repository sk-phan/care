import app from "./utils/app";
import config from "./utils/config";
import logger from "./utils/logger";

// Define your routes and middleware here
app.listen(config.PORT, '0.0.0.0', () => {
   logger.info(`Server listening on ${config.PORT}`);
});