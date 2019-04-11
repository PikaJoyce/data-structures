var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {}
  queue.count = 0
  queue.head = 0
  queue.tail = 0
  queue.storage = {};
  queue.var = queue.storage[queue.head]
  extend(queue,queueMethods)
  return queue
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
	enqueue(value) {
		this.count ++
		this.storage[this.tail++] = value
	},
	dequeue() {
		this.var = this.storage[this.head]
		delete this.storage[this.head]
		if (this.head < this.tail) {
			this.head++
		}
		this.count--
		return this.var
	},
	size(){
		if (this.count < 0) {
			this.count = 0
		}
		return this.count
	}
};


