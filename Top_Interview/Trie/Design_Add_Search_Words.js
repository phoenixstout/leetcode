import { Queue } from "@datastructures-js/queue";

var WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this.root;
  for (let letter of word) {
    if (curr[letter]) {
      curr = curr[letter];
    } else {
      curr[letter] = {};
      curr = curr[letter];
    }
  }
  curr.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let curr = this.root;
  let p = 0;
  let q = new Queue();
  q.enqueue([curr, p]);

  while (!q.isEmpty()) {
    [curr, p] = q.dequeue();
    if(word[p] == undefined && curr.isEnd) return true
    if (word[p] === ".") {
      for (let key of Object.keys(curr)) {
        q.enqueue([curr[key], p + 1]);
      }
    } else {
      if (curr[word[p]]) {
        q.enqueue([curr[word[p]], p+1])
      } else return false;
    }
  }
  if(curr.isEnd) return true
  else return false
};

var obj = new WordDictionary();
obj.addWord("hi");
console.log(obj);
obj.search("..");
