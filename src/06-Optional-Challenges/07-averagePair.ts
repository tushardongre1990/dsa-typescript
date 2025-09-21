/**
 * Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
 */

// [1, 2, 4, 8, 16], 9
const averagePair = (input: number[], target: number): boolean => {
  let left = 0;
  let right = input.length - 1;

  while (left < right) {
    let avg = (input[left] + input[right]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
};

// ✅ Define interface for averagePair test cases
interface AveragePairTestCase {
  input: number[];
  target: number;
  expected: boolean;
}

// ✅ Test cases
const averagePairTestCases: AveragePairTestCase[] = [
  // Normal cases
  { input: [1, 2, 3], target: 2.5, expected: true }, // (2 + 3) / 2 = 2.5
  { input: [1, 3, 3, 5, 6, 7, 10, 12, 19], target: 8, expected: true }, // (6 + 10) / 2 = 8
  { input: [-1, 0, 3, 4, 5, 6], target: 4.1, expected: false }, // no pair averages 4.1

  // Edge cases
  { input: [], target: 4, expected: false }, // empty array
  { input: [5], target: 5, expected: false }, // single element
  { input: [1, 2], target: 1.5, expected: true }, // exact average of two elements
  { input: [1, 2], target: 3, expected: false }, // average doesn’t exist

  // Tricky cases
  { input: [1, 2, 3, 4, 5], target: 3, expected: true }, // multiple possible pairs, (1+5)/2=3, (2+4)/2=3
  { input: [-10, -5, 0, 5, 10], target: 0, expected: true }, // (-10+10)/2=0
  { input: [-5, -3, -1], target: -2, expected: true }, // (-3 + -1)/2 = -2
  { input: [1, 1, 1, 1], target: 1, expected: true }, // all same numbers, any pair = 1
  { input: [1, 2, 4, 8, 16], target: 7.5, expected: false }, // no pair averages 7.5
  { input: [1, 2, 4, 8, 16], target: 9, expected: true },
];

// ✅ Run tests
const averagePairResults = averagePairTestCases.map(
  ({ input, target, expected }) => {
    const output = averagePair(input, target);
    const pass = output === expected ? "✅ PASS" : "❌ FAIL";

    return {
      Input: input,
      Target: target,
      Output: output,
      Expected: expected,
      Result: pass,
    };
  }
);

// ✅ Display results
console.table(averagePairResults);

console.log(averagePair([1, 2, 4, 8, 16], 9));
