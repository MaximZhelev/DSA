class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: LinkedListNode<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(data: T) {
    let node = new LinkedListNode(data);

    // to store current node
    let current;

    //if list is Empty add the element and make it head
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      //iterate to the end of the list
      while (current.next != null) {
        current = current.next;
      }
    }
    this.size++;
  }

  // insert element at the position index
  // of the list
  insertAt(data: T, index: number) {
    if (index < 0 || index > this.size) {
      return console.log("Please enter a valid index.");
    } else {
      let node = new LinkedListNode(data);
      let curr, prev;

      curr = this.head;
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let i = 0;

        while (i < index) {
          i++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  // removes an element from the
  // specified location
  removeAt(index: number) {
    if (index < 0 || index >= this.size) {
      return console.log("Please Enter a valid index");
    } else {
      let i = 0;
      let curr = this.head;
      let prev = curr;

      if (index === 0) {
        this.head = curr.next;
      } else {
        while (i < index) {
          i++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;
      }
      this.size--;

      return curr.data;
    }
  }

  //removes a given element from the list
  removeElement(data: T) {
    let current = this.head;
    let prev = null;

    while (current != null) {
      if (current.data === data) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.data;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  indexOf(data: T) {
    let count = 0;
    let current = this.head;

    while (current != null) {
      if (current.data === data) {
        return count;
      }
      count++;
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size == 0;
  }

  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.data + " ";
      curr=curr.next;
    }
    console.log(str)
  }
}

