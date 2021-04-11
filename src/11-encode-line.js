/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const res = [];
  res.push(arr[0]);
  let n = 2;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      res.pop();
      res.push(n + arr[i]);
      n++;
    } else {
      res.push(arr[i]);
      n = 2;
    }
  }
  return res.join('');
}

module.exports = encodeLine;
