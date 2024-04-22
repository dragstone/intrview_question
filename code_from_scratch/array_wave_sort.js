// Approach 1

function sortWaveForm(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);

  for (i = 0; i < arr.length - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  console.log(arr);
}

sortWaveForm([10, 9, 7, 6, 3, 2, 1, 8, 5]);

// Approach 2

function sortWaveForm(arr) {
  for (i = 0; i < arr.length; i += 2) {
    if (i > 0 && arr[i - 1] > arr[i]) {
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }
    if (i < arr.length - 1 && arr[i] < arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  console.log(arr);
}

sortWaveForm([10, 90, 49, 2, 1, 5, 23]);

//output
// [90, 10, 49, 1, 5,  2, 23]
