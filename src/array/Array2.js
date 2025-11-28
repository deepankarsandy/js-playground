import { ArrayItem } from "./ArrayItem";

export class Array2 {
  constructor(...values) {
    this.length = 0;

    values.forEach((v) => this.push(v));
  }

  push(value) {
    const nextIndex = this.length;
    this[nextIndex] = new ArrayItem(value, this.length);
    this.length++;
  }

  get(index) {
    return this[index].value;
  }

  pop() {
    const lastIndex = this.length - 1;
    const lastItem = this[lastIndex];
    delete this[lastIndex];
    this.length--;
    return lastItem;
  }

  find(cb) {
    for (let i = 0; i < this.length; i++) {
      const item = this.get(i);
      if (cb(item, i, this)) {
        return item;
      }
    }
    return undefined;
  }

  filter(cb) {
    const filterredArr = new Array2();
    for (let i = 0; i < this.length; i++) {
      const item = this.get(i);
      if (cb(item, i, this)) {
        filterredArr.push(item);
      }
    }
    return filterredArr;
  }

  sort() {
    for (let j = this.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        const curr = this.__getItem(i);
        const next = this.__getItem(i + 1);

        if (curr.value > next.value) {
          // console.log({ curr, next });
          const { item1, item2 } = this.__swapInPlace(curr, next);
          // console.log({ item1, item2 });
          this.__setItem(item1);
          this.__setItem(item2);
        }
      }
    }

    return Object.values(this);
  }

  __getItem(index) {
    return this[index];
  }

  __setItem(item) {
    return (this[item.index] = item);
  }

  __swapInPlace(item1, item2) {
    const tmp = item1.value;
    item1.value = item2.value;
    item2.value = tmp;

    return { item1, item2 };
  }
}

const arr = new Array2(12, 9, 7);
arr.push(6);
// console.log(arr.pop());
console.log("array", arr);
// console.log(arr.get(1));
console.log("sort", arr.sort());
console.log(
  "find",
  arr.find((c) => c === 7),
);
console.log(
  "filter",
  arr.filter((c) => [7, 9].includes(c)),
);
