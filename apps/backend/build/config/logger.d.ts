type LogFunction = (...params: unknown[]) => void;
declare const logger: {
    info: LogFunction;
    error: LogFunction;
};
export default logger;
