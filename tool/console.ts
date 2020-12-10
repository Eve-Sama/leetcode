/** 输入参数的数据结构 */
interface Data {
  // tslint:disable-next-line: no-any
  input: any[];
  // tslint:disable-next-line: no-any
  expect: any;
}

/** 打印的数据结构 */
interface PrintInfo {
  // tslint:disable-next-line: no-any
  input: any;
  // tslint:disable-next-line: no-any
  output: any;
  // tslint:disable-next-line: no-any
  expect: any;
  pass: '√' | '×';
}

/** 判断输出值是否与期望值一致 */
// tslint:disable-next-line: no-any
const isExpect = (output: any, expect: any): boolean => {
  return JSON.stringify(output) === JSON.stringify(expect);
};

// tslint:disable-next-line: no-any
const parseInput = (input: any[]): string => {
  if (input.length === 0) {
    return input[0];
  }
  let result = '';
  input.forEach((value, index) => {
    if (Array.isArray(value)) {
      if (index !== 0) {
        result += ', ';
      }
      result += `${JSON.stringify(value)}`;
    } else {
      if (index !== 0) {
        result += ', ';
      }
      result += `${value}`;
    }
  });
  result = `(${result})`;
  return result;
};

// tslint:disable-next-line: no-any
const printDemo = (testFunction: (...params: any) => any, obj: Data[]): void => {
  const result: PrintInfo[] = obj.map((v) => {
    const { input, expect } = v;
    if (!Array.isArray(input)) {
      throw new Error('Test input should be array!');
    }
    const output = testFunction.apply(null, input);
    return {
      input: parseInput(input),
      output,
      expect,
      pass: isExpect(output, expect) ? '√' : '×'
    };
  });
  console.table(result);
};

export { printDemo };
