var isValid = function (s) {
  let map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  let stack = [];
  for (let char of s) {
    if(char === '(' || char === '[' || char === '{') stack.push(char)
    else if(stack[stack.length-1] === map.get(char)) stack.pop()
    else return false
  }
  return stack.length==0
};

isValid("{())()}")
