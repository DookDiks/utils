type AwesomeOptions = {
  customError?: (err: Error) => Error;
};

type AwesomeSuccess<T> = { data: T; error: null };
type AwesomeError<T = Error> = { data: null; error: T };
type ReturnAsyncAwesome<T> = Promise<AwesomeSuccess<T> | AwesomeError>
type ReturnAwesome<T> = AwesomeSuccess<T> | AwesomeError