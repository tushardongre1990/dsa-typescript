/**
 * Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
 */

const constructNote = (message: string, letters: string): boolean => {
  const messageFrequency: Record<string, number> = {};
  const lettersFrequency: Record<string, number> = {};

  for (let value of message) {
    messageFrequency[value] = (messageFrequency[value] || 0) + 1;
  }

  for (let value of letters) {
    lettersFrequency[value] = (lettersFrequency[value] || 0) + 1;
  }

  console.log(messageFrequency);
  console.log(lettersFrequency);

  for (const key in messageFrequency) {
    if (!(lettersFrequency[key] >= messageFrequency[key])) {
      return false;
    }
  }
  return true;
};

// Above Implementation and Space Complexity of O(N+M)

// Optimize for Space complexity of O(N)

const constructNote1 = (message: string, letters: string): boolean => {
  const lettersFrequency: Record<string, number> = {};

  for (let value of letters) {
    lettersFrequency[value] = (lettersFrequency[value] || 0) + 1;
  }

  for (const char of message) {
    if (!lettersFrequency[char]) {
      return false;
    }
    lettersFrequency[char]--;
  }
  return true;
};

// ✅ Define interface for constructNote test cases
interface ConstructNoteTestCase {
  message: string;
  letters: string;
  expected: boolean;
}

// ✅ Test cases
const constructNoteTestCases: ConstructNoteTestCase[] = [
  // Normal cases
  { message: "aa", letters: "abc", expected: false }, // not enough 'a's
  { message: "abc", letters: "dcba", expected: true }, // letters sufficient
  { message: "aabbcc", letters: "bcabcaddff", expected: true }, // letters sufficient

  // Edge cases
  { message: "", letters: "abc", expected: true }, // empty message
  { message: "abc", letters: "", expected: false }, // empty letters
  { message: "", letters: "", expected: true }, // both empty

  // Tricky cases
  { message: "abc", letters: "aabbcc", expected: true }, // exact letters
  { message: "aaa", letters: "aaab", expected: true }, // exact count of letters
  { message: "aaa", letters: "aa", expected: false }, // insufficient letters
  { message: "a", letters: "A", expected: false }, // case-sensitive
  { message: "xyz", letters: "zyx", expected: true }, // shuffled letters
];

// ✅ Run tests
const constructNoteResults = constructNoteTestCases.map(
  ({ message, letters, expected }) => {
    const result = constructNote1(message, letters);
    const pass = result === expected ? "✅ PASS" : "❌ FAIL";

    return {
      Message: message,
      Letters: letters,
      Output: result,
      Expected: expected,
      Result: pass,
    };
  }
);

// ✅ Display results
console.table(constructNoteResults);
