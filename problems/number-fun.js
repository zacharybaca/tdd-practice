function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  try {
    if (Number.isInteger(n)) {
    return 1/n;
  } else if (typeof n !== "number") {
    throw new TypeError("Input is not an Integer");
  } else {
    let decNum = 1/n;
    return decNum.toFixed(3);
  }
 } catch(e) {
     console.log(e.message);
 }
}

module.exports = {
  returnsThree,
  reciprocal
};
