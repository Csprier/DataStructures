'use strict';

/**
 * Node class.
 * Holds the data of a node, and the data of the next node in the stack, too.
 */

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

/**
 * Stack class.
 * Has a top value.
 * When you first instantiate the class, it has a null value for the top, because there is nothing on the Stack.
 * When you push() to the Stack, and it's the first Node added to the Stack, 
 *  the top is initialized the value of a new Node, with the data passed into the push().
 *  Otherwise, create a new Node and initialize the Stack's top to be the new Node.
 * To pop() a node off the top of the Stack,
 *  initialize a variable called 'node' with the value of the node on top of the Stack, 
 *  initialize the top of the Stack to be the value of the next node in the Stack,
 *  then return the top node's data.
 */

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

module.exports = Stack;

/**
 * 
 Stack{
  top: Node{ 
        data: 1, 
        next: Node{ 
                data: 2, 
                next: null 
              } 
            }
      };
 */