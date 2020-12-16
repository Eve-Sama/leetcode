/** 输入参数的数据结构 */
interface Data {
  input: any[];
  expect: any;
}

/** 打印的数据结构 */
interface PrintInfo {
  input: any;
  output: any;
  expect: any;
  pass: '√' | '×';
}

// 将输入的参数格式化, 使用逗号相连接
function format(input: any[]): string {
  if (input.length === 0) {
    return input[0];
  }
  let result = '';
  input.forEach((value, index) => {
    if (Array.isArray(value)) {
      if (index !== 0) {
        result += ', ';
      }
      result += `${JSON.stringify(value)}`; // 保持数组的样式, [1,2] => '[1,2]'
    } else {
      if (index !== 0) {
        result += ', ';
      }
      result += `${value}`;
    }
  });
  result = `(${result})`;
  return result;
}

/** 判断输出值是否与期望值一致 */
function isExpect(output: any, expect: any): boolean {
  const a = JSON.stringify(output);
  const b = JSON.stringify(expect);
  console.log(a, `a`);
  console.log(b, `b`);
  console.log(a===b);
  return JSON.stringify(output) === JSON.stringify(expect);
}

const test = (fn: (...params: any) => any, data: Data[]): void => {
  const result: PrintInfo[] = data.map(value => {
    const { input, expect } = value;
    if (!Array.isArray(input)) {
      throw new Error('Test input should be array!');
    }
    const output = fn.apply(null, input);
    return {
      input: format(input),
      output,
      expect: JSON.stringify(expect),
      pass: isExpect(output, expect) ? '√' : '×'
    };
  });
  console.table(result);
};

export { test };
