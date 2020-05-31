const { printDemo } = require('../../tool/console.ts');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();
  const result: number[] = [];
  nums.forEach((value, index) => {
    const distant = target - value; // 求另外个数字
    if (map.has(distant)) {
      result.push(...[map.get(distant), index]);
    } else {
      map.set(value, index);
    }
  });
  return result;
};

const data = [
  { input: [[0, 4, 3, 0], 0], expect: [0, 3] },
  { input: [[3, 2, 4], 6], expect: [1, 2] },
  { input: [[2, 7, 11, 15], 9], expect: [0, 1] }
];

printDemo(twoSum, data);

export {};
