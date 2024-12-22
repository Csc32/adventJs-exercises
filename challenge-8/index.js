/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  // Code here
  const laneArray = "~".repeat(length).split("");
  let race = "";
  for (let i = 0; i < indices.length; i++) {
    race +=
      " ".repeat(indices.length - i - 1) +
      laneArray
        .toSpliced(indices[i], 1, indices[i] !== 0 ? "r" : "~")
        .join("") +
      ` /${i + 1}` +
      (i + 1 !== indices.length ? "\n" : "");
  }
  return race;
}

console.log(drawRace([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/
