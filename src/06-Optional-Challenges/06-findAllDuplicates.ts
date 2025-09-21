/**
 *Frequency Counter - findAllDuplicates
Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
Time Complexity - O(n)
 */

const findAllDuplicates = (input: number[]): number[] => {
  const frequency: Record<number, number> = {};
  const duplicates: number[] = [];

  for (const num of input) {
    if (!frequency[num]) {
      frequency[num] = (frequency[num] || 0) + 1;
    } else {
      duplicates.push(num);
    }
  }

  console.log(frequency);
  console.log(duplicates);

  return duplicates;
};
// ✅ Define interface for findAllDuplicates test cases
interface FindAllDuplicatesTestCase {
  input: number[];
  expected: number[];
}

// ✅ Test cases
const findAllDuplicatesTestCases: FindAllDuplicatesTestCase[] = [
  // Normal cases
  { input: [4, 3, 2, 7, 8, 2, 3, 1], expected: [2, 3] },
  { input: [4, 3, 2, 1, 0], expected: [] },
  { input: [4, 3, 2, 1, 0, 1, 2, 3], expected: [1, 2, 3] },

  // Edge cases
  { input: [], expected: [] }, // empty array
  { input: [1], expected: [] }, // single element
  { input: [1, 1], expected: [1] }, // two same elements
  { input: [1, 1, 1], expected: [1, 1] }, // multiple duplicates of same number
  { input: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] }, // all elements duplicated

  // Tricky cases
  { input: [1, 2, 2, 2, 2], expected: [2, 2, 2] }, // repeated multiple times
  { input: [1000000, 1000000, 999999], expected: [1000000] }, // large numbers
  { input: [1, 2, 2, 3, 3, 4], expected: [2, 3] }, // multiple duplicates of different numbers
];

// ✅ Run tests
const findAllDuplicatesResults = findAllDuplicatesTestCases.map(
  ({ input, expected }) => {
    const output = findAllDuplicates(input);
    const pass =
      JSON.stringify(output) === JSON.stringify(expected)
        ? "✅ PASS"
        : "❌ FAIL";

    return {
      Input: input,
      Output: output,
      Expected: expected,
      Result: pass,
    };
  }
);

// ✅ Display results
console.table(findAllDuplicatesResults);
