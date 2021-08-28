
/* can contain duplicates */
const arr = [ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 ];
const printSubArrays = (arr)=>{

    if(arr.length === 0) return;
    console.log('-------------')
    for(let i=0;i<arr.length;i++){
        console.log(`${arr[i]}`);
    }
    arr.pop();
    printSubArrays(arr);
}

printSubArrays(arr);