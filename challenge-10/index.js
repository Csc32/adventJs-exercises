/**
 * @param { string[] } instructions - The instructions to execute
 * @returns { number } The value of the register A
 */
function compile(instructions) {
  // Code here
  const guide = {
    MOV: (elements) => {
      if (!isNaN(elements[1])) {
        register[elements[2]] = Number(elements[1]);
        return;
      }
      register[elements[2]] = register[elements[1]];
      return;
    },
    INC: (elements) => {
      register[elements[1]] = (register[elements[1]] || 0) + 1;
    },
    DEC: (elements) => {
      register[elements[1]] = (register[elements[1]] || 0) - 1;
    },
    JMP: (elements) => {
      if (register[elements[1]] == 0) {
        index = Number(elements[2]) - 1;
        return index;
      }
    },
  };

  const instructionMap = [...instructions.map((el) => el.split(" "))];
  const register = {};

  let index = 0;
  for (index; index < instructionMap.length; index++) {
    guide[instructionMap[index][0]](instructionMap[index]);
  }
  return register["A"];
}
const instructions = [
  "MOV 0 A", // copies -1 to register 'C',
  "INC A",
];

console.log(compile(instructions)); // -> 2
