/**
 * Frequency Counter - sameFrequency
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities: Time: O(N)
 */

const sameFrequency = (num1: number, num2: number): boolean => {
  const frequencyNum1 = countDigits(num1);
  const frequencyNum2 = countDigits(num2);

  const num1Length = Object.keys(frequencyNum1).length;
  const num2Length = Object.keys(frequencyNum2).length;

  if (num1Length !== num2Length) {
    console.log("frequency mismatch");
    return false;
  }

  for (let key in frequencyNum2) {
    if (frequencyNum1[key] !== frequencyNum2[key]) {
      return false;
    }
  }

  console.table(frequencyNum1);
  console.table(frequencyNum2);

  return true;
};

const countDigits = (num: number): Record<string, number> => {
  const counts: Record<string, number> = {};

  num
    .toString()
    .split("")
    .forEach((digit) => (counts[digit] = (counts[digit] || 0) + 1));
  return counts;
};

interface SameFrequencyTestCases {
  num1: number;
  num2: number;
  expected: boolean;
}

const sameFrequencyTestCases: SameFrequencyTestCases[] = [
  // ✅ Normal cases
  { num1: 182, num2: 281, expected: true }, // same digits, same frequency
  { num1: 34, num2: 14, expected: false }, // different digits
  { num1: 3589578, num2: 5879385, expected: true }, // larger numbers, same freq
  { num1: 22, num2: 222, expected: false }, // different count of same digit

  // ✅ Edge cases
  { num1: 0, num2: 0, expected: true }, // single digit, same
  { num1: 0, num2: 10, expected: false }, // leading zero difference
  { num1: 123456, num2: 654321, expected: true }, // all digits same
  { num1: 111, num2: 11, expected: false }, // frequency mismatch
  { num1: 1234, num2: 123, expected: false }, // frequency mismatch
  { num1: 9999, num2: 9999, expected: true }, // identical large repeated digits

  // ✅ Tricky cases
  { num1: 123, num2: 3210, expected: false }, // extra digit in one number
  { num1: 1010, num2: 1100, expected: true }, // zero handling
  { num1: 9876543210, num2: 1023456789, expected: true }, // all digits 0–9
];

const sameFrequencyResults = sameFrequencyTestCases.map(
  ({ num1, num2, expected }) => {
    const result = sameFrequency(num1, num2);
    const pass = result === expected ? "✅ PASS" : "❌ FAIL";

    return {
      Num1: num1,
      Num2: num2,
      Output: result,
      Expected: expected,
      Result: pass,
    };
  }
);

console.table(sameFrequencyResults);
