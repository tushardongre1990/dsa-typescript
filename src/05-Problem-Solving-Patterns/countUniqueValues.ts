// Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
// countUniqueValues([]); // 0
// countUniqueValues([-2, -1, -1, 0, 1]); // 4

const countUniqueValues = (input: number[]): number => {
  let left = 0;
  let right = 1;

  if (input.length === 0) {
    console.log("Empty array");
    return 0;
  }

  let uniqueCount = 1;

  while (left < right && right <= input.length - 1) {
    if (input[left] === input[right]) {
      right++;
    } else {
      uniqueCount++;
      left = right;
      right++;
    }
  }

  return uniqueCount;
};

interface UniqueCountTestCase {
  input: number[];
  expected: number;
}
// ✅ Test cases (in same style as zeroSumTestCases)
const uniqueCountTestCases: UniqueCountTestCase[] = [
  // ✅ Normal cases
  { input: [1, 1, 1, 1, 1, 2], expected: 2 },
  { input: [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13], expected: 7 },
  { input: [-2, -1, -1, 0, 1], expected: 4 },

  // ✅ Edge cases
  { input: [], expected: 0 }, // empty array
  { input: [1], expected: 1 }, // single element
  { input: [1, 1], expected: 1 }, // two duplicates
  { input: [1, 2], expected: 2 }, // two unique elements
  { input: [-5, -5, -5, -5], expected: 1 }, // all duplicates
  { input: [-10, -5, 0, 5, 10], expected: 5 }, // strictly increasing unique values
];

// ✅ Run tests
const results = uniqueCountTestCases.map(({ input, expected }) => {
  const result = countUniqueValues(input);
  const pass = result === expected ? "✅ PASS" : "❌ FAIL";

  return {
    Input: JSON.stringify(input),
    Output: result,
    Expected: expected,
    Result: pass,
  };
});

// console.table(results);

// Colt's Approach
function countUniqueValues1(arr: number[]) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]; // <-- overwrites the array
    }
  }
  return i + 1;
}
