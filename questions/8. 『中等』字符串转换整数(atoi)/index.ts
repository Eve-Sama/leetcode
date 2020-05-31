const { printDemo } = require('../../tool/console.ts');

const ascii = {
  minus: 45,
  plus: 43,
  A: 65,
  z: 122,
  zero: 48,
  nine: 57,
  blank: 32
};

const getAscii = (value: string): number => {
  if (value.length !== 1) {
    throw new Error('Length of value should be 1');
  }
  return value.charCodeAt(0);
};

/**
 * 判断字符是否是数字
 * @param value 需要判断的值, string
 */
const isNumber = (value: string): boolean => {
  if (typeof value === 'string') {
    const valueAscii = getAscii(value);
    return valueAscii >= ascii.zero && valueAscii <= ascii.nine;
  } else {
    console.log(value, `value`);
    throw new Error('Only accept string');
  }
};

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str: string): number => {
  if (str.length === 0) {
    return 0;
  }
  const arr = str.split('');
  // #region 第一个 '非空格、非正负' 的字符, 如果不是数字直接返回0
  const firstElement = arr.find((v) => ![ascii.blank, ascii.plus, ascii.minus].includes(getAscii(v)));
  if (!firstElement || !isNumber(firstElement)) {
    return 0;
  }
  // #endregion
  // #region 找到第一个不为空的字符, 判断第一个有效字符是否是负号
  const firstNotBlank = arr.find((v) => v !== ' ');
  const isMinus = getAscii(firstNotBlank) === ascii.minus;
  // #endregion
  const numberArr: string[] = [];
  let hasSymbol = false; // 标记是否已经存在过加减负号
  let hasNumber = false; // 标记是否已经存在过数字
  for (const item of arr) {
    const unicode = getAscii(item);
    // 如果是空格则进行下一个迭代
    if ([ascii.plus, ascii.minus].includes(unicode)) {
      if (hasSymbol) {
        if (numberArr.length === 0) {
          return 0;
        } else {
          break;
        }
      }
      hasSymbol = true;
    }
    if ([ascii.blank].includes(unicode)) {
      if (hasSymbol) {
        if (numberArr.length === 0) {
          return 0;
        } else {
          break;
        }
      }
    }
    if ([ascii.blank, ascii.plus, ascii.minus].includes(unicode)) {
      if (hasNumber) {
        break;
      }
      continue;
    }
    // 如果是数字
    if (isNumber(item)) {
      numberArr.push(item);
      hasNumber = true;
    } else {
      break;
    }
  }
  let result = Number.parseInt(numberArr.join(''), 10);
  result = isMinus ? -result : result;
  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31) - 1;
  if (result <= min) {
    return min;
  }
  if (result >= max) {
    return max;
  }
  return result;
};

const data = [
  { input: '   -42', expect: -42 },
  { input: '4193 with words', expect: 4193 },
  { input: 'words and 987', expect: 0 },
  { input: '-91283472332', expect: -2147483648 },
  { input: '+', expect: 0 },
  { input: '', expect: 0 },
  { input: '+1', expect: 1 },
  { input: '+-2', expect: 0 },
  { input: '   +0 123', expect: 0 },
  { input: '-   234', expect: 0 },
  { input: '    -88827   5655  U', expect: -88827 },
  { input: '-5-', expect: -5 }
];

printDemo(myAtoi, data);
