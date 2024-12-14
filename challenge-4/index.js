/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  /* Code here */
  const base = {
    space: "_",
    trunk: "#",
  };
  let tree = "";
  let XmasBase = "";
  XmasBase +=
    `${base.space}`.repeat(height - 1) +
    `${base.trunk}`.repeat(1) +
    `${base.space}`.repeat(height - 1) +
    "\n";
  XmasBase +=
    `${base.space}`.repeat(height - 1) +
    `${base.trunk}`.repeat(1) +
    `${base.space}`.repeat(height - 1);
  for (let row = 1; row < height + 1; row++) {
    tree +=
      `${base.space}`.repeat(height - row) +
      `${ornament}`.repeat(2 * row - 1) +
      `${base.space}`.repeat(height - row) +
      "\n";
  }
  const XmasTree = tree + XmasBase;
  return XmasTree;
}
const tree = createXmasTree(5, "*");
console.log(tree);
const tree2 = createXmasTree(1, ".");
console.log(tree2);
