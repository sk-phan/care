type LogFunction = (...params: unknown[]) => void;

const info: LogFunction = (...params) => {
  console.log('INFO:', ...params);
};

const error: LogFunction = (...params) => {
  console.error('ERROR:', ...params);
};

const logger = { info, error };
export default logger;
