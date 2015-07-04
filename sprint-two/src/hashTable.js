var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(i) == undefined) {
  	this._storage.set(i, [[k, v]]);
    return; 
  }  

  var kIndex = -1;

  for (var j = 0; j < this._storage.get(i).length; j++) {
    if (this._storage.get(i)[j][0] === k) {
      kIndex = j;
    }
  }

  if (kIndex > -1) {
    this._storage.get(i)[j][1] = v;
  } else {
  	this._storage.get(i).push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) !== undefined) {
  	for (var j = 0; j < this._storage.get(i).length; j++) {
  	  	if (this._storage.get(i)[j][0] === k) {
  	  		return this._storage.get(i)[j][1];
  	  	}
  	  }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k,this._limit);
  var storage = this._storage.get(i);
  for (var j = 0; j < storage.length; j++) {
    if (storage[j][0] === k) {
      var removed = storage.splice(j, 1);
    }
  }
  return removed[0][1];
};



/*
 * Complexity: What is the time complexity of the above functions?
  O(1)
 */
