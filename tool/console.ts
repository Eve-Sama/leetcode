/** 输入参数的数据结构 */
interface Data {
  // tslint:disable-next-line: no-any
  input: any;
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

// tslint:disable-next-line: no-any
function _printDemo(func: (...params: any) => any, obj: Data[]): void {
  const result: PrintInfo[] = obj.map((v) => {
    const { input, expect } = v;
    const output = func(input);
    return {
      input,
      output,
      expect,
      pass: expect === output ? '√' : '×'
    };
  });
  console.table(result);
}

module.exports = {
  printDemo: _printDemo
};
