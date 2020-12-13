import { TreeNode } from '../../tool/tree';

const tree1 = new TreeNode(1, null, null);
const tree3 = new TreeNode(3, null, null);
const tree2 = new TreeNode(2, tree1, tree3);
const tree6 = new TreeNode(6, null, null);
const tree9 = new TreeNode(9, null, null);
const tree7 = new TreeNode(7, tree6, tree9);
const tree = new TreeNode(4, tree2, tree7);

export { tree };
