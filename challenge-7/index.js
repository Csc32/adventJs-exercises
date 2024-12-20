/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  // Code here
  while (packages.includes("(")) {
    const start = packages.lastIndexOf("(");
    const end = packages.indexOf(")", start);
    const inner = packages.slice(start + 1, end);
    const reversed = inner.split("").reverse().join("");
    packages = packages.slice(0, start) + reversed + packages.slice(end + 1);
  }
  return packages;
}
console.log(fixPackages("a(cb)de"));
// ➞ "abcde"
// We reverse "cb" inside the parentheses

console.log(fixPackages("a(bc(def)g)h"));
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

console.log(fixPackages("abc(def(gh)i)jk"));
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

console.log(fixPackages("a(b(c))e"));
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"
