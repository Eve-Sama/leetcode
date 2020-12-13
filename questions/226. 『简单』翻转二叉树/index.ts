import { TreeNode } from '../../tool/tree';
import { tree } from './config';

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  const temp = root.right;
  root.right = root.left;
  root.left = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}

console.log(invertTree(tree));
