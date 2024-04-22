`Move all zeroes to end of array`

- Given an array of random numbers, Push all the zero’s of a given array to the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be same. Expected time complexity is O(n) and extra space is O(1).

```
Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};
```

- Using extra space;

```
function moveZeroToEnd(arr){
    let n=arr.length;
    let newArr=[];
    let count=0;
    for(i=0;i<n;i++){
        if(arr[i]!==0){
            newArr[count++]=arr[i];
        }
    }
    while(count<n){
        newArr[count++]=0;
    }

    console.log(newArr);
}

moveZeroToEnd([1, 2, 0, 4, 3, 0, 5, 0]);

```

- Using same array

```
function moveZeroToEnd(arr){
    let n=arr.length;
    let count=0;

    for(i=0;i<n;i++){
        if(arr[i]===0){
            count++;
            arr.splice(i,1);
            i--;
        }
    }
    for(i=0;i<count;i++){
        arr.push(0);
    }
    console.log(arr);
}

moveZeroToEnd([1, 2, 0, 4, 3, 0, 5, 0]);

```

- Using swap method

```
function moveZeroToEnd(arr){
    let j=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]!==0){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            j++;
        }
    }
    console.log(arr);
}

moveZeroToEnd([5, 6, 0, 4, 6, 0, 9, 0, 8])

```
