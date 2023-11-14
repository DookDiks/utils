const awesomeInstant: AwesomeInstant = (defaultOptions) => {
  const awesomeAsync: AwesomeAsync = async (func, options) => {
    const option = options || defaultOptions
    try {
      const data = await func();
      return { data, error: null };
    } catch (err) {
      if (err instanceof Error) {
        return {
          data: null,
          error: option?.customError ? option.customError(err) : err,
        };
      }

      return {
        data: null,
        error: new Error("internal error"),
      };
    }
  };

  const awesomeSync: AwesomeSync = (func, options) => {
    const option = options || defaultOptions
    try {
      const data = func();
      return { data, error: null };
    } catch (err) {
      if (err instanceof Error) {
        return {
          data: null,
          error: option?.customError ? option.customError(err) : err,
        };
      }

      return {
        data: null,
        error: new Error("internal error"),
      };
    }
  };
  const awesome: AwesomeFunction = {
    async: awesomeAsync,
    sync: awesomeSync
  }
  return awesome
}

const awesome = awesomeInstant()

export { awesomeInstant, awesome }