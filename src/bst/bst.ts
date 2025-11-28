import { Node } from "./node";

class BST {
  declare private root: Node | null;

  constructor(root: Node | null) {
    this.root = root;
  }

  insert(value: number) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    this.insertNode(this.root, node);
  }

  private insertNode(root: Node, node: Node) {
    if (node.value <= root.value) {
      if (!root.left) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    }

    if (node.value > root.value) {
      if (!root.right) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(value: number, root: Node | null = this.root) {
    if (!root) {
      console.log("not found");
      return false;
    }

    if (value === root.value) {
      console.log(root.value, "found");
      return true;
    }

    if (value <= root.value) {
      console.log(root.value, "go left");
      this.search(value, root.left);
    }

    if (value > root.value) {
      console.log(root.value, "go right");
      this.search(value, root.right);
    }
  }
}

const bst = new BST(null);
bst.insert(5);
bst.insert(3);
bst.insert(12);
bst.insert(14);
bst.insert(5);

bst.search(14);
