/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commons = 0;
  let str = s2;
  s1.split('').forEach((el) => {
    if (str.indexOf(el) !== -1) {
      commons++;
      str = str.split('');
      str.splice(str.indexOf(el), 1);
      str = str.join('');
    }
  });
  return commons;
}

module.exports = getCommonCharacterCount;
