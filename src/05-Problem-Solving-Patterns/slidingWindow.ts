// SLIDING WINDOW : This pattern involves creating a window which can either be an array or number from one position to another Depending on a certain condition, the window either increases or closes (and a new window is created) Very useful for keeping track of a subset of data in an array/string etc

//  Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17 //17
// maxSubarraySum([4, 2, 1, 6], 1); // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
// maxSubarraySum([], 4); // null

const maxSubarraySum = (
  input: number[],
  windowLength: number
): number | null => {
  let maxSum = 0;
  let tempSum = 0;

  if (input.length === 0 || windowLength === 0 || windowLength > input.length) {
    return null;
  }
  let pointer = windowLength;

  for (let i = 0; i < windowLength; i++) {
    maxSum += input[i];
  }

  tempSum = maxSum;

  for (pointer; pointer < input.length; pointer++) {
    tempSum = tempSum + input[pointer] - input[pointer - windowLength];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);

interface MaxSubArraySumTestCases {
  input: number[];
  expected: number | null;
  window: number;
}

// ✅ Test cases
const maxSubArraySumTestCases: MaxSubArraySumTestCases[] = [
  // ✅ Normal cases
  { input: [1, 2, 5, 2, 8, 1, 5], window: 2, expected: 10 },
  { input: [1, 2, 5, 2, 8, 1, 5], window: 4, expected: 17 },
  { input: [4, 2, 1, 6], window: 1, expected: 6 },
  { input: [4, 2, 1, 6, 2], window: 4, expected: 13 },

  // ✅ Edge cases
  { input: [], window: 4, expected: null }, // empty array
  { input: [2, 3], window: 3, expected: null }, // window larger than array
  { input: [5], window: 1, expected: 5 }, // single element window
  { input: [5], window: 2, expected: null }, // window too big for single element
  { input: [1, 2, 3, 4], window: 0, expected: null }, // invalid window size

  // ✅ Tricky cases
  { input: [-1, -2, -3, -4], window: 2, expected: -3 }, // all negatives
  { input: [100, 200, 300, 400], window: 2, expected: 700 }, // large numbers
  { input: [1, 1, 1, 1, 1, 1, 1], window: 3, expected: 3 }, // repeated elements
  { input: [2, -1, 2, 3, 4, -5], window: 2, expected: 7 }, // mix of positives/negatives
];

// ✅ Run tests
const maxSubarraySumResults = maxSubArraySumTestCases.map(
  ({ input, window, expected }) => {
    const result = maxSubarraySum(input, window);
    const pass = result === expected ? "✅ PASS" : "❌ FAIL";

    return {
      Input: JSON.stringify(input),
      Window: window,
      Output: result,
      Expected: expected,
      Result: pass,
    };
  }
);

// ✅ Display results
console.table(maxSubarraySumResults);
