import { TreeNode } from '../../tool/tree';

const treeNodeLevel_4_7 = new TreeNode(7, null, null);
const treeNodeLevel_4_2 = new TreeNode(2, null, null);
const treeNodeLevel_4_5 = new TreeNode(5, null, null);
const treeNodeLevel_4_1 = new TreeNode(1, null, null);
const treeNodeLevel_3_11 = new TreeNode(11, treeNodeLevel_4_7, treeNodeLevel_4_2);
const treeNodeLevel_3_13 = new TreeNode(13, null, null);
const treeNodeLevel_3_4 = new TreeNode(4, treeNodeLevel_4_5, treeNodeLevel_4_1);
const treeNodeLevel_2_4 = new TreeNode(4, treeNodeLevel_3_11, null);
const treeNodeLevel_2_8 = new TreeNode(8, treeNodeLevel_3_13, treeNodeLevel_3_4);
const treeNodeLevel_1_5 = new TreeNode(5, treeNodeLevel_2_4, treeNodeLevel_2_8);

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
