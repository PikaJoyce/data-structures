var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {}
  stack.storage = {}
  stack.count = 0
  stack.var = stack.storage[stack.count]
  extend(stack, stackMethods);
  return stack
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {

	push(value) {
		this.count++
		this.storage[this.count] = value 
	},

	pop() {
		this.var = this.storage[this.count]
		delete this.storage[this.count]
		this.count--
		if (this.count < 0) {
			this.count = 0
		}
		return this.var
	},

	size() {
		return this.count
	}
};


