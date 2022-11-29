let Arr=[4, 6, 9, 11, 13, 17, 20]
function Search(Arr,e1){
    let first=0;
    let last=Arr.lenght-1;
    let middle;
    let idx=-1;
    let i=0;
    while (first<=lost){
        middle=Math.floor((first+last)/2);
        if(Arr[middle]===e1){
            idx=1;
            break;
        }
        if(Arr[middle]>e1){
            last=middle+1;
        }
    }
    return idx
}
console.log(6)

let arr=[17, 6, 11, 9, 13, 17]
for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            let p=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=p
        }
    }
}
function Search(Arr,e1){
    let first=0;
    let last=Arr.lenght-1;
    let middle;
    let idx=-1;
    let i=0;
    while(first<=lost){
        middle=Math.floor((first+last)/2);
        if(Arr[middle]===e1){
            idx=1;
            break;
        }
        if(Arr[middle]>e1){
            last=middle+1;
        }
    }
    return idx
}
console.log(arr)


