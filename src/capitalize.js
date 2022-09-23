function capitalize(word) {
  const string = [...word.trim()];
  const capFirstLetter = word.trim().charAt(0).toUpperCase();
  string.splice(0, 1, capFirstLetter);
  return string.join("");
}
module.exports = capitalize;
