type AwesomeOptions = {
  customError?: (err: Error) => Error;
};

type AwesomeAsync = <T>(
  func: () => Promise<T>,
  options?: AwesomeOptions
) => Promise<AwesomeResult<T>>;

type AwesomeSync = <T>(
  func: () => T,
  options?: AwesomeOptions
) => AwesomeResult<T>

type AwesomeResult<T> = { data: T | null; error: Error | null };

type AwesomeFunction = {
  async: AwesomeAsync
  sync: AwesomeSync
};

export const awesomeAsync: AwesomeAsync = async (func, options) => {
  try {
    const data = await func();
    return { data, error: null };
  } catch (err) {
    if (err instanceof Error) {
      return {
        data: null,
        error: options?.customError ? options.customError(err) : err,
      };
    }

    return {
      data: null,
      error: new Error("internal error"),
    };
  }
};

export const awesomeSync: AwesomeSync = (func, options) => {
  try {
    const data = func();
    return { data, error: null };
  } catch (err) {
    if (err instanceof Error) {
      return {
        data: null,
        error: options?.customError ? options.customError(err) : err,
      };
    }

    return {
      data: null,
      error: new Error("internal error"),
    };
  }
};

export const awesome: AwesomeFunction = {
  async: awesomeAsync,
  sync: awesomeSync
}

