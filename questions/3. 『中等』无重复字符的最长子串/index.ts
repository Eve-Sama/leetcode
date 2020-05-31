const { printDemo } = require('../../tool/console.ts');

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s: string): number => {
  if (s.length === 0) {
    return 0;
  }
  const arr = s.split(''); // 将字符串转为字符串数组
  const result: string[] = [];
  // #region 初始化max, 需要考虑字符串为空的情况
  let max = 0;
  // #endregion
  arr.forEach((holder, index) => {
    // 如果result存在, 则说明字符串重复, 计算最大值
    const targetIndex = result.findIndex((res) => res === holder);
    if (targetIndex > -1) {
      max = result.length > max ? result.length : max;
      // 假如字符串是abca, 则当第二个a进来的时候应该清除第一个a, 留下bc
      result.splice(0, targetIndex + 1);
    }
    // 无论有没有重复都需要push新的字符串, 因为他是新的起点
    result.push(holder);
    // 当最后一项时需要检查max
    if (index === arr.length - 1) {
      max = result.length > max ? result.length : max;
    }
  });
  return max;
};

const data = [
  { input: 'abcabcbb', expect: 3 },
  { input: 'bbbbb', expect: 1 },
  { input: 'pwwkew', expect: 3 },
  { input: 'aab', expect: 2 },
  { input: 'dvdf', expect: 3 }
];

printDemo(lengthOfLongestSubstring, data);
