import { LinkNode } from "./LinkNode";

class LinkedList {
  constructor() {
    this.length = 0;
    this.root = null;
  }

  head() {
    let firstNode = this.root;
    while (firstNode?.isStart()) {
      firstNode = firstNode.prev;
    }

    return firstNode;
  }

  tail() {
    let lastNode = this.root;
    while (lastNode?.isEnd()) {
      lastNode = lastNode.next;
    }

    return lastNode;
  }

  insert(v) {
    const newNode = new LinkNode(v);
    const tailNode = this.tail();

    if (!tailNode) {
      this.root = newNode;
    } else {
      newNode.prev = tailNode; // link prev of newNode
      tailNode.next = newNode; // link newNode as current's next
    }
  }

  prepend(v) {
    const newNode = new LinkNode(v);
    const headNode = this.head();

    if (!headNode) {
      this.root = newNode;
    } else {
      newNode.next = headNode;
      headNode.prev = newNode;
    }
  }

  traverse() {
    let str = "";
    let curr = this.head();
    while (curr) {
      str += " -> " + curr.value;
      curr = curr.next;
    }

    return str;
  }

  traverseReverse() {
    let str = "";
    let curr = this.tail();
    while (curr) {
      str += " -> " + curr.value;
      curr = curr.prev;
    }

    return str;
  }
}

const list = new LinkedList();
list.insert(3);
list.insert(30);
list.insert(1);
list.prepend(10);
console.log("head", list.head());
console.log("tail", list.tail());
console.log("traverse", list.traverse());
console.log("traverseReverse", list.traverseReverse());
