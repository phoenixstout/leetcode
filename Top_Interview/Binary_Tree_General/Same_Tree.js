var isSameTree = function (p, q) {
    let q1 = new Queue()
    let q2 = new Queue()
    let d1 = 1
    let d2 = 1
    let s1 = false
    let s2 = false
    let n2 = null
    let n1 = null
    q1.enqueue([p, d1, s1])
    q2.enqueue([q, d2, s2])
  
    loop1: while (!q1.isEmpty()) {
      [n1, d1, s1] = q1.dequeue();
      [n2, d2, s2] = q2.dequeue();
      if (n1 === null || n2 === null) {
        if (n1 === null && n2 === null) continue loop1
        else {
          return false
        }
      }
      if (n1.val === n2.val && d1 === d2 && s1 === s2) {
        q1.enqueue([n1.left, d1 + 1, false])
        q1.enqueue([n1.right, d1 + 1, true])
        q2.enqueue([n2.left, d2 + 1, false])
        q2.enqueue([n2.right, d2 + 1, true])
  
  
      }
      else return false
  
    }
    return true
  
  };