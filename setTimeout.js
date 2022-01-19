const backendData = {
  name: "ben"
};

const fetchData1 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(backendData), 100);
  });

const fetchData2 = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 100, backendData);
  });

fetchData1().then((response) => {
  console.log("fetchData1:", response);
});

fetchData2().then((response) => {
  console.log("fetchData2:", response);
});

// both of them will show {name: 'ben'}
