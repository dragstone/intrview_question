`Triplet Sum in Array (3sum)`

- Given an array arr[] of size n and an integer X. Find if there’s a triplet in the array which sums up to the given integer X.

```
Input: array = {12, 3, 4, 1, 6, 9}, sum = 24;
Output: 12, 3, 9
Explanation: There is a triplet (12, 3 and 9) present
in the array whose sum is 24.

```

- Brute Force

```
function tripleSumArray(arr,sum){
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
        for(k=j+1;k<arr.length;k++){
            if(arr[i]+arr[j]+arr[k]===sum){
                return [arr[i],arr[j],arr[k]];
            }
        }
        }
    }
}

console.log(tripleSumArray([12, 3, 4, 1, 6, 9],24))

```

- Using two pointer method

```
function tripleSumArray(arr,sum){
    arr.sort((a,b)=>a-b);
    for(i=0;i<arr.length-2;i++){
        let low= i+1, high=arr.length-1;
        while(low<high){
            console.log(i,low,high)
            if(arr[i]+arr[low]+arr[high]===sum){
                return [arr[i],arr[low],arr[high]];
            }else if(arr[i]+arr[low]+arr[high]>sum){
                high--;
            }else{
                low++;
            }
        }

    }

}
console.log(tripleSumArray([1, 2, 3, 4, 5],11))

```

- Using Hashing

```
function findTripleSumHashing(arr,sum){
    for(i=0;i<arr.length-2;i++){
        let s=new Set();
        let current_sum= sum-arr[i];
        for(j=i+1;j<arr.length;j++){
            let final_element= current_sum-arr[j];
            if(s.has(final_element)){
                return [arr[i],arr[j],final_element];
            }

            s.add(arr[j]);
        }
    }

}

console.log(findTripleSumHashing([12, 3, 4, 1, 6, 9],24));

```
