function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if (typeof n !== "number") {
    throw new TypeError("Input is not an Integer");
  }

  try {
    if (Number.isInteger(n)) {
    return 1/n;
  } else {
    let decNum = 1/n;
    return decNum;
  }
 } catch(e) {
     console.log(e.message);
 }
}

module.exports = {
  returnsThree,
  reciprocal
};
