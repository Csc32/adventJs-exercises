function createFrame(names) {
  const maxNameLength = Math.max(...names.map((el) => el.length));
  console.log(maxNameLength);
  let rectangle = "*".repeat(maxNameLength + 4) + "\n";

  console.log(rectangle);
  for (let i = 0; i < names.length; i++) {
    rectangle += `* ${names[i] + " ".repeat(maxNameLength - names[i].length)} *\n`;
  }
  rectangle += "*".repeat(maxNameLength + 4);

  return rectangle;
}

console.log(createFrame(["midu", "madeval", "educalvolpz"]));
