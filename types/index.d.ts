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

type AwesomeInstant = (options?: AwesomeOptions) => AwesomeFunction