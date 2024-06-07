function calculateNumber(a, b) {
  roundedA = Math.round(a);
  roundedB = Math.round(b);

  return ((roundedA) + (roundedB));
}

module.exports = calculateNumber
