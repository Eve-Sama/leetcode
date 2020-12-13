import { TreeNode } from '../../tool/tree';
import { tree } from './config';

function diameterOfBinaryTree(root: TreeNode | null, max: number = 0): number {
  if (!root || (Array.isArray(root) && !root.length)) return 0;
  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);
  const sum = leftHeight + rightHeight;
  max = max > sum ? max : sum;
  if (root) {
    const tempMax = diameterOfBinaryTree(root.left, max);
    max = max > tempMax ? max : tempMax;
  }
  if (root) {
    const tempMax = diameterOfBinaryTree(root.right, max);
    max = max > tempMax ? max : tempMax;
  }
  return max;
}

function getHeight(root: TreeNode | null): number {
  if (!root) return 0;
  let height = 0;
  const stack: TreeNode[] = [root];
  while (stack.length) {
    height++;
    let length = stack.length;
    while (length--) {
      const item = stack.shift();
      if (item && item.left) stack.push(item.left);
      if (item && item.right) stack.push(item.right);
    }
  }
  return height;
}

console.log(diameterOfBinaryTree(tree));
// console.log(tree);
// console.log(getHeight(tree.left));