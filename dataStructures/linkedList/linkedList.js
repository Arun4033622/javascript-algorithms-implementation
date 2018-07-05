class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    return this.insertAt(data, 0);
  }
  
  insertLast(data) {
    return this.insertAt(data, this.size() - 1);
  }
  
  getFirst() {
    return this.getAt(0);
  }
  
  getLast() {
    return this.getAt(this.size() - 1);
  }
  
  removeFirst() {
    return this.removeAt(0);
  }
  
  removeLast() {
    return this.removeAt(this.size() - 1);
  }

  size() {
    let node = this.head;
    let counter = 0;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  clear() {
    this.head = null;
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (index === counter) {
        return node;
      }

      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prev = this.getAt(index - 1);

    if (!prev || !prev.next) {
      return;
    }

    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head);
    }

    const prev = this.getAt(index - 1) || this.getAt(this.size() - 1);

    if (!prev.next) {
      prev.next = new Node(data);
    }

    prev.next = new Node(data, prev.next);
  }
  
  forEach(fn) {
    let node = this.head;
    let counter = 0;

    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

