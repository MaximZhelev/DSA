class TreeNode {
  value: number;
  left: TreeNode;
  right: TreeNode;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode;

  constructor() {
    this.root = null;
  }

  addToTree(value: number): boolean {
    // Create a new node
    const newNode = new TreeNode(value);

    if (this.root == null) {
      this.root = newNode;
      return true;
    } else {
      let currentNode = this.root;
      let traversing = true;
      while (traversing) {
        if (currentNode.value == newNode.value) {
          //Assumption: Duplicates are not accepted.
          traversing = false;
          return false;
        } else if (newNode.value < currentNode.value) {
          if (currentNode.left == null) {
            currentNode.left = newNode;
            traversing = false;
            return true;
          } else {
            currentNode = currentNode.left;
          }
        } else if (newNode.value > currentNode.value) {
          if (currentNode.right == null) {
            currentNode.right = newNode;
            traversing = false;
            return true;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  BFS(): number[] {
    // Create a queue to keep track of the nodes we have to visit
    let queue = new Array<TreeNode>();
    // Create an array to store the visited node values
    let visited = new Array<number>();

    // Start traversing from the root node
    queue.push(this.root);

    // While the queue is not empty
    while (queue.length !== 0) {
      // Dequeue an element from the queue
      let current = queue.shift();

      // Add the node value to the visited array
      visited.push(current.value);

      // If current node has left child, add it to the queue to be visited for
      if (current.left !== null) queue.push(current.left);

      // If current node has right child, add it to the queue to be visited for
      if (current.right !== null) queue.push(current.right);
    }
    // Return the visited array
    return visited;
  }

  DFSPreOrder_Iterative(): number[] {
    // stack to keep track of the node we visited
    let stack = new Array<TreeNode>();

    // array to return the data
    let dfsData = new Array<number>();

    // temporary variable
    let currentNode = this.root;
    stack.push(currentNode);

    // while we still have nodes in stack to backtrack
    while (stack.length > 0) {
      currentNode = stack.pop();

      // Add the current root to the return data
      dfsData.push(currentNode.value);

      // Add the right node to the satck.
      if (currentNode.right != null) stack.push(currentNode.right);

      // Add the left node to the stack. We add left child after the rigth child node into the stack.
      // This is because we have to traverse left subtree before traversing right sub tree.
      if (currentNode.left != null) stack.push(currentNode.left);
    }
    return dfsData;
  }

  DFSPreOrder_Recursive(): number[] {
    let visited = new Array<number>();
    let current = this.root;

    function _traverse(node: TreeNode) {
      visited.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }

    _traverse(current);
    return visited;
  }
}
