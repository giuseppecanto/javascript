/**
 * Queue for abstract objects.
 *
 * Reference:
 * https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
 */

// Import modules
const Node = require("./Node").Node;

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    return !this.front;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.front = this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
  }

  dequeue() {
    let node = this.front;
    if (!this.isEmpty()) {
      this.front = this.front.next;
    }
    if (this.isEmpty()) {
      this.back = null;
    }
    return node;
  }
}

module.exports = {
  Queue
};
