// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// Space and Time : O(n)
const validPalindrome = (input: string): boolean => {
  //   const removedSpace = input.toLowerCase().split(" ").join("");
  const clean = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(clean);

  const reversedString = clean.split("").reverse().join("");

  return clean === reversedString;
};

// Using 2 pointer : Time => o(n) , Space => o(1)
const isPalindrome = (string: string): boolean => {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    // skip non-alphanumeric from left
    while (left < right && !isAlphaNumeric(string[left])) {
      left++;
    }
    // skip non-alphanumeric from right
    while (left < right && !isAlphaNumeric(string[right])) {
      right--;
    }

    if (string[left].toLowerCase() !== string[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const isAlphaNumeric = (char: string): boolean => {
  const code = char.charCodeAt(0);

  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122) // a-z
  );
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
