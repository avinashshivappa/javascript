function steps(n) {
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= n; col++) {
      col <= row ? (line += "#") : (line += " ");
    }
    console.log(line);
  }
}

console.log(steps(4));