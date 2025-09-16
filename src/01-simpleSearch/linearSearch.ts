"use strict";

const linearSearch_0 = (numberArray: number[], num: number): number[] => {
  for (const [index, value] of numberArray.entries()) {
    if (value === num) {
      return [value, index];
    }
  }
  return [num, -1];
};

// indexOf has built-in linear search , returns -1 if not found
const linearSearch_1 = (numberArray: number[], num: number): number => {
  return numberArray.indexOf(num);
};

const inputArray = [1, 2, 3, 4, 5];
const searchNum = 5;

const result_0 = linearSearch_0(inputArray, searchNum);
const result_1 = linearSearch_1(inputArray, searchNum);
console.log(`Normal:  ${result_0}`);
console.log(`IndexOf : ${result_1}`);
