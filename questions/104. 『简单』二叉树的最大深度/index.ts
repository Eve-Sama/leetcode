import { TreeNode } from '../../tool/tree';

const treeNode15 = new TreeNode(15, null, null);
const treeNode7 = new TreeNode(7, null, null);
const treeNode20 = new TreeNode(20, treeNode15, treeNode7);
const treeNode9 = new TreeNode(9, null, null);
const treeNode = new TreeNode(3, treeNode9, treeNode20);

function maxDepth(root: TreeNode | null): number {
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

console.log(maxDepth(treeNode));
