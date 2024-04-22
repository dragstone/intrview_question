`Search an element in a sorted and rotated Array`

- Given a sorted and rotated array arr[] of size N and a key, the task is to find the key in the array.
  Note: Find the element in O(logN) time and assume that all the elements are distinct.

```
Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 3
Output : Found at index 8

Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 30
Output : Not found

Input : arr[] = {30, 40, 50, 10, 20}, key = 10
Output : Found at index 3

```

- Direct Binary Search on Array with finding Pivot

```
function binarySearch(arr,l,h,key){
    if(h<l){
        return -1;
    }
    let mid=Math.floor((l+h)/2);
    if(arr[mid]===key){
        return mid;
    }
    if(arr[mid]>key){
        return binarySearch(arr,l,mid-1,key);
    }
        return binarySearch(arr,mid+1,h,key);

}

function pivotSearch(arr,l,h){
    if(h<l){
        return -1;
    }
    if(l===h){
        return l;
    }

    let mid=Math.floor((l+h)/2);
    if(mid<h && arr[mid]>arr[mid+1]){
        return mid;
    }
    if(mid>l && arr[mid-1]>arr[mid]){
        return mid-1;
    }

    if(arr[l]<=arr[mid]){
        return pivotSearch(arr,mid+1,h);

    }

    return pivotSearch(arr,l,mid-1);
}

function pivotBinarySearch(arr,k){
    let pivot= pivotSearch(arr,0,arr.length-1);

    if(pivot===-1){
        return binarySearch(arr,0,arr.length-1,k);
    }

    if(arr[pivot]===key){
        return pivot;
    }

    if(arr[0]<=key){
        return binarySearch(arr,0,pivot-1,k);
    }
    return binarySearch(arr,pivot+1,arr.length-1,k);
}

const arr=[5, 6, 7, 8, 9, 10, 1, 2, 3];
const key=3;
const x=pivotBinarySearch(arr,key);
console.log(x);
```

- Direct Binary Search on Array without finding Pivot

```
function searchInSortedArray(arr,l,h,key){
    console.log("hello",l,h);
    if(l>h){
        return -1;
    }
    let mid= Math.floor((l+h)/2);
    if(arr[mid]===key){
        return mid;
    }

    if(arr[l]<arr[mid]){
        if(key>=arr[l] && key<=arr[mid]){
            return searchInSortedArray(arr,l,mid-1,key);
        }
        return searchInSortedArray(arr,mid+1,h,key);
    }

    if(key>=arr[mid] && key<=arr[h]){
        return searchInSortedArray(arr,mid+1,h,key);
    }
    return searchInSortedArray(arr,l,mid-1,key);
}
const a=[4, 5, 6, 7, 8, 9, 1, 2, 3];
const n=a.length;
const x=searchInSortedArray(a,0,n-1,1);
console.log(x);
```
