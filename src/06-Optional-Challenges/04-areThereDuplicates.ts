// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:
// areThereDuplicates(1, 2, 3); // false
// areThereDuplicates(1, 2, 2); // true
// areThereDuplicates("a", "b", "c", "a"); // true

const areThereDuplicates = (...args: (number | string)[]): boolean | null => {
  const frequency: Record<number | string, number> = {};

  if (args.length === 0) {
    console.log("No arguments found.");
    return null;
  }

  for (let value of args) {
    if (!frequency[value]) {
      frequency[value] = (frequency[value] || 0) + 1;
    } else {
      return true;
    }
  }

  return false;
};

// ✅ Define interface
interface AreThereDuplicatesTestCase {
  args: (number | string)[];
  expected: boolean | null;
}

// ✅ Test cases
const areThereDuplicatesTestCases: AreThereDuplicatesTestCase[] = [
  // Normal cases
  { args: [1, 2, 3], expected: false }, // unique numbers
  { args: [1, 2, 2], expected: true }, // duplicate numbers
  { args: ["a", "b", "c", "a"], expected: true }, // duplicate strings
  { args: ["x", "y", "z"], expected: false }, // unique strings
  { args: [10, 20, 30, 40, 10], expected: true }, // duplicate at beginning/end

  // Edge cases
  { args: [], expected: null }, // no arguments
  { args: [42], expected: false }, // single element
  { args: ["a"], expected: false }, // single string
  { args: ["1", 1], expected: false }, // string vs number (different keys)
  { args: [0, 0], expected: true }, // zero duplication

  // Tricky cases
  { args: [NaN, NaN], expected: true }, // NaN duplication (works in Record)
  { args: ["A", "a"], expected: false }, // case-sensitive strings
  { args: ["hello", "world", "hello"], expected: true }, // long string duplicate
  { args: [999999, 888888, 777777], expected: false }, // large unique numbers
  { args: ["", ""], expected: true }, // empty string duplication
];

// ✅ Run tests
const areThereDuplicatesResults = areThereDuplicatesTestCases.map(
  ({ args, expected }) => {
    const result = areThereDuplicates(...args);
    const pass = result === expected ? "✅ PASS" : "❌ FAIL";

    return {
      Arguments: JSON.stringify(args),
      Output: result,
      Expected: expected,
      Result: pass,
    };
  }
);

// ✅ Display results
console.table(areThereDuplicatesResults);
