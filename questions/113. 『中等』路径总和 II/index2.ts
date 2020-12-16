import { TreeNode } from '../../tool/tree';

const res: number[][] = [];
const path: number[] = [];

// 使用递归
function pathSum(root: TreeNode | null, sum: number): number[][] {
  if(Array.isArray(root) && root.length === 0) {
    return [];
  }
  dfs(root, sum);
  return res;
}

function dfs(root: TreeNode | null, sum: number): void {
  if (root === null) return;
  path.push(root.val);
  const curSum = sum - root.val;
  if (curSum === 0) {
    res.push([...path]);
  }
  dfs(root.left, curSum);
  dfs(root.right, curSum);
  path.pop();
}

console.log(pathSum([] as any, 1));
