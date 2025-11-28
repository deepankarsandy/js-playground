export class LinkNode {
  constructor(v) {
    this.value = v;
    this.prev = null;
    this.next = null;
  }

  isStart() {
    return !!this.prev;
  }

  isEnd() {
    return !!this.next;
  }
}
