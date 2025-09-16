"use strict";

/**
 * Binary search algorithm for finding an element in a sorted array
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param inputArray - Sorted array of numbers to search in
 * @param target - Number to search for
 * @returns Index of the target element, or -1 if not found
 */
const binarySearch = (inputArray: number[], target: number): number => {
  // Handle edge case: empty array
  if (inputArray.length === 0) return -1;

  let left = 0;
  let right = inputArray.length - 1;

  while (left <= right) {
    // Alternative: Math.floor(left + (right - left) / 2) to prevent overflow in other languages
    const middle = Math.floor((left + right) / 2);

    if (inputArray[middle] === target) {
      return middle;
    }

    if (inputArray[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
};

// Test cases
const testCases = [
  {
    array: [11, 22, 33, 44, 55, 66, 77, 88, 99],
    target: 99,
    expected: 8,
    description: "Find last element",
  },
  {
    array: [11, 22, 33, 44, 55, 66, 77, 88, 99],
    target: 11,
    expected: 0,
    description: "Find first element",
  },
  {
    array: [11, 22, 33, 44, 55, 66, 77, 88, 99],
    target: 44,
    expected: 3,
    description: "Find middle element",
  },
  {
    array: [11, 22, 33, 44, 55, 66, 77, 88, 99],
    target: 100,
    expected: -1,
    description: "Element not in array (too large)",
  },
  {
    array: [11, 22, 33, 44, 55, 66, 77, 88, 99],
    target: 5,
    expected: -1,
    description: "Element not in array (too small)",
  },
  {
    array: [],
    target: 5,
    expected: -1,
    description: "Empty array",
  },
  {
    array: [42],
    target: 42,
    expected: 0,
    description: "Single element array (found)",
  },
  {
    array: [42],
    target: 24,
    expected: -1,
    description: "Single element array (not found)",
  },
];

// Run tests
console.log("Running Binary Search Tests:");
console.log("=".repeat(40));

testCases.forEach((testCase, index) => {
  const result = binarySearch(testCase.array, testCase.target);
  const passed = result === testCase.expected;

  console.log(`Test ${index + 1}: ${testCase.description}`);
  console.log(`  Array: [${testCase.array.join(", ")}]`);
  console.log(`  Target: ${testCase.target}`);
  console.log(`  Expected: ${testCase.expected}, Got: ${result}`);
  console.log(`  Status: ${passed ? "✅ PASSED" : "❌ FAILED"}`);
  console.log();
});

// Bonus: Generic version that works with any comparable type
const binarySearchGeneric = <T>(
  inputArray: T[],
  target: T,
  compareFn?: (a: T, b: T) => number
): number => {
  if (inputArray.length === 0) return -1;

  // Default comparison function for numbers and strings
  const compare =
    compareFn ||
    ((a: T, b: T) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });

  let left = 0;
  let right = inputArray.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const comparison = compare(inputArray[middle], target);

    if (comparison === 0) {
      return middle;
    }

    if (comparison < 0) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
};

// Example with string array
const stringArray = ["apple", "banana", "cherry", "date", "elderberry"];
const stringResult = binarySearchGeneric(stringArray, "cherry");
console.log(`Generic search result for "cherry": ${stringResult}`);
