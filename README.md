
# DukDik - Utils

## Overview

DukDik is a lightweight utility library that provides helpful functions for common tasks. The library currently includes two main functions: `awesome` and `cn`.

## Wallaby.js

[![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=for-the-badge&logo=github)](https://wallabyjs.com/oss/)

This repository contributors are welcome to use
[Wallaby.js OSS License](https://wallabyjs.com/oss/) to get
test results immediately as you type, and see the results in
your editor right next to your code.

## Installation

To use DukDik in your project, you can install it via npm:

```bash
npm i @dookdiks/utils
```

Feel free to explore and integrate DukDik into your projects to simplify common tasks and enhance your codebase. If you encounter any issues or have suggestions for improvement, please don't hesitate to create an issue on our GitHub repository.

## 1. Awesome Function

The awesome module is designed to facilitate error handling in both synchronous and asynchronous operations. It exports functions for both synchronous (awesome.sync) and asynchronous (awesome.async) operations, allowing you to handle errors gracefully. Additionally, it provides a default instance (awesome) for ease of use.

Import the awesome module and use its functions as follows:

```typescript
import { awesome } from "@dookdiks/utils";

// Synchronous example
const { data, error } = awesome.sync(() => {
  // Your synchronous logic here
  return someData;
});

// Asynchronous example
const { data, error } = await awesome.async(async () => {
  // Your asynchronous logic here
  return someAsyncData;
});
```

## 2. cn Function

The `cn` function is designed for working with Tailwind CSS classes, simplifying the creation of class strings, especially in React applications. It combines the `twMerge` and `clxs` functions, providing an easy way to handle dynamic class assignment.

**Example usage:**

```javascript
const classes = cn("bg-blue-500", { "text-white": true }, "p-4");
// Result: 'bg-blue-500 text-white p-4'
```

In this example, the `cn` function efficiently merges provided classes, handling conditional classes and dynamic assignments. This makes it particularly useful for building responsive and interactive user interfaces.

## License

DukDik is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
