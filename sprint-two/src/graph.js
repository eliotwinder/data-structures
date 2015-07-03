

var Graph = function(){
	this.nodes = [];
};

Graph.prototype.addNode = function(node){
	this.nodes.push({
		value: node, 
		pointers: []
	});

};

Graph.prototype.contains = function(node){
	for (var i = 0; i < this.nodes.length; i++) {
		if (this.nodes[i].value === node) {
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	var numberOfNodes = this.nodes.length;
	for (var i = 0; i < numberOfNodes; i++) {
		if (this.nodes[i].value === node) {
			this.nodes = this.nodes.slice(0, i).concat(this.nodes.slice(i + 1));
		}
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	for (var i = 0; i < this.nodes.length; i++) {
		if (this.nodes[i].value === fromNode) {
			var from = this.nodes[i];
		}
		if (this.nodes[i].value === toNode) {
			var to = this.nodes[i];
		}
	}

	if (from.pointers.indexOf(toNode) > -1) {
		return true;
	} else {
		return false;
	}

};

Graph.prototype.addEdge = function(fromNode, toNode){
	for (var i = 0; i < this.nodes.length; i++) {
		if (this.nodes[i].value === fromNode) {
			var from = this.nodes[i];
		}
		if (this.nodes[i].value === toNode) {
			var to = this.nodes[i];
		}
	}

	from.pointers.push(toNode);
	to.pointers.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	for (var i = 0; i < this.nodes.length; i++) {
		if (this.nodes[i].value === fromNode) {
			var from = this.nodes[i];
		}
		if (this.nodes[i].value === toNode) {
			var to = this.nodes[i];
		}
	}
	var fromIndex = from.pointers.indexOf(toNode);
	from.pointers = from.pointers.slice(0, fromIndex).concat(from.pointers.slice(fromIndex + 1));

	var toIndex = to.pointers.indexOf(fromNode);
	to.pointers = to.pointers.slice(0, toIndex).concat(to.pointers.slice(toIndex + 1));
};

Graph.prototype.forEachNode = function(cb){
	for (var i = 0; i < this.nodes.length; i++) {
		cb(this.nodes[i].value);
	}
};

// 

/*
 * Complexity: What is the time complexity of the above functions?
 	O(n)
 */



