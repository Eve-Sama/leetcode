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

const treeNodeLevel_2_2 = new TreeNode(2, null, null);
const treeNodeLevel_1_1 = new TreeNode(1, treeNodeLevel_2_2, null);

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
    const su = valid(pathValue, sum);
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

console.log(pathSum(treeNodeLevel_1_5, 1));
console.log(pathSum(treeNodeLevel_1_1, 1));
