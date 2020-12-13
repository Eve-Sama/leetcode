import { TreeNode } from '../../tool/tree';

// const tree3 = new TreeNode(3, null, null);
// const tree4 = new TreeNode(4, null, null);
// const tree5 = new TreeNode(5, null, null);
// const tree2 = new TreeNode(2, tree4, tree5);
// const tree = new TreeNode(1, new TreeNode(2), null);
// // const tree = new TreeNode(1, tree2, tree3);
// const tree = new TreeNode(1);

// const tree2_ = new TreeNode(2);
// const tree1_ = new TreeNode(1, null, tree2_);
// const tree3_ = new TreeNode(3, tree1_, null);

// const tree8 = new TreeNode(8, null, null);
// const tree_22 = new TreeNode(_22, null, null);
// const tree_22 = new TreeNode(_22, null, null);

// const tree4 = new TreeNode(4, null, null);
// const tree2 = new TreeNode(2, null, tree4);
// const tree9 = new TreeNode(9, null, null);
// const tree10 = new TreeNode(10, null, null);
// const tree8 = new TreeNode(8, null, null);
// const tree7 = new TreeNode(7, null, tree8);
// const tree6 = new TreeNode(6, tree10, tree7);
// const tree5 = new TreeNode(5, tree6, null);
// const tree3 = new TreeNode(3, tree9, tree5);
// const tree1 = new TreeNode(1, tree2, tree3);

const tree4 = new TreeNode(4, null, null);
const tree6 = new TreeNode(6, null, null);
const tree3 = new TreeNode(3, tree4, null);
const tree5 = new TreeNode(5, null, tree6);
const tree2 = new TreeNode(2, tree3, tree5);
const tree1 = new TreeNode(1, tree2, null);


export { tree1 as tree };
