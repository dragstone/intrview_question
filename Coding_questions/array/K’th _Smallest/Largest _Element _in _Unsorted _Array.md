`K’th Smallest/Largest Element in Unsorted Array`

- Given an array arr[] of size N and a number K, where K is smaller than the size of the array. Find the K’th smallest element in the given array. Given that all array elements are distinct.

```
Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3
Output: 7

Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 4
Output: 10

```

- Using sorting

```
function kthSmallestElement(arr,k){
    arr.sort((a,b)=>a-b);
    return arr[k-1];
}

console.log(kthSmallestElement([6,8,9,4,3,-2,1,5],2));

```

- 
