function caesarCipher(strings, shiftNum) {
  const alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  ];
  const encrypt = [...strings.trim()];
  encrypt.forEach((item, index1) => {
    alphabet.forEach((alph, index2) => {
      let shiftIndex = index2 + shiftNum;
      if (shiftIndex > 25) shiftIndex -= 25;
      if (shiftIndex < 0) shiftIndex += 26;
      if (item === alph) encrypt.splice(index1, 1, alphabet[shiftIndex]);
      if (item !== alph && item.toLowerCase() === alph) {
        encrypt.splice(index1, 1, alphabet[shiftIndex].toUpperCase());
      }
    });
  });
  return encrypt.join("");
}

module.exports = caesarCipher;
