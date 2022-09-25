function analyzeArray(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  const { length } = array;
  const average = array.reduce((num, total) => total + num, 0) / length;
  return {
    average,
    min,
    max,
    length,
  };
}
module.exports = analyzeArray;
