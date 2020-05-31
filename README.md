## ☀️ 介绍

算法题的核心就是用现有的函数去解决问题, 作为一个前端工程师, 你并不熟悉 *Java* 等语言所提供的工具包(准确地来说是 *JDK*), 最熟悉的应该是 *JavaScript* . 而进阶一些的前端开发者一定熟悉 *TypeScript* .

本项目用于我个人日常刷 [LeetCode](https://leetcode-cn.com/) 时记录刷题的过程, 并根据需要不断地提供一些工具类(目前只有一个测试相关的).


## ✨ 特性

- 允许你使用TypeScript编写函数, 转换成JavaScript之后再提交.
- 封装了一个测试工具类, 允许你批量测试.


## 📦 安装

使用git下载仓库并使用npm安装相关依赖, 我个人更推荐你使用 **Yarn** 安装相关依赖.

```bash
git clone git@github.com:Mr-Eve/coding.git
cd coding
yarn
```
## ⌨️ 文件结构(只介绍非工程文件)

    |-- questions                 // 存放所有的问题
        |-- 1.『简单』两数之合     // 单个问题文件夹
            |-- doc.md            // 问题的信息, 包括原题、提交结果等
            |-- index.ts          // 解题源码
        |-- ......
    |-- submit                    // 运行 tsc 之后会产生的文件夹
        |-- 1.『简单』两数之合     // 单个问题文件夹
            |-- index.js          // 将ts编译为js的文件
    |-- tool                      // 工具包文件夹, 包含一些小demo(目前只有一个), 辅助Coding
        |-- console.ts            // 包含printDemo函数, 用于批量测试结果


## 🔨 实战

举个例子, 假如算法题是 *实现一个判断偶数的函数* .
- 先在 *questions* 文件夹下建立该问题的文件夹
- 之后在该文件夹中新建 *index.ts*
- 引入测试工具包(printDemo), 编写测试用例.
- 执行 *ts-node* 观察控制台

```javascript
const { printDemo } = require('../../tool/console.ts');

const myFunction = (value: number): boolean => {
  return value % 2 === 0;
};

// 测试用例, 仅需要包含 '输入' 和 '预期结果' 即可
const data = [
  { input: -1, expect: false },
  { input: 0, expect: true },
  { input: -0, expect: true },
  { input: 1, expect: false },
  { input: 2, expect: true }
];

// 测试工具, 传入你写的 '解题函数' 和 '测试用例' 即可
printDemo(myFunction, data);

```

使用 **ts-node** 运行该文件观察控制台, 测试工具会根据你编写的解题函数和测试用例给出一份测试报告. 

<!-- (https://file.qingflow.com/uploads/file/b5d85e36-50e9-4143-92cd-0aec7df1b422.png) -->

![ts-node result](https://file.qingflow.com/uploads/file/b5d85e36-50e9-4143-92cd-0aec7df1b422.png)

怎么样? 是不是感觉挺花里胡哨的⭐? (虽然确实没什么卵用😥). 目前测试用例仅能接受单个输入参数, 多参数目前暂不支持(因为我不知道该怎么实现😭). 

在确保你的代码已通过全部测试用例时😁, 执行 **tsc** 即可看到根目录会产生一个 **submit** 文件夹, 在当中找到自己当前正在解题的 *JS* 文件提交测试即可. 

通常在 *通过* 测试以后(或者因为超时等原因实在无法继续解答), 我会编写一个doc.md记录该题的信息、通过结果, 如果有必要会带上一些备注信息, 用于日后回溯. 
