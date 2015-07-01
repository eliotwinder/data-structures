var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.length = 0;
  newQueue.beginning = 0;
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this[this.length] = value;	
	this.length += 1;
};

queueMethods.dequeue = function() {
	if (this.length - this.beginning >= 1) {
		this.beginning += 1;
	}
	return this[this.beginning - 1];
};

queueMethods.size = function() {
	return this.length - this.beginning;
};

