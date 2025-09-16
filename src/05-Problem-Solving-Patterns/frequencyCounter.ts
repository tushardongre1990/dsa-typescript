/**
 * Write a function called same which accepts 2 arrays. The function should return true if every value in the array has its corresponding value squared in the 2nd array. The frequency of the values must be same.
 *
 * same([1,2,3],[4,1,9]) → true
 * same([1,2,3],[1,9]) → false
 * same([1,2,1],[4,4,1]) → false (must be same frequency)
 */

const same = (arr1: number[], arr2: number[]): boolean => {
  if (arr1.length !== arr2.length) {
    console.log("Arrays length doesn't match");

    return false;
  }

  if (!arr1.length || !arr2.length) {
    console.log("Empty arrays found");

    return true;
  }

  const frequency1: Record<number, number> = {};
  const frequency2: Record<number, number> = {};

  for (const ele of arr1) {
    frequency1[ele * ele] = (frequency1[ele * ele] || 0) + 1;
  }
  console.log(frequency1);

  for (const ele of arr2) {
    frequency2[ele] = (frequency2[ele] || 0) + 1;
  }
  console.log(frequency2);

  for (const key in frequency1) {
    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }
  return true;
};

// Alternative approach using Map for better type safety
const sameWithMap = (arr1: number[], arr2: number[]): boolean => {
  if (arr1.length !== arr2.length) return false;

  const frequency1 = new Map<number, number>();
  const frequency2 = new Map<number, number>();

  // Build frequency maps
  for (const num of arr1) {
    const squared = num * num;
    frequency1.set(squared, (frequency1.get(squared) || 0) + 1);
  }

  for (const num of arr2) {
    frequency2.set(num, (frequency2.get(num) || 0) + 1);
  }

  // Compare frequencies
  for (const [key, count] of frequency1) {
    if (frequency2.get(key) !== count) {
      return false;
    }
  }

  return true;
};

console.log(same([1], [])); // Should be false
console.log(same([], [1])); // Should be false
console.log(same([], [])); // Should be true
console.log(same([1, 2], [1, 4])); // Should be true

// // Test cases - Basic functionality
// console.log("=== Basic Cases ===");
// console.log(same([1, 2, 3], [4, 1, 9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false - different lengths
// console.log(same([1, 2, 1], [4, 4, 1])); // false - wrong frequency
// console.log(same([], [])); // true - empty arrays

// // Test cases - Additional edge cases
// console.log("\n=== Edge Cases ===");
// console.log(same([0], [0])); // true - zero squared is zero
// console.log(same([0, 0], [0])); // false - different lengths
// console.log(same([0, 1], [0, 1])); // true - includes zero
// console.log(same([-2, -3], [4, 9])); // true - negative numbers
// console.log(same([-2, 2], [4, 4])); // true - both square to same value
// console.log(same([-1, 1], [1])); // false - both -1 and 1 square to 1
// console.log(same([1, 2, 3], [1, 4, 9, 5])); // false - extra element
// console.log(same([2, 2, 3], [4, 9, 4])); // true - repeated elements

// // Problematic cases that current solution handles correctly
// console.log("\n=== Tricky Cases ===");
// console.log(same([1, -1], [1, 1])); // true - both 1 and -1 square to 1
// console.log(same([2, -2, 3], [4, 4, 9])); // true - 2 and -2 both square to 4
// console.log(same([1, 2, 3], [1, 4, 4])); // false - 4 appears twice but should be once

// // Test with Map version
// console.log("\n=== Using Map version ===");
// console.log(sameWithMap([1, 2, 3], [4, 1, 9])); // true
// console.log(sameWithMap([-2, -3], [4, 9])); // true
// console.log(sameWithMap([1, -1], [1, 1])); // true
