function organizeShoes(shoes) {
  const countI = {};
  const countR = {};

  for (const { type, size } of shoes) {
    type == "R"
      ? (countR[size] = (countR[size] || 0) + 1)
      : (countI[size] = (countI[size] || 0) + 1);
  }
  const pairedShoes = [];
  for (const size in countI) {
    let minPairs = Math.min(countI[size], countR[size]);
    for (let i = 0; i < minPairs; i++) {
      pairedShoes.push(Number(size));
    }
    return pairedShoes;
  }

  const shoes = [
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 42 },
  ];

  const shoes2 = [
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "I", size: 38 },
    { type: "I", size: 38 },
    { type: "R", size: 38 },
  ];
  const shoes3 = [
    { type: "I", size: 38 },
    { type: "R", size: 36 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 43 },
  ];
  console.log(organizeShoes(shoes));
  console.log(organizeShoes(shoes2));
