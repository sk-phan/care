import app from "./config/app";
import config from "./config/config";
import logger from "./config/logger";

app.listen(config.PORT, '0.0.0.0', () => {
   logger.info(`Server listening on ${config.PORT}`);
});