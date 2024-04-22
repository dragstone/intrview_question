`Find a peak element which is not smaller than its neighbours`

- Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing, find the maximum element in the array.

Note: If the array is increasing then just print the last element will be the maximum value.

```
Input: array[]= {5, 10, 20, 15}
Output: 20
Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

Input: array[] = {10, 20, 15, 2, 23, 90, 67}
Output: 20 or 90
Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20, similarly 90 has neighbors 23 and 67.

```

- Using brute force approach

```

function peakElement(arr){
    const n=arr.length;
    if(n===1){
        return 0;
    }
    if(arr[0]>=arr[1]){
        return 0;
    }if(arr[n-1]>=arr[n-2]){
        return n-1;
    }
    for(i=1;i<n-1;i++){
        if(arr[i]>=arr[i-1] && arr[i]>=arr[i+1]){
            return i;
        }
    }
    return -1;
}

console.log(peakElement([1,2,7,5,6,8,9,3]));
```

- Using binary search

```
// Find a peak element that is not smaller than its neighbour
function binarySearch(arr,l,r){
    let  mid=Math.floor(l+r)/2;
    if((mid==0 || arr[mid]>=arr[mid-1]) && (arr[mid]>=arr[mid+1]||mid==arr.length-1)){
        return mid;
    }else if(mid>0 && arr[mid-1]>arr[mid]){
        return binarySearch(arr,l,mid-1);
    }else{
        return binarySearch(arr,mid+1,r);
    }
}

function peakElement(arr){
    console.log(binarySearch(arr,0,arr.length-1));
}
peakElement([7,6,5]);

```
