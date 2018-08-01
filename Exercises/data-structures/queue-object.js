class Queue {
  constructor(maxCapacity) {
    this.storage = {};
    this._counter = 0;
    this._currStartCount = 1;
    this._maxCapacity = maxCapacity;
  }

  enqueue(item) {
    if (typeof item === 'undefined') {
      console.error('Cannot add undefined value. Please provide one.');
      return;
    }

    if (this._maxCapacity && this._counter + 1 > this._maxCapacity) {
      console.error('Max capacity already reached. Remove element before adding a new one.');
      return;
    }

    this._counter++;
    this.storage[this._counter] = item;
  }

  dequeue() {
    const removedItem = this.storage[this._currStartCount];

    if (typeof removedItem === 'undefined') {
      console.error('Cannot dequeue. Stack is empty');
      return;
    }

    delete this.storage[this._currStartCount];
    this._currStartCount++;

    return removedItem;
  }

  peek() {
    return this.storage[this._currStartCount];
  }

  count() {
    return this._counter - this._currStartCount + 1;
  }

  contains(value) {
    for (let i = this._currStartCount; i < this._counter; i++) {
      if (this.storage[i] === value) {
        return true;
      }
    }

    return false;
  }

  until(value) {
    let count = this.count();

    for(let i = this._currStartCount; i <= this._counter; i++) {
      if (this.storage[i] === value) {
        return i - this._currStartCount;
      }
    }

    console.error('There is no such element in the stack');
  }
}

// Implement queue with two stacks
class Stack {
  constructor() {
    this._counter = 0;
    this.storage = {};
  }

  push(item) {
    if (typeof item === 'undefined') {
      console.error('Cannot push undefined value. Please provide one.');
      return;
    }

    this._counter++;
    this.storage[this._counter] = item;
  }

  pop() {
    const poppedItem = this.storage[this._counter];

    delete this.storage[this._counter];
    this._counter--;

    return poppedItem;
  }

  peek() {
    return this.storage[this._counter];
  }

  count() {
    return this._counter;
  }
}

class TwoStacksQueue {
  constructor() {
    this._inStack = new Stack();
    this._outStack = new Stack();
  }

  enqueue(value) {
    this._inStack.push(value);
  }

  dequeue() {
    if (this._outStack.count() === 0) {
      this.transferStacks();
    }
    return this._outStack.pop();
  }

  transferStacks() {
    while(this._inStack.count() > 0) {
      this._outStack.push(this._inStack.pop());
    }
  }

  count() {
    return this._inStack.count() + this._outStack.count();
  };
}
