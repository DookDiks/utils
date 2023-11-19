import { ErrorType } from "@dookdiks/error";
import { awesomeInstant } from "@dookdils/utils"

describe('Awesome Module Tests', () => {
  // Mock data for testing
  const mockData = 'Mock Data';

  // Mock asynchronous function
  const asyncMockFunction = async () => {
    return mockData;
  };

  // Mock synchronous function
  const syncMockFunction = () => {
    return mockData;
  };

  // Mock asynchronous function that throws an error
  const asyncErrorMockFunction = async () => {
    throw new Error('Async Error');
  };

  // Mock synchronous function that throws an error
  const syncErrorMockFunction = () => {
    throw new Error('Sync Error');
  };

  // Mock errorHandler for testing
  const mockErrorHandler = (err: Error): ErrorType => {
    return {
      message: err.message,
    };
  };

  it('should handle successful asynchronous execution', async () => {
    const awesome = awesomeInstant();
    const result = await awesome.async(asyncMockFunction);

    expect(result).toEqual({
      data: mockData,
      error: null,
    });
  });

  it('should handle successful synchronous execution', () => {
    const awesome = awesomeInstant();
    const result = awesome.sync(syncMockFunction);

    expect(result).toEqual({
      data: mockData,
      error: null,
    });
  });

  it('should handle asynchronous execution with error and custom errorHandler', async () => {
    const awesome = awesomeInstant({ errorHandler: mockErrorHandler });
    const result = await awesome.async(asyncErrorMockFunction);

    expect(result).toEqual({
      data: null,
      error: {
        message: 'Async Error',
      },
    });
  });

  it('should handle synchronous execution with error and custom errorHandler', () => {
    const awesome = awesomeInstant({ errorHandler: mockErrorHandler });
    const result = awesome.sync(syncErrorMockFunction);

    expect(result).toEqual({
      data: null,
      error: {
        message: 'Sync Error',
      },
    });
  });
});
