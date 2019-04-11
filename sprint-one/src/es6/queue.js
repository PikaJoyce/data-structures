class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.count = 0
  	this.head = 0
  	this.tail = 0
  	this.storage = {}
  }

  enqueue(value) {
  	this.count++
  	this.storage[this.tail++] = value
  }

  dequeue() {
  	var returned = this.storage[this.head]
  	delete this.storage[this.head]
  	if(this.head < this.tail) {
  		this.head++
  	}
  	this.count--
  	return returned
  }

  size() {
  	if(this.count < 0) {
  		this.count = 0
  	}
  	return this.count
  }
}
