var sortList = function(head) {
    if(head == null) return null
      let curr = head
      let out = []
      while(curr) {
        out.push(curr.val)
        curr = curr.next
      }
  
      out = out.sort((a,b) => a-b)
  
      let root = new ListNode()
      let cur = root
      for(let i = 0; i<out.length-1; i++) {
        cur.val = out[i]
        cur.next = new ListNode()
        cur = cur.next
      }
      cur.val = out[out.length-1]
  
      return root
  };