function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if (Number.isInteger(n)) {
    return 1/n;
  } else if (Number.isNaN(n)) {
    throw new TypeError("Input is not an Integer");
  } else {
    let decNum = 1/n;
    return decNum.toFixed(3);
  }
}

module.exports = {
  returnsThree,
  reciprocal
};
