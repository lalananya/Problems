const arr = [4,2,1,4,3,5,6,3,8,9];

const insertionSort = (arr)=>{
    let key,j;
    for(let i=1;i<arr.length;i++){
        key = arr[i];
        j = i-1;

        while(j>=0 && arr[j] > key){ // with the help of key we are just making spaces, visualize your thinking
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }

    console.log(arr);
}

insertionSort(arr);