var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var item = { 
      value: value,
      next: null,
      prev: null
    };

    if (list.head === null) {
      list.head = item;
      list.tail = item;
      return;
    } 

    else {
      item.prev = list.tail;
    }

    list.tail.next = item;

    list.tail = item; 
  };  

  list.addToHead = function(value){
    var item = { 
      value: value,
      next: null,
      prev: null
    };

    if (list.tail !== null) {
      item.next = list.head;
    }

    if (list.head === null) {
      list.head = item;
      list.tail = item;
    } 

    list.head.prev = item;
    list.head = item; 
  }; 

  list.removeHead = function(){
    if (list.head === null) {
      return null;
    }

    var result = list.head;
    if (list.head.next === null) {
      list.tail = null;
    }
    
    list.head = list.head.next;
    
    if (list.head !== null) {
      list.head.prev = null;
    }

    return result.value;
  };

  list.removeTail = function(){
    var result = list.tail;

    if (list.tail === null) {
      return null;
    }

    if (list.tail.prev === null) {
      list.tail = null;
      list.head = null;
    }
    
    if (list.tail !== null) {
      list.tail = list.tail.prev;
      list.tail.next = null;
    }

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
    };
    return nodeContains(list.head);
  };

  return list;
};

// time complexity = O(n)

/*
 * Complexity: What is the time complexity of the above functions?
 */
