interface Data {
  // tslint:disable-next-line: no-any
  input: any;
  // tslint:disable-next-line: no-any
  expect: any;
}
// tslint:disable-next-line: no-any
function _printDemo(func: (...params: any) => any, obj: Data[]): void {
  const arr: Data[] = obj.map((v) => {
    const { input, expect } = v;
    return {
      input,
      output: func(input),
      expect
    };
  });
  console.table(arr);
}

module.exports = {
  printDemo: _printDemo
};
