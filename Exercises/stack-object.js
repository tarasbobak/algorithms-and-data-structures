class Stack {
  constructor(maxCapacity) {
    this._counter = 0;
    this._maxCapacity = maxCapacity;
    this.storage = {};
  }

  push(item) {
    if (typeof item === 'undefined') {
      console.error('Cannot push undefined value. Please provide one.');
      return;
    }

    if (this._maxCapacity && this._counter + 1 > this._maxCapacity) {
      console.error('Max capacity already reached. Remove element before adding a new one.');
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

  contains(value) {
    for (let i = 1; i < this._counter; i++) {
      if (this.storage[i] === value) {
        return true;
      }
    }

    return false;
  }

  until(value) {
    let count = this.count();

    while(count) {
      if (this.storage[count] === value) {
        return this.count() - count;
      }
      count--;
    }

    console.error('There is no such element in the stack');
  }

  count() {
    return this._counter;
  }
}

class MinStack extends Stack {
  constructor(maxCapacity) {
    super(maxCapacity);
    this._minStack = new Stack();
  }

  push(item) {
    if (typeof item !== 'number') {
      console.error('Cannot push not number value. Please provide one.');
      return;
    }

    if (this._maxCapacity && this._counter + 1 > this._maxCapacity) {
      console.error('Max capacity already reached. Remove element before adding a new one.');
      return;
    }

    const minStackVal = this._minStack.peek();
    if (typeof minStackVal === 'undefined' || item < minStackVal) {
      this._minStack.push(item);
    } else {
      this._minStack.push(this._minStack.peek());
    }

    this._counter++;
    this.storage[this._counter] = item;
  }

  pop() {
    const poppedItem = super.pop();
    this._minStack.pop();

    return poppedItem;
  }
}
