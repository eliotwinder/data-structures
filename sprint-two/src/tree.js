var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	this.children.push(Tree(value));
};

treeMethods.contains = function(target){
	var result = false;
	var searchNode = function(node) {

		if (node.value === target) {
			result = true;
		} else {
			if (node.children.length > 0) {
				for (var i = 0; i < node.children.length; i++) {
					searchNode(node.children[i]);
				}
			}
		}	
	};

	searchNode(this);

	return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
	access complexity = n/a - we can't access a value aside from searching for it
 	search complexity = O(n)
 */
