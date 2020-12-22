import { createTree, TreeNode } from '../../tool/tree';

/** key: position x, value: array of tree value */
function verticalTraversal(root: TreeNode | null): number[][] {
  const map = new Map<number, Array<{ y: number; val: number }>>();
  setMap(0, 0, root.val, map);
  recordTreePosition(root.left, 0, 0, 'left', map);
  recordTreePosition(root.right, 0, 0, 'right', map);
  const keys = [...map.keys()];
  keys.sort((a, b) => a - b);
  const _res: Array<{ y: number; val: number }>[] = [];
  keys.forEach(v => {
    const item = map.get(v);
    _res.push(item);
  });
  const res: number[][] = [];
  _res.forEach(arr => {
    arr.sort((a, b) => {
      if (a.y === b.y) {
        return a.val - b.val;
      } else {
        return b.y - a.y;
      }
    });
    res.push(arr.map(v => v.val));
  });
  return res;
}

function recordTreePosition(
  root: TreeNode | null,
  parentX: number,
  parentY: number,
  type: 'left' | 'right',
  map: Map<number, Array<{ y: number; val: number }>>
): void {
  if (!root) return;
  const y = parentY - 1;
  const x = type === 'left' ? parentX - 1 : parentX + 1;
  setMap(x, y, root.val, map);
  recordTreePosition(root.left, x, y, 'left', map);
  recordTreePosition(root.right, x, y, 'right', map);
}

function setMap(x: number, y: number, val: number, map: Map<number, Array<{ y: number; val: number }>>): void {
  const array = map.get(x);
  if (array) {
    array.push({ y, val });
  } else {
    map.set(x, [{ y, val }]);
  }
}

// const tree = createTree([3, 9, 20, null, null, 15, 7]);
// const tree = createTree([1, 2, 3, 4, 5, 6, 7]);
// const tree = createTree([0, 8, 1, null, null, 3, 2, null, 4, 5, null, null, 7, 6]);
// const tree = createTree([0, 5, 1, 9, null, 2, null, null, null, null, 3, 4, 8, 6, null, null, null, 7]);
const tree = createTree([0, 2, 1, 3, null, null, null, 4, 5, null, 7, 6, null, 10, 8, 11, 9]);
console.log(verticalTraversal(tree));
