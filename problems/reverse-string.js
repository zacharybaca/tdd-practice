function reverseString(string) {
  // Your code here
  if (typeof string !== "string") {
    throw TypeError();
  }
  
  let newArr = [];

  for (let i = string.length; i >= 0; i--) {
    newArr.push(string[i]);
  }
  let newWord = newArr.join("");
  return newWord;
};


module.exports = { reverseString };
