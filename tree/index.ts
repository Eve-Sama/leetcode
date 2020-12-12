const treeLevel3_4 = {
  value: 4,
  left: null,
  right: null
};
const treeLevel3_5 = {
  value: 5,
  left: null,
  right: null
};
const treeLevel3_6 = {
  value: 6,
  left: null,
  right: null
};
const treeLevel3_7 = {
  value: 7,
  left: null,
  right: null
};

const treeLevel2_2 = {
  value: 2,
  left: treeLevel3_4,
  right: treeLevel3_5
};

const treeLevel2_3 = {
  value: 3,
  left: treeLevel3_6,
  right: treeLevel3_7
};

const treeLevel1_1 = {
  value: 1,
  left: treeLevel2_2,
  right: treeLevel2_3
};

interface Tree {
  value: number;
  left: Tree;
  right: Tree;
}

const arr = [];

function zhan(tree: Tree): number[] {
  const arr: Array<{ read: boolean; tree: Tree }> = [{ read: false, tree }];
  const res: number[] = [];
  while (arr.length > 0) {
    const { read, tree } = arr.pop();
    if (!tree) continue;
    if (read === false) {
      arr.push({ read: false, tree: tree.right });
      arr.push({ read: true, tree: tree });
      arr.push({ read: false, tree: tree.left });
    } else {
      res.push(tree.value);
    }
  }
  return res;
}


function digui(tree: Tree, res: number[] = []): void {
  if (tree) {
    digui(tree.left, res);
    res.push(tree.value);
    digui(tree.right, res);
  }
}
console.time('digui');
console.log(digui(treeLevel1_1));
console.timeEnd('digui');

// console.time('zhan');
// console.log(zhan(treeLevel1_1));
// console.timeEnd('zhan');
