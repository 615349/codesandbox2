class Queue {
  array = [];
  
  push = (element) => {
    this.array.push(element);
  }
  
  pop = () => {
    this.array.shift();
  }
  
  isEmpty = () => this.array.length === 0;
  
  length = () => this.array.length;
  
  peek = () => this.isEmpty()? undefined : this.array[this.length() - 1]
}


const queue = new Queue();

queue.push(4);
queue.push(5);
queue.pop();
queue.pop()

