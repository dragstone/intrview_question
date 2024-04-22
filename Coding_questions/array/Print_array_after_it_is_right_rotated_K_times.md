`Print array after it is right rotated K times`

- Given an Array of size N and a values K, around which we need to right rotate the array. How to quickly print the right rotated array?

```
Input: Array[] = {1, 3, 5, 7, 9}, K = 2.
Output: 7 9 1 3 5
Explanation:
After 1st rotation - {9, 1, 3, 5, 7}
After 2nd rotation - {7, 9, 1, 3, 5}
Input: Array[] = {1, 2, 3, 4, 5}, K = 4.
Output: 2 3 4 5 1

```

- Brute Force Approach

```
function rotateArrayKTimes(arr,k){
    const n=arr.length;
    k=k%n;
    for(i=0;i<k;i++){
        let x=arr[n-1];
        for(j=n-1;j>0;j--){
            arr[j]=arr[j-1];
        }

        arr[0]=x;
    }

    console.log(arr);
}

rotateArrayKTimes([1, 2, 3, 4, 5],6);

```

- Printing without changing array

```
function rotateArrayKTimes(arr,k){
    const n=arr.length;
    k=k%n;
    for(i=0;i<n;i++){
        if(i<k){
        console.log(arr[n+i-k]);
        }
        else {
            console.log(arr[i-k]);
        }
    }
}

rotateArrayKTimes([1, 2, 3, 4, 5],2);

// {1, 3, 5, 7, 9}, K = 2


```

- Using Reverse Method

```

function rotateArrayKTimes(arr,k){
    const n=arr.length;
    k=k%n;

    for(i=n-1,j=n-k;j<i;j++,i--){
        let temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
    }

    for(i=0, j=n-1-k; i<j;i++,j--){
        let temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
    }

    for(i=0, j=n-1;i<j;i++,j--){
        let temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
    }
    console.log(arr);
}

rotateArrayKTimes([1, 2, 3, 4, 5],6);


```
