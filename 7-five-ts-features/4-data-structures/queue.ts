interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
  size(): number;
}

class Queue<T> implements IQueue<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  enqueue(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Queue has reached max capacity, you cannot add more items");
    }
    this.storage.push(item);
  }
  dequeue(): T | undefined {
    return this.storage.shift();
  }
  size(): number {
    return this.storage.length;
  }
}

const queue = new Queue<string>();

queue.enqueue("A");
queue.enqueue("B");

console.log(queue.size()); // Output: 2
console.log(queue.dequeue()); // Output: "A"
console.log(queue.size()); // Output: 1
