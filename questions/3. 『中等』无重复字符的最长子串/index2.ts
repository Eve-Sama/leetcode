import { printDemo } from '../../tool/console';

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s: string): number => {
  if (s.length === 0) {
    return 0;
  }
  const set = new Set<string>();
  const arr = s.split(''); // 将字符串转为字符串数组
  let max = 0;
  arr.forEach((v) => {
    if (set.has(v)) {
      for (const iterator of set.values()) {
        if (set.has(v)) {
          set.delete(iterator);
        } else {
          break;
        }
      }
      set.add(v);
    } else {
      set.add(v);
    }
    max = Math.max(max, set.size);
  });
  return max;
};

const data = [
  { input: ['abcabcbb'], expect: 3 },
  { input: ['bbbbb'], expect: 1 },
  { input: ['pwwkew'], expect: 3 },
  { input: ['aab'], expect: 2 },
  { input: ['qrsvbspk'], expect: 5 },
  { input: ['dvdf'], expect: 3 }
];

printDemo(lengthOfLongestSubstring, data);

export {};
