
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods)
  instance.count = 0
  instance.head = 0
  instance.tail = 0
  instance.storage = {}
  return instance
};

var queueMethods = {
	enqueue(value) {
		this.count++
		this.storage[this.tail++] = value
	},
	dequeue(){
		var returned = this.storage[this.head]
		delete this.storage[this.head]
		if(this.head < this.tail) {
			this.head++
		}
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



