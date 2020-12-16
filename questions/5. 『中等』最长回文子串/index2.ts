import { test } from '../../tool/test';

/**
 * 计算以left和right为中心的回文长度是多少
 * @param s 字符串
 * @param _left 左边的指针
 * @param _right 右边的指针
 */
function getLength(s: string, _left: number, _right: number): { left: number; right: number; length: number } {
  let left = _left;
  let right = _right;
  while (s.charAt(left) === s.charAt(right) && left >= 0 && right < s.length) {
    left--;
    right++;
  }
  // #region 当临界点满足时, 还是会执行一次while, 所以需要回退一次坐标
  left++;
  right--;
  // #endregion
  return {
    left,
    right,
    length: right - left + 1
  };
}

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s: string): string => {
  if (s.length === 1) {
    return s;
  }
  // 标记最长子串的起始坐标和长度
  let max = { left: 0, right: 0, length: 0 };
  for (let i = 0; i < s.length - 1; i++) {
    // #region 计算以[i, i]和[i, i+1]为中心的子串, 如qbcbp, 中心就是c. 而qbccbp的中心则是cc
    const value1 = getLength(s, i, i);
    const value2 = getLength(s, i, i + 1);
    // #endregion
    const currentMax = value1.length > value2.length ? value1 : value2;
    if (currentMax.length > max.length) {
      max = currentMax;
    }
  }
  return s.substring(max.left, max.right + 1);
};

const data = [
  { input: ['babad'], expect: 'bab' },
  { input: ['cbbd'], expect: 'bb' },
  { input: ['bb'], expect: 'bb' }
];

test(longestPalindrome, data);

export {};
