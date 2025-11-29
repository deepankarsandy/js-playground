/*
 * @see https://youtu.be/VoJKWYhfFIU
 */
export class Node {
  declare value: number;
  declare left: Node | null;
  declare right: Node | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
