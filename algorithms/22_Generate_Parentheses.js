var generateParenthesis = function (n) {
  const result = [];
  helpGenerateParentheses(result, "", 0, 0, n);
  return result;
};

const helpGenerateParentheses = (result, current, open, close, n) => {
  if (current.length === 2 * n) {
    result.push(current);
    return;
  }
  if (open < n) {
    helpGenerateParentheses(result, current + "(", open + 1, close, n);
  }
  if (close < open) {
    helpGenerateParentheses(result, current + ")", open, close + 1, n);
  }
};

generateParenthesis(3)
