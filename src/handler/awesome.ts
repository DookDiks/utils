/**
 * Asynchronously handles a function that returns a Promise.
 *
 * @template T - The type of data returned by the Promise.
 * @param {() => Promise<T>} func - The asynchronous function to be handled.
 * @param {AwesomeOptions} [options] - Options for handling the function.
 * @returns {ReturnAsyncAwesome<T>} - An object containing either the successful data or an error.
 */
async function asyncHandler<T>(func: () => Promise<T>, options?: AwesomeOptions): ReturnAsyncAwesome<T> {
  let success: AwesomeSuccess<T>;
  let error: AwesomeError;

  try {
    success = { data: await func(), error: null };
    return success;
  } catch (err) {
    error = { data: null, error: options?.customError ? options.customError(err as Error) : err as Error };
    return error;
  }
}

/**
 * Handles a synchronous function.
 *
 * @template T - The type of data returned by the function.
 * @param {() => T} func - The synchronous function to be handled.
 * @param {AwesomeOptions} [options] - Options for handling the function.
 * @returns {ReturnAwesome<T>} - An object containing either the successful data or an error.
 */
function functionHandler<T>(func: () => T, options?: AwesomeOptions): ReturnAwesome<T> {
  let success: AwesomeSuccess<T>;
  let error: AwesomeError;

  try {
    success = { data: func(), error: null };
    return success;
  } catch (err) {
    error = { data: null, error: options?.customError ? options.customError(err as Error) : err as Error };
    return error;
  }
}

/**
 * Object containing both asynchronous and synchronous function handlers.
 *
 * @type {{ async: asyncHandler, handler: functionHandler }}
 */
export const awesome = { async: asyncHandler, handler: functionHandler };