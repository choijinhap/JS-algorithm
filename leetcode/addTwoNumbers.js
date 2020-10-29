// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
  let result = new ListNode();
  let p = l1;
  let q = l2;
  let carry = 0;
  let curNode = result;
  while (p != null || q != null) {
    let x = p !== null ? p.val : 0;
    let y = q !== null ? q.val : 0;
    let sum = carry + x + y;
    carry = parseInt(sum / 10);
    curNode.next = new ListNode(sum % 10);
    curNode = curNode.next;
    if (p != null) p = p.next;
    if (q != null) q = q.next;
  }
  if (carry > 0) {
    curNode.next = new ListNode(carry);
  }
  return result.next;
};

