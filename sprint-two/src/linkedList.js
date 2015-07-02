var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;
  list.addToTail = function(value){
    var item = { 
      value: value,
      next: null
    }

    if (list.head === null) {
      list.head = item;
      list.tail = item;
    } else if (list.head.next === null) {
      list.head.next = item;
    }

    list.tail.next = item;
    list.tail = item; 
  };

  list.removeHead = function(){
    var result = list.head;
    list.head = list.head.next;
    return result.value;
  };

  list.contains = function(target){
    var nodeContains = function(node) {
      if(node.value === target) {
        return true;
      } else {
        if (node.next !== null) {
          return nodeContains(node.next);
        }
      }
      return false;
    }
    return nodeContains(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
