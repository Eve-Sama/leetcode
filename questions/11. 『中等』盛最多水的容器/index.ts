import { test } from '../../tool/test';

/**
 * @param {number} x
 * @return {boolean}
 */
const maxArea = (arr: number[]): number => {
  let max = 0;
  // 循环计算当前距离内所能得到的最大值
  for (let distance = 1; distance < arr.length; distance++) {
    let left = 0;
    let right = distance;
    while (right < arr.length) {
      const min = Math.min(arr[left], arr[right]);
      const area = distance * min;
      max = area > max ? area : max;
      left++;
      right++;
    }
  }
  return max;
};

const data = [
  { input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expect: 49 },
  { input: [[1, 1]], expect: 1 }
];

test(maxArea, data);

export {};
