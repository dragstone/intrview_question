`Third largest element in an array of distinct elements`

- Given an array of n integers, find the third largest element. All the elements in the array are distinct integers.

```
Input: arr[] = {1, 14, 2, 16, 10, 20}
Output: The third Largest element is 14

Explanation: Largest element is 20, second largest element is 16
and third largest element is 14

```

- Using Sorting

```
function thirdLargestElement(arr){
    arr.sort((a,b)=>a-b);
    console.log(arr,arr[arr.length-3]);

}

thirdLargestElement([1, 14, 2, 16, 10, 20]);


```

- Using three variables

```
function thirdLargestElement(arr){
    let n=arr.length;
    let  firstMax= arr[0];
    let secondMax=-1;
    let thirdMax= -1;

    for(i=1;i<n;i++){
        if(arr[i]>firstMax){
            firstMax=arr[i];
        }
    }
    console.log(firstMax);
    for(i=0;i<n;i++){
        if(arr[i]>secondMax && arr[i]<firstMax){
            secondMax= arr[i];
        }
    }
    console.log(secondMax)
    for(i=0;i<n;i++){
        if(arr[i]>thirdMax && arr[i]<secondMax){
            thirdMax= arr[i];
        }
    }

    return thirdMax;
}

const thirdMax=thirdLargestElement([1, 14, 2, 16, 10, 20]);
console.log(thirdMax);


```

- Using temporary variables

```
function thirdLargestElement(arr){
   let first= arr[0];
   let second= -1000000000;
   let third=-1000000000;

   for(i=1;i<arr.length;i++){
       if(arr[i]>first){
           third=second;
           second=first;
           first=arr[i];
       }

       else if(arr[i]>second){
           third=second;
           second=arr[i];
       }

       else if(arr[i]>third){
           third=arr[i];
       }
   }

   console.log(third);
   return third;

}

const thirdMax=thirdLargestElement([1, 14, 2, 16, 10, 20]);
console.log(thirdMax);

```
