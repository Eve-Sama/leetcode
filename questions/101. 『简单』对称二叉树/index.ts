import { TreeNode } from '../../tool/tree';

// 使用栈
function isSymmetric(root: TreeNode | null): boolean {
  if (root === null || (Array.isArray(root) && root.length === 0)) return true;
  const stack: TreeNode[] = [root];
  while (stack.length) {
    let length = stack.length;
    if (!valid(stack)) {
      return false;
    }
    while (length--) {
      const tree = stack.shift();
      if (tree) stack.push(tree.left);
      if (tree) stack.push(tree.right);
    }
  }
  return true;
}

function valid(stack: TreeNode[]): boolean {
  const length = stack.length;
  let start = 0;
  let end = length - 1;
  while (start < length / 2) {
    if (stack[start]?.val === stack[end]?.val) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

