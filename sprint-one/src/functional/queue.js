var Queue = function() {
  var someInstance = {};
  var count = 0
  var head = 0
  var tail = 0
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count += 1
    storage[tail++] = value
  };

  someInstance.dequeue = function() {
    var value = storage[head]
    delete storage[head]
    if (head < tail) {
      head+=1
    }
    count -= 1
    return value
  };

  someInstance.size = function() {
    if (count <= 0) {
      return 0
    }
    return count
  };
  return someInstance;
};
