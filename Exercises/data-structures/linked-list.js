// Simplified implementation from code.tutsplus article

function Node(data) {
  this.data = data;
  this.next = null;
}

function List() {
  this._length = 0;
  this.head = null;
}

List.prototype.add = function(value) {
  const node = new Node(value);
  let currentNode = this.head;

  // 1st use-case: an empty list
  if (!currentNode) {
    this.head = node;
    this._length++;

    return node;
  }

  // 2nd use-case: a non-empty list
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;
  this._length++;
   
  return node;
};

List.prototype.searchNodeAt = function(position) {
  let currentNode = this.head;
  let count = 1;

  while (count < position) {
    currentNode = currentNode.next;
    count++;
  }

  return currentNode;
};

List.prototype.remove = function(position) {
  let currentNode = this.head;
  let count = 0;
  let beforeNodeToDelete = null;
  let nodeToDelete = null;

  // First node is removed
  if (position === 1) {
    this.head = currentNode.next;
    this._length--;
      
    return currentNode;
  }

  // Any other node is removed
  while (count < position) {
    beforeNodeToDelete = currentNode;
    nodeToDelete = currentNode.next;
    count++;
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  this._length--;

  return nodeToDelete;
};