
var MinStack = function() {
    this.elements = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.elements.push({
        val,
        min: this.elements.length==0 ? val : Math.min(this.elements[this.elements.length-1].min, val)
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.elements.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.elements[this.elements.length-1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.elements[this.elements.length-1].min
    
};

var obj = new MinStack();

obj.push(3);
obj.push(4)
obj.push(2)
obj

