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
  { input: [0, 4, 3, 0], expect: 0 },
  { input: [3, 2, 4], expect: 6 },
  { input: [2, 7, 11, 15], expect: 9 }
];

printDemo(twoSum, data);
