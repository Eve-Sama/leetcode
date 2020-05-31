const { printDemo } = require('../../tool/console.ts');

const getFirstOne = (value: number): number => {
  let _value = value;
  while (_value >= 10) {
    _value /= 10;
  }
  return ~~_value;
};
const getLastOne = (value: number): number => value % 10;

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x: number): boolean => {
  if (x >= 0 && x < 10) {
    return true;
  }
  let value = x;
  let reverse = 0;
  const _first = getFirstOne(value);
  const _last = getLastOne(value);
  // 首位和末位必须是数字1-9, 否则一定不是回文
  if (!(_first >= 1 && _first <= 9 && _last >= 1 && _last <= 9)) {
    return false;
  }
  while (value >= 1) {
    const last = getLastOne(value);
    reverse *= 10;
    reverse += last;
    value /= 10;
    value = ~~value;
  }
  if (x === reverse) {
    return true;
  }
  return false;
};

const data = [
  { input: 121, expect: true },
  { input: -121, expect: false },
  { input: 10, expect: false },
  { input: 0, expect: true },
  { input: 9999, expect: true }
];

printDemo(isPalindrome, data);

export {};
