var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0
  this.head = 0
  this.tail = 0
  this.storage = {}

};

Queue.prototype.enqueue = function(value) {
	this.count++
	this.storage[this.tail++] = value
}

Queue.prototype.dequeue = function(value) {
	var returned = this.storage[this.head]
	delete this.storage[this.head]
	if(this.head < this.tail) {
		this.head++
	}
	this.count--
	return returned
}

Queue.prototype.size = function() {
	if (this.count < 0) {
		this.count = 0
	}
	return this.count
}

