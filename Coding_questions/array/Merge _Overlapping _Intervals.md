`Merge Overlapping Intervals`

- Given a set of time intervals in any order, our task is to merge all overlapping intervals into one and output the result which should have only mutually exclusive intervals.

```
Input: Intervals = {{1,3},{2,4},{6,8},{9,10}}
Output: {{1, 4}, {6, 8}, {9, 10}}
Explanation: Given intervals: [1,3],[2,4],[6,8],[9,10], we have only two overlapping intervals here,[1,3] and [2,4]. Therefore we will merge these two and return [1,4],[6,8], [9,10].

Input: Intervals = {{6,8},{1,9},{2,4},{4,7}}
Output: {{1, 9}}


```

- Using sorting and stack

```
class Interval{
    constructor(start,end){
        this.start=start;
        this.end=end;
    }
}

function compareInterval(s1,s2){
    return (s1.start<s2.start);
}

function mergeOverlappingArr(arr){
    let n=arr.length;
    arr.sort(compareInterval);

    let s=[];

    s.push(arr[0]);

    for(i=1;i<n;i++){
        let top=s[s.length-1];
        // console.log("top",top);
        if(arr[i].start>top.end){
            s.push(arr[i]);

        }else if(arr[i].end>top.end){
            // console.log("hello");
            top.end=arr[i].end;
            s.pop();
            s.push(top);
        }
        // console.log(s);
    }
    console.log(s);
    while(s.length>0){
        let t = s.pop();
        console.log("[" + t.start + "," + t.end + "] ");
    }

}

mergeOverlappingArr([new Interval(1,3),new Interval(2,4),new Interval(6,8),new Interval(9,10)]);


```

- Using sorting without using extra space

```
class Interval{
    constructor(start,end){
        this.start=start;
        this.end=end;
    }
}

function compareInterval(s1,s2){
    return (s1.start<s2.start);
}

function mergeOverlappingArr(arr){
    let n=arr.length;
    arr.sort(compareInterval);
    let index=0;
    for(i=1;i<n;i++){

        if (arr[index].end < arr[i].start){
            index++;
            arr[index]=arr[i];
        }
        // Otherwise update the ending time of top if ending
        // of current interval is more
        else if (arr[index].end < arr[i].end) {
            arr[index].end= Math.max(arr[index].end, arr[i].end);
        }
    }
    console.log(index);
    const mergedIntervalArr=arr.slice(0,index+1);
    console.log(mergedIntervalArr);


}

mergeOverlappingArr([new Interval(1,3),new Interval(2,4),new Interval(6,8),new Interval(9,10)]);


```
