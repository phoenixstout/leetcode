var copyRandomList = function(head) {
    const nodemap = new Map()
  
      let curr = head
    
      while(curr!=null) {
        nodemap.set(curr, new Node(curr.val))
        curr = curr.next
      }
  
      curr = head
      while(curr) {
        nodemap.get(curr).next = nodemap.get(curr.next) || null
        nodemap.get(curr).random = nodemap.get(curr.random) || null
        curr = curr.next
      }
  
      return nodemap.get(head)
  };