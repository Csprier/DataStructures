'use strict';

class _Node {
  constructor(value, next, prev) {
    this.value = value,
    this.next = next,
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    let newNode = new _Node(item, this.head, null);
    
    if (this.head !== null) {
      this.head.prev = newNode;
    }

    this.head = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    }
  }

  insertLast(item) {
    let newNode = new _Node(item, null, this.tail);

    if (this.tail !== null) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    if (this.head === null) {
      this.head = newNode;
    }
  }

  insertBefore(item, beforeValue) {
    let previousNode = this.head;
    let currentNode = this.head;

    while((currentNode !== null) && (currentNode.value !== beforeValue)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      console.error('Item not found!');
      return;
    }

    previousNode.next = new _Node(item, previousNode, currentNode);
    currentNode.prev = previousNode.next;
  }

  insertAfter(item, key) {
    let currentNode = this.head;

    while (currentNode.value !== key & currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new _Node(item, currentNode.next.next);
  }

  insertAt(item, position) {
    let counter = 0;
    let currentNode = this.head;
    let previousNode = this.head;
    while (counter !== position && currentNode.next !== null) {
      counter++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = new _Node(item, currentNode);
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    while(current.value !== item) {
      current = current.next;
      if (current === null) {
        console.log('Item to remove is not in the list!');
        return null;
      }
      // Found it - now remove it

      // if the node to be removed is .head, make the next node .head
      if (current === this.head) {
        this.head = current.next;
      } else {
        current.prev.next = current.next;
      }

      // delete the last node
      if (current === this.tail) {
        this.tail = current.prev;
      } else {
        current.next.prev = current.prev;
      }
    }
  }
}

const displayList = (list) => {
  let currentNode = list.head;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
};

const size = (list) => {
  let counter = 0;
  let currentNode = list.head;
  if (!currentNode) {
    return counter;
  } else {
    counter++;
    while(!(currentNode.next === null)) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }
};

module.exports = DoublyLinkedList;

function main() {
  let dll = new DoublyLinkedList();

  dll.insertFirst('A');
  dll.insertLast('C');
  dll.insertAt('B', 2);
  dll.insertLast('D');
  dll.insertLast('E');
  dll.insertLast('F');
  displayList(dll);
}
main();