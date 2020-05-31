const { printDemo } = require('../../tool/console.ts');

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x: number): number => {
  const positive = x > 0; // 标记是正数还是负数
  const str = String(Math.abs(x));
  const orginArr = str.split('');
  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31) - 1;
  if (x < min || x > max) {
    return 0;
  }
  const reverseStr: string[] = []; // 准备放置逆序的字符串
  for (let index = orginArr.length - 1; index > -1; index--) {
    reverseStr.push(orginArr[index]);
  }
  // 检查开头的数组元素中是否有连续的0, 有的话就删掉
  const firstZeroIndex = reverseStr.findIndex((v) => Number.parseInt(v, 10) === 0);
  const firstUnZeroIndex = reverseStr.findIndex((v) => Number.parseInt(v, 10) !== 0);
  if (firstZeroIndex < firstUnZeroIndex) {
    reverseStr.splice(firstZeroIndex, firstUnZeroIndex);
  }
  let result = Number.parseInt(reverseStr.join(''), 10);
  if (result > max) {
    return 0;
  }
  if (!positive) {
    result = -result;
  }
  return result;
};

const data = [
  { input: 123, expect: 321 },
  { input: -123, expect: -321 },
  { input: 120, expect: 21 },
  { input: 1534236469, expect: 0 }
];

printDemo(reverse, data);
