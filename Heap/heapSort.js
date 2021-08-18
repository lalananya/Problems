const arr = [4,2,1,4,3,5,6,3,8,9];
const result = [];
const buildHeap = (arr)=>{
    for(let i=arr.length/2 ; i>=0 ;i--){
        maxHeapify(arr,arr.length,i);
    }
}

const maxHeapify = (arr,n,i)=>{
    let largest = i;
    let left = 2*largest + 1;
    let right = 2*largest + 2;

    if(left < n && arr[left] > arr[largest]){
        largest = left;
    }
    if(right < n && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest !== i){
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        maxHeapify(arr,n,largest);
    }

}

const extractAndPlace = (arr,n)=>{
    let k = 0;
    result.push(arr[k]);
    arr[k] = arr[n-1]; // we need to maintain heap
    n = n-1;
    while(k<n){
        let parent = k;
        let left = 2*parent + 1;
        let right = 2*parent + 2;
        let largest = (arr[left] < arr[right]) ? right : left;
        if(arr[parent] < arr[largest]){
            let temp = arr[largest];
            arr[largest] = arr[parent];
            arr[parent] = temp;
            k = largest;
        }
        else break;
    }
    if(n>0){
        extractAndPlace(arr,n);
    }
}

const heapSort = (arr)=>{
    buildHeap(arr);
    console.log(arr);
    extractAndPlace(arr,arr.length);
    console.log('Final-',result);
}

heapSort(arr);