var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);

  newQueue.length = 0;
  newQueue.beginning = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this[this.length] = value;
	this.length++;
};

queueMethods.dequeue = function() {
	if (this.length - this.beginning > 0) {
		this.beginning++;
	}
	return this[this.beginning - 1];
};

queueMethods.size = function() {
	return this.length - this.beginning;
};


