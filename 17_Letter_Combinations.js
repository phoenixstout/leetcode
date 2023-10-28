var letterCombinations = function (digits) {
    digits = digits.split('')
  let map = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);
  let output = []
  var recur = (chars, index) => {
    let curr_number = chars[index]
    let curr_letters = map.get(curr_number).split('')

    for(let letter of curr_letters) {
        letter
        chars[index] = letter
        let temp = [...chars]
        if(index === chars.length-1) output.push(temp.join(''))
        else recur(temp, index+1)
    }
    return output
};
return recur(digits,0)
};

let out = letterCombinations("23");
console.log(out)
