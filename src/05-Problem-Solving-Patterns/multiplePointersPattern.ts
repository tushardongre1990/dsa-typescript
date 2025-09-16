/**
 * MULTIPLE POINTERS
 * Creating pointers or values that correspond to an index or position and move towards the beginning,end or middle based on a certain condition.
 * Very efficient for solving problems with minimal space complexity as well.
 *
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 *
 *
 */

import { table } from "console";

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

const sumZero = (input: number[]): number[] | undefined => {
  let left = 0;
  let right = input.length - 1;

  while (left < right) {
    let sum = input[left] + input[right];
    if (input[left] + input[right] === 0) {
      return [input[left], input[right]];
    }
    if (sum < 0) {
      left += 1;
    }
    if (sum > 0) {
      right -= 1;
    }
  }
  return undefined;
};

interface ZeroSumTestCase {
  input: number[];
  expected: [number, number] | undefined;
}

const zeroSumTestCases: ZeroSumTestCase[] = [
  // ✅ Normal cases
  { input: [-3, -2, -1, 0, 1, 2, 3], expected: [-3, 3] },
  { input: [-2, 0, 1, 3], expected: undefined },
  { input: [1, 2, 3], expected: undefined },

  // ✅ Edge cases
  { input: [], expected: undefined }, // empty array
  { input: [0], expected: undefined }, // single element
  { input: [0, 0], expected: [0, 0] }, // two zeros
  { input: [-1, 1], expected: [-1, 1] }, // smallest valid pair
  { input: [-5, -4, -2, 0, 2, 4, 5], expected: [-5, 5] }, // multiple possible pairs, should return first
  { input: [-10, -5, -2, -1, 0, 1, 2, 3], expected: [-2, 2] }, // valid pair in the middle
  { input: [-10, -9, -8, -1], expected: undefined }, // all negative
  { input: [1, 2, 3, 4, 5], expected: undefined }, // all positive

  // ✅ Special tricky cases
  { input: [-4, -4, 0, 4, 4], expected: [-4, 4] }, // duplicates around zero
  { input: [-1000000, -500, 0, 500, 1000000], expected: [-1000000, 1000000] }, // large numbers
  { input: [-2, -1, 1, 2], expected: [-2, 2] }, // two possible pairs, returns first
];

const results = zeroSumTestCases.map(({ input, expected }) => {
  const result = sumZero(input);
  const pass =
    JSON.stringify(result) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL";

  return {
    Input: JSON.stringify(input),
    Output: JSON.stringify(result),
    Expected: JSON.stringify(expected),
    Result: pass,
  };
});

console.table(results);
