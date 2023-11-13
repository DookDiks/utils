# DukDik - Utils

## Overview

DukDik is a lightweight utility library that provides helpful functions for common tasks. The library currently includes two main functions: `awesome` and `cn`.

### 1. awesome

The `awesome` function is designed to simplify error handling by encapsulating code within a try-catch block and extracting the return data and error (if any). This can streamline error management and enhance code readability. Here's an example of how to use it:

```ts
const { data, error } = await awesome.async(() => {
  // Your code here
  return someData;
});

const { data, error } = awesome.handler(() => {
  // Your code here
  return someData;
});
```

In this example, the `awesome` function will execute the provided code within the try block. If an error occurs, it will be caught, and both the data and the error will be returned, making it easy to handle both success and failure scenarios.

### 2. cn

The `cn` function is tailored for working with Tailwind CSS classes. It combines the `twMerge` and `clxs` functions to facilitate the creation of class strings. This is particularly useful in React applications where dynamic class assignment is common. Here's an example:

```javascript
const classes = cn('bg-blue-500', { 'text-white': true }, 'p-4');
// Result: 'bg-blue-500 text-white p-4'
```

In this example, the `cn` function merges the provided classes, ensuring proper handling of conditional classes and dynamic class assignment.

## Installation

To use DukDik in your project, you can install it via npm:

```bash
npm i @svacmai/dukdik
```

## Usage

After installation, you can import and use the functions in your JavaScript or TypeScript code:

```ts
import { awesome, cn } from "@svacmai/dukdik"

// Use the awesome function
const { data, error } = awesome(() => {
  // Your code here
  return someData;
});

// Use the cn function
const classes = cn('bg-red-500', { 'text-black': true }, 'p-2');
```



Feel free to explore and integrate DukDik into your projects to simplify common tasks and enhance your codebase. If you encounter any issues or have suggestions for improvement, please don't hesitate to create an issue on our GitHub repository.

## License

DukDik is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.