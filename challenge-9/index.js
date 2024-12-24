/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  // Code here
  const posX = board.findIndex((row) => row.includes("@"));
  const posY = board[posX].indexOf("@");
  const moves = {
    U: { x: 1, y: 0 },
    D: { x: -1, y: 0 },
    R: { x: 0, y: 1 },
    L: { x: 0, y: -1 },
  };
  const nextPos = board[posX - moves[mov]?.x][posY + moves[mov]?.y];
  console.log(nextPos);
  if (nextPos == "*") {
    return "eat";
  }
  if (nextPos == "·") {
    return "none";
  }
  return "crash";
}
const board = ["·····", "*····", "@····", "o····", "o····"];

// console.log(moveTrain(board, "U"));
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

// console.log(moveTrain(board, "D"));
// ➞ 'crash'
// The train moves down and the head crashes into itself

// console.log(moveTrain(board, "L"));
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, "R"));
// ➞ 'none'
// The train moves to the right and there is empty space on the right
