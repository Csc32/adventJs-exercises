/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  const prices = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };
  let result = 0;

  for (let i = 0; i < ornaments.length; i++) {
    const previous = ornaments[i - 1];
    if (!prices.hasOwnProperty(ornaments[i])) {
      return undefined;
    }
    if (prices[previous] < prices[ornaments[i]]) {
      result += prices[ornaments[i]] - 1 * prices[previous];
    } else {
      result += prices[ornaments[i]];
    }
  }
  return result;
}
console.log(calculatePrice("*o@")); // 3   (1 + 1 + 1)
