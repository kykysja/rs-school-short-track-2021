/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(/* l, k */) {
  throw new Error('Not implemented');
}

module.exports = removeKFromList;

/* const res = [];
  for (let i = 0; i < l.length; i++) {
    if (l[i] !== k) {
      res.push(l[i]);
    }
  }
  return res; */

// Да, я тоже сначала думал, что это массив.
// Но оказалось это объект ListNode у которого value: первое число,
// а next: следующий ListNode со следующим числом и т.д. до последнего числа исходного массива
