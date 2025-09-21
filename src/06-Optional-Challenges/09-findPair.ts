/**
 * Frequency Counter / Multiple Pointer - findPair
Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

findPair([6,1,4,10,2,4], 2) // true
findPair([8,6,2,4,1,0,2,5,13],1) // true
findPair([4,-2,3,10],-6) // true
findPair([6,1,4,10,2,4], 22) // false
findPair([], 0) // false
findPair([5,5], 0) // true
findPair([-4,4], -8) // true
findPair([-4,4], 8) // true
findPair([1,3,4,6],-2) // true
findPair([0,1,3,4,6],-2) // true
findPair([1,2,3], 0) // false
Part 1 - solve this with the following requirements:

Time Complexity Requirement - O(n)

Space Complexity Requirement - O(n)

Part 2 - solve this with the following requirements:

Time Complexity Requirement - O(n log n)

Space Complexity Requirement - O(1)
 */

const findPair = (numbers: number[], diff: number): boolean => {
  const frequency: Record<number, number> = {};

  if (!numbers.length) {
    return false;
  }

  for (const number of numbers) {
    frequency[number] = (frequency[number] || 0) + 1;
  }

  for (const number of numbers) {
    if (diff === 0 && frequency[number] > 1) {
      return true;
    }
    if (diff !== 0 && (frequency[number + diff] || frequency[number - diff])) {
      return true;
    }
  }

  console.log(frequency);

  return false;
};

/**
 * Part 2 - solve this with the following requirements:
 * Time Complexity Requirement - O(n log n)
 * Space Complexity Requirement - O(1)
 */

const findPairSorted = (numbers: number[], diff: number): boolean => {
  numbers.sort((a, b) => a - b);

  let left = 0;
  let right = 1;

  while (right < numbers.length) {
    const currentDiff = numbers[right] - numbers[left];

    if (currentDiff === diff && left !== right) return true;
    if (currentDiff < diff) right++;
    else left++;
  }

  return false;
};

// ✅ Define interface for test cases
interface FindPairTestCase {
  numbers: number[];
  diff: number;
  expected: boolean;
}

// ✅ Test cases
const findPairTestCases: FindPairTestCase[] = [
  // Normal cases
  { numbers: [6, 1, 4, 10, 2, 4], diff: 2, expected: true },
  { numbers: [8, 6, 2, 4, 1, 0, 2, 5, 13], diff: 1, expected: true },
  { numbers: [4, -2, 3, 10], diff: -6, expected: true },
  { numbers: [6, 1, 4, 10, 2, 4], diff: 22, expected: false },

  // Edge cases
  { numbers: [], diff: 0, expected: false }, // empty array
  { numbers: [5, 5], diff: 0, expected: true }, // same elements with diff 0
  { numbers: [-4, 4], diff: -8, expected: true }, // negative difference
  { numbers: [-4, 4], diff: 8, expected: true }, // positive difference equal to absolute of negative diff
  { numbers: [1, 3, 4, 6], diff: -2, expected: true },
  { numbers: [0, 1, 3, 4, 6], diff: -2, expected: true },
  { numbers: [1, 2, 3], diff: 0, expected: false }, // diff 0 but no duplicates

  // Additional cases
  { numbers: [1, 2, 3, 5], diff: 4, expected: true }, // difference between first and last
  { numbers: [1, 2, 3, 5], diff: 6, expected: false }, // difference not present
  { numbers: [0], diff: 0, expected: false }, // single element
  { numbers: [100, -50, 50], diff: 150, expected: true }, // large difference
];

// ✅ Run tests
const findPairResult = findPairTestCases.map(({ numbers, diff, expected }) => {
  const output = findPairSorted(numbers, diff);
  const pass = output === expected ? "✅ PASS" : "❌ FAIL";

  return {
    Numbers: numbers,
    Diff: diff,
    Output: output,
    Expected: expected,
    Result: pass,
  };
});

// Display results
console.table(findPairResult);
