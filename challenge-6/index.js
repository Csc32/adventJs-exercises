/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  const giftInRow = box.findIndex((row) => row.includes("*"));
  const regex = /#\s*\*\s*#/g;
  const isGiftInside = regex.test(box[giftInRow]) ? true : false;
  return isGiftInside;
}
console.log(inBox(["###", "#*#", "###"])); // ➞ true

console.log(inBox(["####", "#* #", "#  #", "####"])); // ➞ true

console.log(inBox(["#####", "#   #", "#  #*", "#####"])); // ➞ false
