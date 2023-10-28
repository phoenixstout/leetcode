var mergeTwoLists = function (list1, list2) {
    if(!list1) return list2
    if(!list2) return list1
    
    if(list1.val<list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return l1
    }
    else {
        list2.next = mergeTwoLists(list1, list2.next)
        return l2
    }
  
};

class ListNode {
  constructor(val, child) {
    this.val = val;
    this.next = child;
  }
}

let nodelist1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
);
let nodelist2 = new ListNode(
  4,
  new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, null))))
);

mergeTwoLists(nodelist1, nodelist2)