/**
 * Represents a function type for customizing error handling in the Awesome library.
 * @typedef {function} ErrorHandlerOption
 * @param {Error} err - The error to be customized.
 * @returns {Error} - The customized error.
 */
export type ErrorHandlerOption = (err: Error) => Error;

/**
 * Represents the options that can be provided to customize the behavior of the Awesome library.
 * @typedef {Object} AwesomeOptions
 * @property {function(Error): Error} [errorHandler] - A function to customize error handling.
 */
export type AwesomeOptions = {
  errorHandler?: ErrorHandlerOption
};

/**
 * Represents the asynchronous function signature of Awesome.
 * @typedef {function<T>} AwesomeAsync
 * @param {function(): Promise<T>} func - The asynchronous function to be executed.
 * @param {AwesomeOptions} [options] - Options to customize the behavior of the operation.
 * @returns {Promise<AwesomeResult<T>>} - A Promise resolving to the result of the operation.
 */
type AwesomeAsync = <T>(
  func: () => Promise<T>,
  options?: AwesomeOptions
) => Promise<AwesomeResult<T>>;

/**
 * Represents the synchronous function signature of Awesome.
 * @typedef {function<T>} AwesomeSync
 * @param {function(): T} func - The synchronous function to be executed.
 * @param {AwesomeOptions} [options] - Options to customize the behavior of the operation.
 * @returns {AwesomeResult<T>} - The result of the operation.
 */
type AwesomeSync = <T>(
  func: () => T,
  options?: AwesomeOptions
) => AwesomeResult<T>

/**
 * Represents the result of an Awesome operation.
 * @typedef {Object} AwesomeResult
 * @property {*} data - The data result of the operation.
 * @property {Error|null} error - The error, if any, that occurred during the operation.
 */
type AwesomeResult<T> = { data: T | null; error: Error | null };

/**
 * Represents the Awesome function, which includes both asynchronous and synchronous variants.
 * @typedef {Object} AwesomeFunction
 * @property {AwesomeAsync} async - The asynchronous variant of the Awesome function.
 * @property {AwesomeSync} sync - The synchronous variant of the Awesome function.
 */
type AwesomeFunction = {
  async: AwesomeAsync
  sync: AwesomeSync
};

/**
 * Represents a function that instantly creates an instance of the Awesome library with optional default options.
 * @typedef {function} AwesomeInstant
 * @param {AwesomeOptions} [options] - Default options for the Awesome library.
 * @returns {AwesomeFunction} - An instance of the Awesome library.
 */
type AwesomeInstant = (options?: AwesomeOptions) => AwesomeFunction

/**
 * The instantiator function for the Awesome library.
 * @type {AwesomeInstant}
 */
const awesomeInstant: AwesomeInstant = (defaultOptions) => {
  /**
  * Asynchronous implementation of the Awesome function.
  * @type {AwesomeAsync}
  */
  const awesomeAsync: AwesomeAsync = async (func, options) => {
    const option = options || defaultOptions
    try {
      const data = await func();
      return { data, error: null };
    } catch (err) {
      if (err instanceof Error) {
        return {
          data: null,
          error: option?.errorHandler ? option.errorHandler(err) : err,
        };
      }

      return {
        data: null,
        error: new Error("internal error"),
      };
    }
  };

  /**
 * Synchronous implementation of the Awesome function.
 * @type {AwesomeSync}
 */
  const awesomeSync: AwesomeSync = (func, options) => {
    const option = options || defaultOptions
    try {
      const data = func();
      return { data, error: null };
    } catch (err) {
      if (err instanceof Error) {
        return {
          data: null,
          error: option?.errorHandler ? option.errorHandler(err) : err,
        };
      }

      return {
        data: null,
        error: new Error("internal error"),
      };
    }
  };

  /**
 * An instance of the Awesome library with both asynchronous and synchronous variants.
 * @type {AwesomeFunction}
 */
  const awesome: AwesomeFunction = {
    async: awesomeAsync,
    sync: awesomeSync
  }
  return awesome
}

/**
 * Default instance of the Awesome library without any default options.
 * @type {AwesomeFunction}
 */
const awesome = awesomeInstant()

export { awesomeInstant, awesome }