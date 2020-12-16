## ☀️ 介绍

算法题的核心就是用现有的函数去解决问题, 作为一个前端工程师, 你并不熟悉 *Java* 等语言所提供的工具包(准确地来说是 *JDK*), 最熟悉的应该是 *JavaScript* . 而进阶一些的前端开发者一定熟悉 *TypeScript* .

本项目用于我个人日常刷 [LeetCode](https://leetcode-cn.com/) 时记录刷题的过程, 并根据需要不断地提供一些工具类(目前只有一个测试相关的).


## ✨ 特性

- 使用TypeScript
- 封装了一个测试函数, 允许你批量测试
- 提供构造Tree的函数, 将数组转为二叉树


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
            |-- index.ts          // 解题源码
        |-- ......
    |-- tool                      // 工具包文件夹, 包含一些小demo(目前只有一个), 辅助Coding
        |-- test.ts               // 包含 test 函数, 用于批量测试结果
        |-- tree.ts               // 二叉树相关的工具函数、类型声明等


## 🔨 实战

举个例子, 假如算法题是 *实现一个判断偶数的函数* .
- 在 *questions* 文件夹下建立该问题的文件夹
- 在该文件夹中新建 *index.ts* (文件名没有限制)
- 引入测试工具包(test), 编写测试用例
- 执行 *ts-node* 观察控制台

```javascript
import { test } from '../../tool/test';

const myFunction = (value: number): boolean => {
  return value % 2 === 0;
};

// 测试用例, 仅需要包含 '输入' 和 '预期结果' 即可
// 注意, input必须是数组, 实际测试的时候会解析内容再传参, 这是为了兼容多参数测试(arg1, arg2...)
const data = [
  { input: [-1], expect: false },
  { input: [0], expect: true },
  { input: [-0], expect: true },
  { input: [1], expect: false },
  { input: [2], expect: true }
];

// 测试工具, 传入你写的 '解题函数' 和 '测试用例' 即可
test(myFunction, data);
```

使用 **ts-node** 运行该文件观察控制台, 测试工具会根据你编写的解题函数和测试用例给出一份测试报告. 

![ts-node result](https://file.qingflow.com/uploads/file/24e3aece-3710-49ec-9f10-3a207f3c98e3.png)

怎么样? 是不是感觉挺花里胡哨的⭐ (虽然确实没什么卵用😥). 

## 🌲二叉树

对于二叉树相关的试题我们总是要构造一些二叉树的类, 而 LeetCode 的输入通常是用数组代替二叉树结构.

![用数组代替二叉树结构](https://file.qingflow.com/uploads/file/c3a6f01b-618b-48e8-b5ba-3c5340d28b52.png)

其实数组就是二叉树的层序遍历, LeetCode 官方给出了相应的解释. 

![数组转二叉树](https://file.qingflow.com/uploads/file/6579e7d0-d908-443a-8b1a-bf3629c340b2.png)

为了避免总是要根据给定的数组手动地去构造二叉树(创建一个 tree 对象, 手动地指定左子树为其他的 tree 对象). 写了个算法能够将数组自动转为二叉树. 

``` typescript
console.log(createTree([1, null, 2, 3]));
```

![数组转二叉树](https://file.qingflow.com/uploads/file/8975438c-ea58-4f74-8b6c-d32926b01a1c.png)


有了 `createTree` 函数, 就可以快速将数组转为二叉树, 方便调试. 