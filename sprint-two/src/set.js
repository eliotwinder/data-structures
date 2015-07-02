var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	if (this.storage.indexOf(item) === -1){
		this.storage.push(item);
	}
};

setPrototype.contains = function(item){
	if (this.storage.indexOf(item) >= 0) {
		return true;
	}
	return false;
};

setPrototype.remove = function(item){
	var index = this.storage.indexOf(item);
	this.storage = this.storage.slice(0, index).concat(this.storage.slice(index + 1));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
