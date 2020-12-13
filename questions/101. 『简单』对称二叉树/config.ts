import { TreeNode } from 'tool/tree';

// 非对称
// const treeNodeLevel_3_3_l = new TreeNode(3, null, null);
// const treeNodeLevel_3_4_l = new TreeNode(4, null, null);
// const treeNodeLevel_3_4_r = new TreeNode(4, null, null);
// const treeNodeLevel_3_3_r = new TreeNode(3, null, null);
// const treeNodeLevel_2_2_l = new TreeNode(2, treeNodeLevel_3_3_l, treeNodeLevel_3_4_r);
// const treeNodeLevel_2_2_r = new TreeNode(2, treeNodeLevel_3_4_l, treeNodeLevel_3_3_r);
// const treeNodeLevel_1_1 = new TreeNode(1, treeNodeLevel_2_2_l, treeNodeLevel_2_2_r);

// 对称
const treeNodeLevel_3_3_l = new TreeNode(3, null, null);
const treeNodeLevel_2_2_l = new TreeNode(2, null, treeNodeLevel_3_3_l);
const treeNodeLevel_2_2_r = new TreeNode(2, null, treeNodeLevel_3_3_l);
const treeNodeLevel_1_1 = new TreeNode(1, treeNodeLevel_2_2_l, treeNodeLevel_2_2_r);

export { treeNodeLevel_1_1 };
