`Largest Sum Contiguous Subarray (Kadane’s Algorithm)`

- Given an array arr[] of size N. The task is to find the sum of the contiguous subarray within a arr[] with the largest sum.

```
int a[] = { -2, -3, 4, -1, -2, 1, 5, -3 };
    int n = sizeof(a) / sizeof(a[0]);

    // Function Call
    int max_sum = maxSubArraySum(a, n);
    cout << "Maximum contiguous sum is " << max_sum;
    return 0;
}

Output
Maximum contiguous sum is 7
```

- Code is below

```

function contigousSum(arr){
    let curr_sum=0;
    let max_sum=Number.MIN_VALUE;
    let start= 0, end=0, s=0;

    for(i=0;i<arr.length;i++){
        curr_sum+= arr[i];
        if(curr_sum>max_sum){
            max_sum= curr_sum;
            start=s;
            end=i;
        }

        if(curr_sum<0){
            curr_sum=0;
            s= i+1;
        }
    }

    return [max_sum, start, end];
}
const arr= [ -2, -3, 4, -1, -2, 1, 5, -3];
const [sum,start,end]= contigousSum(arr);

for(i=start;i<=end;i++){
    console.log(arr[i]);
}

```

```
function maxSubSum(arr){
    let partialSum=0;
    let maxSum=0;
    for(i=0;i<arr.length;i++){
        partialSum+=arr[i];
        maxSum= Math.max(maxSum, partialSum);
        if(partialSum<0) partialSum=0;
    }
    console.log(maxSum);
}

maxSubSum([-2,-1,1,2]);

```

- Learn dynamic programming and do this
  https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
