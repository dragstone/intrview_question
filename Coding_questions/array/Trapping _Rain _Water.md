`Trapping Rain Water`

- Given an array of N non-negative integers arr[] representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

```
Input: arr[] = {2, 0, 2}
Output: 2
Explanation: The structure is like below.
We can trap 2 units of water in the middle gap.


Input: arr[]   = {3, 0, 2, 0, 4}
Output: 7
Explanation: Structure is like below.
We can trap “3 units” of water between 3 and 2,
“1 unit” on top of bar 2 and “3 units” between 2 and 4.

Input: arr[] = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}
Output: 6
Explanation: The structure is like below.
Trap “1 unit” between first 1 and 2, “4 units” between
first 2 and 3 and “1 unit” between second last 1 and last 2

```

- Brute Approach

```
function maxWater(arr){
    const n=arr.length;
    let sum=0;
    let left,right;
    for(i=1;i<n-1;i++){
         left=arr[i];
        for(let j=0;j<i;j++){
            left= Math.max(left,arr[j]);
        }
         right=arr[i];
        for(let k=i+1;k<n;k++){
            right=Math.max(right,arr[k]);
        }
        sum+=(Math.min(left,right))-arr[i];
    }
    console.log(sum);
}

maxWater([3, 0, 2, 0, 4]);

```

- Precalculation

```
function maxWater(arr){
    const n=arr.length;
    let sum=0;
    let left=[];
    let right=[];
    left[0]=arr[0];
    right[n-1]=arr[n-1];
    for(i=1;i<n;i++){
        left[i]=Math.max(left[i-1],arr[i]);
    }

    for(j=n-2;j>=0;j--){
        right[j]=Math.max(right[j+1],arr[j]);
    }

    for(i=0;i<n;i++){
        sum+=Math.min(right[i],left[i])-arr[i];
    }
    console.log(sum);
}

maxWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

```
