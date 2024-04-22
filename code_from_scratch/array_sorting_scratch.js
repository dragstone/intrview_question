function sorting(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log(arr);
  }
  console.log(arr);
}

console.log(sorting([9, 7, 3, 5, 6, 1, 2]));

// output
// [1, 2, 3, 5, 6, 7, 9];
