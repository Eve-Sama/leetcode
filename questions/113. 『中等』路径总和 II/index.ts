import { TreeNode } from '../../tool/tree';

// 使用栈
function pathSum(root: TreeNode, sum: number): number[][] {
  const stack: TreeNode[] = [root];
  const res: number[][] = [];
  const path: TreeNode[] = [];
  // 先序遍历
  while (stack.length) {
    const tree = stack.pop();
    if (!tree) continue;
    while (path.length && !isChild(path[path.length - 1], tree)) {
      path.pop();
    }
    path.push(tree);
    const pathValue = path.map(v => v.val);
    if (valid(pathValue, sum) && !tree.left && !tree.right) {
      res.push(path.map(v => v.val));
    }
    stack.push(tree.right);
    stack.push(tree.left);
  }
  return res;
}

function valid(path: number[], target: number): boolean {
  const sum = path.reduce((x, y) => x + y);
  return sum === target;
}

function isChild(father: TreeNode, child: TreeNode): boolean {
  if (!father) return false;
  const { left, right } = father;
  return left === child || right === child;
}
