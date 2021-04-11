/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = n.toString().split('');
  let min = res[0];

  for (let i = 1; i < res.length; i++) {
    if (res[i] < min) {
      min = res[i];
    }
  }
  res.splice(res.indexOf(min), 1);
  res = +res.join('');
  return res;
}

module.exports = deleteDigit;
