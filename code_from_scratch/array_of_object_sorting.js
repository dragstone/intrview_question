function bubbleSort(data, key) {
  console.log(data[1][key]);
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - 1; j++) {
      console.log(data[j][key]);
      if (data[j][key] > data[j + 1][key]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}

const data = [
  { id: 3, name: "Alice" },
  { id: 1, name: "John" },
  { id: 2, name: "Bob" },
];

const sortedData = bubbleSort(data, "id");
console.log(sortedData);
