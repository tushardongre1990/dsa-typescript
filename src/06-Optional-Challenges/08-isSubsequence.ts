/**
 * Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
 */

const isSubsequence = (subsequence: string, sequence: string): boolean => {
  let subPointer = 0;
  let seqPointer = 0;

  if (subsequence.length === 0) {
    return true;
  }

  while (
    subPointer <= subsequence.length - 1 &&
    seqPointer <= sequence.length - 1
  ) {
    if (subsequence[subPointer] === sequence[seqPointer]) {
      subPointer++;
    }
    seqPointer++;

    if (subPointer === subsequence.length) {
      return true;
    }
  }
  return false;
};

// ✅ Define interface for isSubsequence test cases
interface IsSubsequenceTestCase {
  subsequence: string;
  sequence: string;
  expected: boolean;
}

// ✅ Test cases
const isSubsequenceTestCases: IsSubsequenceTestCase[] = [
  // Normal cases
  { subsequence: "hello", sequence: "hello world", expected: true }, // full word in bigger string
  { subsequence: "sing", sequence: "sting", expected: true }, // characters in order
  { subsequence: "abc", sequence: "abracadabra", expected: true }, // appears in order
  { subsequence: "abc", sequence: "acb", expected: false }, // order matters

  // Edge cases
  { subsequence: "", sequence: "anything", expected: true }, // empty string is always subsequence
  { subsequence: "abc", sequence: "", expected: false }, // non-empty can't be in empty
  { subsequence: "", sequence: "", expected: true }, // both empty → true
  { subsequence: "a", sequence: "a", expected: true }, // single char match
  { subsequence: "a", sequence: "b", expected: false }, // single char no match

  // Tricky cases
  { subsequence: "aaaa", sequence: "aaabaa", expected: true }, // repeated characters still in order
  { subsequence: "ace", sequence: "abcde", expected: true }, // skip characters
  { subsequence: "aec", sequence: "abcde", expected: false }, // wrong order
  { subsequence: "longword", sequence: "short", expected: false }, // subsequence longer than sequence
  { subsequence: "xyz", sequence: "axybzc", expected: true }, // scattered but in order
];

// ✅ Run tests
const isSubsequenceResults = isSubsequenceTestCases.map(
  ({ subsequence, sequence, expected }) => {
    const output = isSubsequence(subsequence, sequence);
    const pass = output === expected ? "✅ PASS" : "❌ FAIL";

    return {
      Subsequence: subsequence,
      Sequence: sequence,
      Output: output,
      Expected: expected,
      Result: pass,
    };
  }
);

// ✅ Display results
console.table(isSubsequenceResults);
