class QueueNode<T> {
  data: T;
  next: QueueNode<T>;

  constructor(data: T) {
    this.data = data;
  }
}

class Queue<T> {
  private first: QueueNode<T>;
  private last: QueueNode<T>;

  add(item: T) {
    let t: QueueNode<T> = new QueueNode<T>(item);
    if (this.last != null) {
      this.last.next = t;
    }
    this.last = t;
    if (this.first == null) {
      this.first = this.last;
    }
  }

  remove() {
    if (this.first == null) throw new Error("NoSuchElementException");
    let data: T = this.first.data;
    this.first = this.first.next;
    if (this.first == null) {
      this.last = null;
    }
    return data;
  }

  peek() {
    if (this.first == null) throw new Error("NoSuchElementException");
    return this.first.data;
  }

  isEmpty() {
    return this.first == null;
  }
}
