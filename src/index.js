module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) {
    return false;
  }

  const map = new Map(bracketsConfig);
  let arr = [];
  for (let el of str) {
    let lastItem = arr[arr.length - 1];
    if (el === map.get(lastItem)) {
      arr.pop();
    } else {
      arr.push(el);
    }
  }
  return arr.length === 0;
}