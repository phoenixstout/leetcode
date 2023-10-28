var removeNthFromEnd = function (head, n) {
 let fast = head
 let slow = head
 let countdown = n
 while(fast.next) {
    fast = fast.next
    countdown-=1
    if(countdown<0) {
        slow = slow.next
    }
 }
 if(countdown === 1) return head.next
 slow.next = slow.next.next

 return head
};


class ListNode {
  constructor(val, child) {
    this.val = val;
    this.next = child;
  }
}

let nodelist = new ListNode(1,new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))

let ret = removeNthFromEnd(nodelist, 1)
console.log(ret)
