var averageOfLevels = function (root) {
    let curr = root
    let q = new Queue()
    let depth = 0
    let lastdepth = 0
    let out = []
    let sum = 0
    let count = 0
    q.enqueue([root, depth])
  
    while (!q.isEmpty()) {
      [curr, depth] = q.dequeue();
      if(curr === null) continue
      if (depth != lastdepth) {
        out.push(sum / count)
        sum = curr.val
        count = 1
        lastdepth = depth
      }
      else {
        sum += curr.val
        count++
      }
  
      curr.left ? q.enqueue([curr.left, depth+1]) : null
      curr.right ? q.enqueue([curr.right, depth+1]) : null
    }
    out.push(sum/count)
  
    return out
  };