/**
 * @module awesomeModule
 */

import { errorParser, type ErrorType } from "@dookdiks/error";

export type ErrorHandlerOption = (err: Error) => ErrorType;

export type AwesomeOptions = {
  errorHandler?: ErrorHandlerOption;
};

/**
 * Represents an asynchronous function that can be used with the Awesome module.
 *
 * @template T - The type of data returned by the asynchronous function.
 * @param {Function} func - The asynchronous function to execute.
 * @param {AwesomeOptions} [options] - The options for the asynchronous operation.
 * @returns {Promise<AwesomeResult<T>>} A promise that resolves to the result of the asynchronous operation.
 * @typedef {AwesomeAsync}
 */
type AwesomeAsync = <T>(func: () => Promise<T>, options?: AwesomeOptions) => Promise<AwesomeResult<T>>;

/**
 * Represents a synchronous function that can be used with the Awesome module.
 *
 * @template T - The type of data returned by the synchronous function.
 * @param {Function} func - The synchronous function to execute.
 * @param {AwesomeOptions} [options] - The options for the synchronous operation.
 * @returns {AwesomeResult<T>} The result of the synchronous operation.
 * @typedef {AwesomeSync}
 */
type AwesomeSync = <T>(func: () => T, options?: AwesomeOptions) => AwesomeResult<T>;

/**
 * Represents the result of an operation with the Awesome module.
 *
 * @template T - The type of data returned by the operation.
 * @typedef {AwesomeResult}
 */
type AwesomeResult<T> = { data: T; error: null } | { data: null; error: ErrorType };

/**
 * Represents the functions provided by the Awesome module.
 *
 * @typedef {AwesomeFunction}
 * @property {AwesomeAsync} async - The asynchronous function of the module.
 * @property {AwesomeSync} sync - The synchronous function of the module.
 */
type AwesomeFunction = {
  async: AwesomeAsync;
  sync: AwesomeSync;
};

/**
 * Represents the function for instantiating the Awesome module.
 *
 * @typedef {AwesomeInstant}
 * @param {AwesomeOptions} [options] - The default options for the module.
 * @returns {AwesomeFunction} An object containing the asynchronous and synchronous functions.
 */
type AwesomeInstant = (options?: AwesomeOptions) => AwesomeFunction;


/**
 * Handles errors and transforms them into an AwesomeResult object.
 *
 * @function
 * @name handleError
 * @param {unknown} err - The error object to handle.
 * @param {ErrorHandlerOption} [errorHandler] - Custom error handling function.
 * @returns {AwesomeResult<any>} The result object containing either data or an error.
 */
const handleError = (err: unknown, errorHandler?: ErrorHandlerOption): AwesomeResult<any> => {
  if (err instanceof Error) {
    return {
      data: null,
      error: errorHandler ? errorHandler(err) : errorParser(err),
    };
  }

  return {
    data: null,
    error: new Error("internal error"),
  };
};

/**
 * Represents the function for instantiating the Awesome module.
 *
 * @function
 * @name awesomeInstant
 * @param {AwesomeOptions} [defaultOptions] - The default options for the module.
 * @returns {AwesomeFunction} An object containing the asynchronous and synchronous functions.
 * @typedef {AwesomeInstant}
 */
const awesomeInstant: AwesomeInstant = (defaultOptions) => {
  /**
   * Executes an asynchronous operation with error handling.
   *
   * @async
   * @function
   * @name awesomeAsync
   * @param {Function} func - The asynchronous function to execute.
   * @param {AwesomeOptions} [options] - The options for the asynchronous operation.
   * @returns {Promise<AwesomeResult<any>>} A promise that resolves to the result of the asynchronous operation.
   * @typedef {AwesomeAsync}
   */
  const awesomeAsync: AwesomeAsync = async (func, options = defaultOptions) => {
    try {
      const data = await func();
      return { data, error: null };
    } catch (err) {
      return handleError(err, options?.errorHandler);
    }
  };

  /**
   * Executes a synchronous operation with error handling.
   *
   * @function
   * @name awesomeSync
   * @param {Function} func - The synchronous function to execute.
   * @param {AwesomeOptions} [options] - The options for the synchronous operation.
   * @returns {AwesomeResult<any>} The result of the synchronous operation.
   * @typedef {AwesomeSync}
   */
  const awesomeSync: AwesomeSync = (func, options = defaultOptions) => {
    try {
      const data = func();
      return { data, error: null };
    } catch (err) {
      return handleError(err, options?.errorHandler);
    }
  };

  /**
   * An object containing the asynchronous and synchronous functions of the Awesome module.
   *
   * @typedef {AwesomeFunction}
   */
  const awesome: AwesomeFunction = {
    async: awesomeAsync,
    sync: awesomeSync,
  };

  return awesome;
};

/**
 * The default instance of the Awesome module.
 *
 * @type {AwesomeFunction}
 */
const awesome = awesomeInstant();

/**
 * Exports the Awesome module and its instantiation function.
 *
 * @exports awesomeInstant
 * @exports awesome
 */
export { awesomeInstant, awesome };

