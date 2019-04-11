var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods)
  instance.count = 0
  instance.storage = {}
  return instance
};

var stackMethods = {
	push(value){
		this.count++
		this.storage[this.count] = value
	},
	pop(){
		var returned = this.storage[this.count]
		delete this.storage[this.count]
		this.count--
		return returned
	},
	size(){
		if (this.count < 0) {
			this.count = 0
		}
		return this.count
	}

};


