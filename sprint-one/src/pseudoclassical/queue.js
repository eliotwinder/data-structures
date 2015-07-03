var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.beginning = 0;
};

Queue.prototype.enqueue = function(value) {
	this[this.length] = value;
	this.length++;	
};

Queue.prototype.dequeue = function() {
	if (this.length - this.beginning > 0) {
		this.beginning++;
	}
	return this[this.beginning - 1];
};

Queue.prototype.size = function() {
	return this.length - this.beginning;
};


