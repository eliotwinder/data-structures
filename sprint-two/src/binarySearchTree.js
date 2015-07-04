var BinarySearchTree = function(value){
	var tree = {};
	tree.value = value;
	tree.left;
	tree.right;
	
	tree.insert = function(value) {
		if (this.value > value) {
			if (this.left === undefined) {
				this.left = BinarySearchTree(value);
			} else {
				this.left.insert(value);
			}
		} else {
			if ( this.right === undefined) {
				this.right = BinarySearchTree(value);
			} else {
				this.right.insert(value);
			}
		}
	};

	tree.contains = function(value) {
		if (this.value === value) {
			return true;
		} else {
			if (this.value < value) {
				if (this.right) {
					return this.right.contains(value);	
				} else {
					return false;
				}
			}   else {
				if (this.left) {
					return this.left.contains(value);
				} else {
					return false;
				}
			}
		}
	};

	tree.depthFirstLog = function(func) {
		func(this.value);
		if (this.left){
			this.left.depthFirstLog(func);
		}

		if (this.right) {
			this.right.depthFirstLog(func);
		}
	};

	return tree; 
};


/*
 * Complexity: What is the time complexity of the above functions?
 * O(log(n))
 */
