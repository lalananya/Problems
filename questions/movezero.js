/*Given an integer array, move all zeros present in it to the end. The solution should use constant space. */

const arr = [ 6, 0, 0, 0, 0, 0, 4, 0, 1];

/* shifting zeroes to the end, no need to maintain the order */

const shiftZeroesToEnd = (arr)=>{
    let i = 0;
    let j = arr.length - 1;

    while(i<arr.length){
        if(arr[i] === 0){
            if(i > j) break;
            if(arr[j] !== 0){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
            } 
            j--;
        }
        else i++;
    }

    console.log(arr);

}

shiftZeroesToEnd(arr);