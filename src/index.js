module.exports = function towelSort(matrix) {
  const result = [];

  if (!matrix) return [];

  const copyMatrix = [...matrix];

  copyMatrix.forEach((row, index) => {
    if (index % 2 !== 0) {
      row.reverse();
    }
    row.forEach((element) => {
      result.push(element);
    });
  });

  return result;
};
