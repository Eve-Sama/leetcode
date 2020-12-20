import { createTree, TreeNode } from '../../tool/tree';

const path: number[] = [];
let stop = false;
let i = 0;

// 艹, 真特么难, 写不出来
function flipMatchVoyage(root: TreeNode | null, voyage: number[]): number[] {
  dfs(root, voyage);
  if (stop) return [-1];
  return path;
}

function dfs(root: TreeNode | null, voyage: number[]): void {
  // console.log(!root, `!root`);
  // console.log(stop, `stop`);
  if (!root || stop) return;
  const { val, left, right } = root;
  // console.log(val, `val`);
  // console.log(voyage[i], `voyage[i]`);
  if (val === voyage[i]) {
    i++;
    console.log(voyage[i], `voyage[i]`);
    console.log(left?.val, `left?.val`);
    console.log(right?.val, `right?.val`);
    if (left?.val === voyage[i]) {
      dfs(left, voyage);
      dfs(right, voyage);
    } else if (right?.val === voyage[i]) {
      if (left) {
        console.log('232');
        path.push(val);
      }
      dfs(right, voyage);
      dfs(left, voyage);
    } else {
      console.log('艹');
      stop = true;
    }
  } else {
    console.log('艹艹');
    stop = true;
  }
}

// const tree = createTree([1, 2]);
// console.log(flipMatchVoyage(tree, [2, 1]));
const tree = createTree([1, 2, 3]);
console.log(flipMatchVoyage(tree, [1, 3, 2]));
