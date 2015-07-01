var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var count = 0; 
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function(){
    if(length - count >= 1) {
      count++;
    }
    return storage[count - 1];

  };

  someInstance.size = function(){
    return length - count;
  };

  return someInstance;
};
