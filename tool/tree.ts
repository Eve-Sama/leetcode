// leetcode 官方给的数据结构
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/** 根据给定的数组, 还原为二叉树 */
function createTree(arr: number[]): TreeNode {
  if (arr.length === 0 || arr[0] === null) {
    return;
  }
  const root = new TreeNode(arr[0]);
  let point = 0;
  let currentTree = root;
  const stack: Array<{ tree: TreeNode; setLeft: boolean; setRight: boolean }> = [{ tree: currentTree, setLeft: false, setRight: false }];
  while (point++ < arr.length - 1) {
    const value = arr[point];
    const item = stack[0];
    const isLeft = point % 2 !== 0;
    if (value !== null) {
      if (isLeft) {
        const newTree = new TreeNode(value);
        currentTree.left = newTree;
        stack.push({ tree: newTree, setLeft: false, setRight: false });
      } else {
        const newTree = new TreeNode(value);
        currentTree.right = newTree;
        stack.push({ tree: newTree, setLeft: false, setRight: false });
      }
    }
    item.setLeft = item.setLeft || point % 2 !== 0;
    item.setRight = item.setRight || point % 2 === 0;
    // #region 检查 stack 中的第一个树是否已经设置过左右结点, 如果是的话将其移除, 设置第二个元素为当前树
    if (item.setLeft && item.setRight) {
      stack.shift();
      currentTree = stack[0].tree;
    }
    // #endregion
  }
  return root;
}

export { TreeNode, createTree };
