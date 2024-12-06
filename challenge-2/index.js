function createFrame(names) {
  const maxNameLength = names.reduce((a, b) =>
    b.length > a.length ? b : a,
  ).length;

  let rectangle = "*".repeat(maxNameLength + 4) + "\n";

  for (let i = 0; i < names.length; i++) {
    rectangle += `* ${names[i] + " ".repeat(maxNameLength - names[i].length)} *\n`;
  }
  rectangle += "*".repeat(maxNameLength + 4);

  return rectangle;
}

console.log(createFrame(["midu", "madeval", "educalvolpz"]));
