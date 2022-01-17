const calculateNestedSum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += calculateNestedSum(array[i]);
    } else {
      sum += array[i];
    }
  }
  return sum;
};

const arr = [2, [4, [2, 5, 7], 5], 2];
const sum = calculateNestedSum(arr);

