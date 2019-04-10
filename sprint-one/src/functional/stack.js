var Stack = function() {
  var someInstance = {};
  var count = 0
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    count+= 1
    storage[count] = value

  };

  someInstance.pop = function() {
    var value = storage[count]
    delete storage[count]
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
