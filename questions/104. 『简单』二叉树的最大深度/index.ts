import { TreeNode } from '../../tool/tree';

function maxDepth(root: TreeNode | null): number {
  console.log(root, `root`);
  if (Array.isArray(root) || root === null) {
    return 0;
  }
  let height = 0;
  const arr = [root];
  while (arr.length) {
    height++;
    let length = arr.length;
    while (length--) {
      const item = arr.shift();
      if (item) {
        const { left, right } = item;
        if (left) {
          arr.push(left);
        }
        if (right) {
          arr.push(right);
        }
      }
    }
  }
  return height;
}
