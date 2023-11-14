
# DukDik - Utils

## Overview

DukDik is a lightweight utility library that provides helpful functions for common tasks. The library currently includes two main functions: `awesome` and `cn`.

## 1. Awesome Function

The `awesome` function is a versatile utility that simplifies error handling for both synchronous and asynchronous operations. It provides flexibility through customizable error handling and offers both asynchronous and synchronous variants.

### 1.1. Asynchronous Variant

The asynchronous variant, `awesome.async`, takes an asynchronous function and optional custom options. It executes the provided function, returning a Promise that resolves to an `AwesomeResult` object containing the operation's data and any potential errors.

**Example usage:**

```javascript
const result = await awesome.async(async () => {
  // Your asynchronous operation here
  return someAsyncData;
});
```

### 1.2. Synchronous Variant

The synchronous variant, `awesome.sync`, functions similarly to its asynchronous counterpart but works with synchronous operations. It takes a synchronous function and optional custom options, returning an `AwesomeResult` object with the operation's data and potential errors.

**Example usage:**

```javascript
const result = awesome.sync(() => {
  // Your synchronous operation here
  return someSyncData;
});
```

### 1.3. Custom Error Handling

The `AwesomeOptions` parameter allows you to specify a custom error handling function (`errorHandler`). This function will be invoked in case of an error, giving you the ability to tailor error messages or perform specific actions.

**Example:**

**javascript**

```javascript
const customErrorHandler = (err) => {
  // Your custom error handling logic here
  return new Error(`Customized Error: ${err.message}`);
};

const result = awesome.sync(() => someSyncOperation(), {
  errorHandler: customErrorHandler,
});
```

**typescript**

```typescript
const customErrorHandler: ErrorHandlerOption = (err) => {
  // Your custom error handling logic here
  return new Error(`Customized Error: ${err.message}`);
};

const result = awesome.sync(() => someSyncOperation(), {
  errorHandler: customErrorHandler,
});
```

### 1.4. Instantiating Awesome

To quickly create an instance of the Awesome library with optional default options, you can use the `awesomeInstant` function:

**javascript**

```javascript
const defaultOptions = { 
  errorHandler: customErrorHandler
};
const myAwesome = awesomeInstant(defaultOptions);

// Now you can use myAwesome.async and myAwesome.sync with the specified default options.
```

**typescript**

```typescript
const defaultOptions: AwesomeOptions = { 
  errorHandler: customErrorHandler
};
const myAwesome = awesomeInstant(defaultOptions);

// Now you can use myAwesome.async and myAwesome.sync with the specified default options.
```

## 2. cn Function

The `cn` function is designed for working with Tailwind CSS classes, simplifying the creation of class strings, especially in React applications. It combines the `twMerge` and `clxs` functions, providing an easy way to handle dynamic class assignment.

**Example usage:**

```javascript
const classes = cn("bg-blue-500", { "text-white": true }, "p-4");
// Result: 'bg-blue-500 text-white p-4'
```

In this example, the `cn` function efficiently merges provided classes, handling conditional classes and dynamic assignments. This makes it particularly useful for building responsive and interactive user interfaces.

## Installation

To use DukDik in your project, you can install it via npm:

```bash
npm i @dookdiks/utils
```

Feel free to explore and integrate DukDik into your projects to simplify common tasks and enhance your codebase. If you encounter any issues or have suggestions for improvement, please don't hesitate to create an issue on our GitHub repository.

## License

DukDik is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
