class Stack {
  array = [];

  push = (element) => {
    this.array.push(element);
  }

  pop = () => {
    this.array.pop();
  }
}

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.pop();

