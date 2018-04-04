class Stack {
  constructor() {
    this.separator = '|';
    this.storage = '';
  }

  push(item) {
    if (typeof item !== 'string') {
      console.error('Cannot push non-string items into the stack');
      return;
    }

    this.storage = this.storage.concat(this.separator, item);
  }

  pop() {
    const lastSeparatorIndex = this.storage.lastIndexOf(this.separator);
    const separatorLength = this.separator.length;
    const poppedItem = this.storage.slice(lastSeparatorIndex + separatorLength);

    this.storage = this.storage.substring(0, lastSeparatorIndex);

    return poppedItem;
  }

  size() {
    return this.storage.length ? this.storage.split(this.separator).length - 1 : 0;
  }
}
