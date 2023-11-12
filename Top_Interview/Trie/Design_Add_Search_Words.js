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
  curr.isEnd = true
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

  while(!q.isEmpty()) {
    [curr, p] = q.dequeue()
    if(word[p] == undefined) {
      if(curr.isEnd) return true
      else continue
    }
    if(Object.keys(curr).length == 1 && curr.isEnd) continue
    if(word[p] === '.') {
      for(let child of Object.keys(curr)) {
        if(child != 'isEnd') {
          q.enqueue([curr[child], p+1])
        }
      }
    }
    else { // if word[p] is letter
      if(!curr[word[p]]) {
        word[p]
        continue
      }
      q.enqueue([curr[word[p]], p+1])
    }
  }
  return false
};

var obj = new WordDictionary();
obj.addWord("at");
obj.addWord("and");
obj.addWord("an");
obj.addWord("add");
obj.addWord("bat");
obj.search('bat')
