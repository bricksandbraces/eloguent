/**
 * An enumerated type for handling the order of the log levels.
 */
export enum LogLevel {
  "debug",
  "log",
  "warn",
  "error"
}

/**
 * A string aliased type containg all log level options
 */
export type LogLevelType = "debug" | "log" | "warn" | "error";

export type Logger = Record<LogLevelType, (...out: any[]) => void>;

/**
 * An optional config for your logger.
 */
export type LoggerConfig = {
  /**
   * Determines the level used for the logging console. See also persistencyLevel. Default value is log.
   */
  consoleLevel?: LogLevel;

  /**
   * Determines the level used to persist logs.
   * Recommandation is to set it to a level with more detail
   * than the console one. See consoleLevel therefore.
   *
   * To persist your logs see the persist function.
   */
  persistencyLevel?: LogLevel;

  /**
   * If you wish to customize the order or look of the printed message, you can use this formatMessage function.
   * It will override the default pattern in which messages are getting printed.
   *
   * This ultimately leads other format options such as timestamps to be ignored.
   */
  formatMessage: (
    ctx: { category: string; logLevelString: string },
    ...out: any[]
  ) => string;

  /**
   * Uses the persistencyLevel to write outputs to a storage of your choice.
   * Executed after console logging.
   */
  persist?: (...out: any[]) => void;

  /**
   * Determine if timestamps should be printed or not.
   */
  timestamps?: boolean;
};

/**
 * Receive a new logger object with a fixed log category. This should be used to receive a logger per module/component in your app.
 * You can customize the logging via providing a logger config.
 *
 * @param category the name of the module or component you receive the logger from
 * @param config optional customization config. See LoggerConfig type for documentation
 * @returns a logger object analogue to `console` from the browser. See Logger type for documentation
 */
function getLogger(category: string, config?: LoggerConfig) {
  const timestamp = config?.timestamps ? new Date().toUTCString() : "";
  const consoleLevel = config?.consoleLevel ?? LogLevel.debug;
  const { persist, formatMessage } = config ?? {};
  const persistencyLevel = config?.persistencyLevel;

  // for every log level a function from console ins being adopted
  let loggerObj = {} as Logger;
  for (let key in LogLevel) {
    const logLevelString = key as LogLevelType;
    const logLevel = LogLevel[logLevelString];
    loggerObj[logLevelString] = (...out: any[]) => {
      const output: string = formatMessage
        ? formatMessage({ category, logLevelString }, out)
        : `${
            timestamp ? `[${timestamp}] ` : ""
          }[${logLevelString.toUpperCase()}] ${category} - ${out.join(" ")}`;
      // execute console opertaion
      if (consoleLevel <= logLevel) {
        console[logLevelString as LogLevelType](output);
      }
      // execute persistency operation
      if (persistencyLevel != null && persistencyLevel <= logLevel && persist) {
        persist(output);
      }
    };
  }

  return loggerObj;
}

/**
 * A function to check for a condition to be truthy. If it is violated, an assert error is being printed.
 * Analogue to console.assert.
 *
 * @param condition if false, the assert will trigger
 * @param data the message to be printed
 */
function assert(condition?: boolean, ...data: any[]) {
  console.assert(condition, data);
}

export { getLogger, assert };
