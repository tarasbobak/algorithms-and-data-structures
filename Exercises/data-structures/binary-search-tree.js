// Simple BST implementation.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class SearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);

      return this.root;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = new Node(value);

          return currentNode.left;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new Node(value);

          return currentNode.right;
        }
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      }
    }
  }

  // Depth-first traversal

  traverseInOrder(node) {
    if (node.left) {
      this.traverseInOrder(node.left);
    }
    console.log(node.value);
    if (node.right) {
      this.traverseInOrder(node.right);
    }
  }

  traversePreOrder(node) {
    console.log(node.value);
    if (node.left) {
      this.traversePreOrder(node.left);
    }
    if (node.right) {
      this.traversePreOrder(node.right);
    }
  }

  traversePostOrder(node) {
    if (node.left) {
      this.traversePostOrder(node.left);
    }
    if (node.right) {
      this.traversePostOrder(node.right);
    }
    console.log(node.value);
  }
}
