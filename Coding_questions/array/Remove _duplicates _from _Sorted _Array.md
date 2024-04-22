`Remove duplicates from Sorted Array`

- Given a sorted array arr[] of size N, the task is to remove the duplicate elements from the array.

Examples:

```
Input: arr[] = {2, 2, 2, 2, 2}
Output: arr[] = {2}
Explanation: All the elements are 2, So only keep one instance of 2.

Input: arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5}
Output: arr[] = {1, 2, 3, 4, 5}

```

` Naive Approach`

```
function removeDuplicatesFromSortedArr(arr){
    const n=arr.length;
    let s=[];
    j=0;
    for(i=0;i<n-1;i++){
        if(arr[i]!==arr[i+1]){
            s[j++]= arr[i];
        }
    }
    s[j]=arr[n-1];
    console.log(s);
}

removeDuplicatesFromSortedArr([2, 2, 2, 2, 2,3,3,4,4]);

```

- Using Set

```
function removeDuplicatesFromSortedArr(arr){
    const s= new Set(arr);
    // console.log([...s]);
    const uniqueElementArr= [...s];
    console.log(uniqueElementArr);
}

removeDuplicatesFromSortedArr([2, 2, 2, 2, 2,7,7,7,8,9,9]);

```

- Without using extra space

```
function removeDuplicatesFromSortedArr(arr){
    const n=arr.length;
    let j=0;
    for(i=0;i<n-1;i++){
        if(arr[i]!==arr[i+1]){
            arr[j++]=arr[i];
        }
    }
    arr[j]=arr[n-1];
    arr=arr.slice(0,j+1);
    console.log(arr);
}

removeDuplicatesFromSortedArr([2, 2, 2, 2, 2,7,7,7,8,9,9]);



```

- Using Binary Search

```
function binarySearch(arr,l,h,element){
    let res=-1;

    while(l<=h){
        let mid= Math.floor((l+h)/2);
        if(arr[mid]<=element){
            l=mid+1;
        }else{
            res=mid;
            h=mid-1;
        }
    }
    if(res===-1){
        return arr.length;
    }else{
        return res;
    }
}



function removeDuplicatesFromSortedArr(arr){
    const n=arr.length;
    let index=0;

    while(index!==n){
        let i= binarySearch(arr, index+1, n-1, arr[index]);
        if(i===n){
            return index+1;
        }

        index++;
        arr[index]=arr[i];
    }

    return index+1;
}
let arr=[2, 2, 2, 2, 2,7,7,7,8,9,9];
const n=removeDuplicatesFromSortedArr(arr);

console.log(arr.splice(0,n));
```
