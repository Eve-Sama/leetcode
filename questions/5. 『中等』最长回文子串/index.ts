const { printDemo } = require('../../tool/console.ts');

/** 判断是否是回文 */
function isHuiWen(value: string, _left: number, _right: number): boolean {
  let left = _left;
  let right = _right;
  while (left < right) {
    if (value.charAt(left) !== value.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s: string): string => {
  if (s.length === 1) {
    return s;
  }
  let start = 0;
  let end = 0;
  let max = 0; // 保存最大子串长度
  for (let i = 0; i < s.length + 1; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      if (isHuiWen(s, i, j)) {
        if (j - i > max) {
          max = j - i;
          start = i;
          end = j;
        }
      }
    }
  }
  return s.substring(start, end + 1);
};

const data = [
  { input: 'babad', expect: 'bab' },
  { input: 'cbbd', expect: 'bb' },
  { input: 'bb', expect: 'bb' }
];

printDemo(longestPalindrome, data);

export {};
