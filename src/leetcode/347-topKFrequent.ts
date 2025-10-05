/**
 * 347. Top K Frequent Elements
 *Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2

Output: [1,2]

Example 2:

Input: nums = [1], k = 1

Output: [1]

Example 3:

Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

Output: [1,2]

 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

const topKFrequent = (nums: number[], k: number): number[] => {
  const frequency: Record<number, number> = {};

  for (const num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  console.log(frequency);

  const sortedEntries: [string, number][] = Object.entries(frequency).sort(
    ([, val1], [, val2]) => val2 - val1
  );

  const topKFrequentElements: number[] = sortedEntries
    .slice(0, k)
    .map(([key]) => Number(key));

  console.log(topKFrequentElements);

  return topKFrequentElements;
};

// In O(n) time complexity

const topKFrequent1 = (nums: number[], k: number): number[] => {
  const frequency: Record<number, number> = {};
  const bucket: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  for (const num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  for (const [num, freq] of Object.entries(frequency)) {
    bucket[freq].push(Number(num));
  }
  console.log(frequency);
  console.log(bucket);

  const result: number[] = [];

  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    if (bucket[i].length > 0) {
      result.push(...bucket[i]);
    }
  }

  return result.slice(0, k);
};

console.log(topKFrequent1([1, 2, 1, 3, 2, 1, 2, 3, 1, 3, 2], 2));
