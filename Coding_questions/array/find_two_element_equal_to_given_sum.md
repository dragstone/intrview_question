`Check if pair with given Sum exists in Array (Two Sum)`

- Given an array A[] of n numbers and another number x, the task is to check whether or not there exist two elements in A[] whose sum is exactly x.

- Examples:

```
    Input: arr[] = {0, -1, 2, -3, 1}, x= -2
    Output: Yes
    Explanation:  If we calculate the sum of the output,1 + (-3) = -2
```

- Using Map

```
function findSumArray(arr,sum){
    let m=new Map();

    for(i=0;i<arr.length;i++){
        let searchKey= sum-arr[i];
        if(m.has(searchKey)){
            return [m.get(searchKey),i]
        }
        m.set(arr[i],i);
    }
}

console.log(findSumArray([0, -1, 2, -3, 1],-2))

```

- Using Set

```
function findSumElement(arr,sum){
    let s= new Set();
    for(i=0;i<arr.length;i++){
        let searchKey= sum-arr[i];
        if(s.has(searchKey)){
            return i;
            break;
        }
        s.add(arr[i]);

    }
    return false;
}
console.log(findSumElement([ 1, 4, 45, 6, 10, 8 ],5));

```

- Using Binary Search

```
function binarySearch(arr,element,low,high){
    arr.sort((a,b)=>a-b);
    console.log(arr)
    while(low<=high){
        mid= Math.floor((low+high)/2);
    if(arr[mid]===element){
        return mid;
    }else if(arr[mid]<element){
        low=mid+1;
    }else {
        high=mid-1;
    }
    }
    return false;
}

function findSum(arr,sum){
    for(i=0;i<arr.length;i++){
        const searchKey= sum-arr[i];
        if(binarySearch(arr, searchKey, i, arr.length-1)){
            return [i, binarySearch(arr, searchKey, i, arr.length-1)];
        }
    }
    return 0;

}

console.log(findSum([1, 4, 45, 6, 10, -8],14));
```

- Using two pointers

```
function twoSum(nums, target) {
    // Sort the array (this assumes nums is sorted)
    nums.sort((a, b) => a - b);

    // Initialize two pointers
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
            // If the sum equals the target, return the indices
            return [left, right];
        } else if (sum < target) {
            // If the sum is less than the target, move the left pointer to the right
            left++;
        } else {
            // If the sum is greater than the target, move the right pointer to the left
            right--;
        }
    }

    // If no solution is found
    return null;
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1] (because nums[0] + nums[1] equals the target)

```
