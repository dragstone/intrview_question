`Product of Array except itself`

- Given an array arr[] of n integers, construct a Product Array prod[] (of the same size) such that prod[i] is equal to the product of all the elements of arr[] except arr[i].

Note: Solve it without the division operator in O(n) time.

Example :

```
Input: arr[]  = {10, 3, 5, 6, 2}
Output: prod[]  = {180, 600, 360, 300, 900}
```

- Using Division

```
function productOfNum(arr){
    let product=1;
    for(i=0;i<arr.length;i++){
        product*=arr[i];
    }
    console.log(product);
    let productArr=[];
    for(i=0;i<arr.length;i++){
        productArr.push(product/arr[i]);
    }

    return productArr;
}

console.log(productOfNum([10, 3, 5, 6, 2]));
```

- Using three array

```
function productOfNumberExceptItself(arr){
    const n= arr.length-1;
    let left=[];
    let right=[];
    let prod=[];
    left[0]=1;
    right[n-1]=1;
    let i,j;
    for(i=1;i<n;i++){
        left[i]=left[i-1]*arr[i-1];
    }

    for(j=n-2;j>=0;j--){
        right[j]= right[j+1]*arr[j+1];
    }

    console.log(left,right);

    for(i=0;i<n;i++){
        prod[i]=left[i]*right[i];
    }

    return prod;
}

console.log(productOfNumberExceptItself([10, 3, 5, 6, 2]))
```

- Using one array

```
function productOfNumberExceptItself(arr){
    let n=arr.length;
    var prod = Array(n).fill(1);
    let temp=1;
    for(i=0;i<n;i++){
        prod[i]=temp;
        temp*=arr[i];
    }
    temp=1;
    for(j=n-1;j>=0;j--){
        prod[j]*=temp;
        temp*=arr[j];
    }
    console.log(prod);
}

console.log(productOfNumberExceptItself([10, 3, 5, 6, 2]))

```
