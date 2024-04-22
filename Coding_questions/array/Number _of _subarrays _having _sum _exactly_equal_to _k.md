`Number of subarrays having sum exactly equal to k`

- Given an unsorted array of integers, find the number of subarrays having a sum exactly equal to a given number k.

```
nput : arr[] = {10, 2, -2, -20, 10}, k = -10
Output : 3
Explanation: Subarrays: arr[0…3], arr[1…4], arr[3..4] have a sum exactly equal to -10.

Input : arr[] = {9, 4, 20, 3, 10, 5}, k = 33
Output : 2
Explanation: Subarrays : arr[0…2], arr[2…4] have a sum exactly equal to 33.

```

- Naive Approach

```
function subarrayOfSumEqualToK(arr,k){
    let sum,start,end;
    let count=0;
    let indexArr=[];
    for(i=0;i<arr.length;i++){
        sum=0;
        start=i;
        for(j=i;j<arr.length;j++){
            sum+=arr[j];
            if(sum===k){
                end=j;
                count++;
                indexArr.push([start,end]);
            }
        }
    }
    console.log(indexArr);
    return count;
}

console.log(subarrayOfSumEqualToK([10, 2, -2, -20, 10],-10));

```

- Efficient Approach

```
function NumberOfSubArrSumEqualK(arr,k){
    const m1= new Map();
    let currSum=0;
    let res=0;

    for(i=0;i<arr.length;i++){
        currSum+=arr[i];

        if(currSum===k){
            res++;
        }

        if(m1.has(currSum-k)){
            res+=m1.get(currSum-k);
        }

        if(m1.has(currSum)){
            m1.set(currSum, m1.get(currSum)+1);
        }else{
            m1.set(currSum, 1);
        }
    }

    console.log(m1,res);

}

NumberOfSubArrSumEqualK([9, 4, 20, 3, 10, 5],33);


```
