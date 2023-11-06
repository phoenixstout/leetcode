class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c]) node = node[c];
      else {
        node[c] = {};
        node = node[c];
      }
    }
    node.end = true;
    this.root;
  }

  search(word) {
    let node = this.root;
    for (let c of word) {
      node[c] ? (node = node[c]) : (node = null);
      if (node == null) return false;
    }
    if (node.end) return true;
    return false;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let c of prefix) {
      node[c] ? (node = node[c]) : (node = null);
      if (node == null) return false;
    }
    return true;
  }
}

var obj = new Trie();
obj.insert("app");
obj.insert("apple");
obj.search("app");
obj.startsWith("w");
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
