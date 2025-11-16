const factorial = (num: number): number => {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
};

console.log(factorial(5));

/**
 * Where things go wrong
 * No base case
 * Forgetting to return or returning the wrong thing!
 * Stack overflow!
 */

// function factorial(num){
//  if(num === 1) return 1;
//  return num * factorial(num);
//  }

//  function factorial(num){
//  if(num === 1) console.log(1) ;
//  return num * factorial(num-1);
//  }

// Helper Method Recursion

// function outer(input){
//  var outerScopedVariable = []
//  function helper(helperInput){
//  // modify the outerScopedVariable
//  helper(helperInput--)
//  }
//  helper(input)
//  }
//  return outerScopedVariable;
// }

function collectOddValues(arr: number[]): number[] {
  let result: number[] = [];

  function helper(helperInput: number[]) {
    if (!helperInput.length) {
      return;
    }

    if (helperInput[0] % 2 === 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));

// Pure Recursion Tips

/**
 * For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them 
 * Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings 
 * To make copies of objects use Object.assign, or the spread operator

 */

function collectOddValuesPureRecusion(arr: number[]): number[] {
  let newArr: number[] = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
