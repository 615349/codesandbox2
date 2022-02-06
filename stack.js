class Stack {
  array = [];

  push = (element) => {
    this.array.push(element);
  }

  pop = () => {
    this.array.pop();
  }

  clear = () => {
    array.length = 0;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.pop();

