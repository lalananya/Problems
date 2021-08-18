const arr = [20,10,30,5,50,40];

/* We will construct the max-heap using the insert method that we learned */

const contructMaxHeap = (arr)=>{
    let i=1;
    let len = arr.length;
    while(i<len){
        let j = i;
        let parent = parseInt((j-1)/2);
        while(arr[parent] < arr[j] && parent > -1){
            let temp = arr[j];
            arr[j] = arr[parent];
            arr[parent] = temp;
            j = parent; /* we need to backtrace until the parent is larger */
            parent = parseInt((j-1)/2);
        }
        i++;
    }

    console.log(arr);
}

//contructMaxHeap(arr);

/* This takes o(nlogn) */

/* Heapify is a way to construct the structure in o(n) */

const constructUsingHeapify = (arr,n,i)=>{ // you provide the parent and the sub trees are also heapified
    let largest = i;
    let left = 2*i + 1;
    let right = 2*i + 2;
    if(left < n && arr[left] > arr[largest]){
        largest = left;
    }
    if(right < n && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest !==i){
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        constructUsingHeapify(arr,n,largest); // cause possible there might be an heap associated with largest - we heapify that too
    }

}

/* Let's convert the array using this */

const buildHeap = (arr)=>{
    let startFrom = parseInt(arr.length/2);
    while(startFrom >=0){
        constructUsingHeapify(arr,arr.length,startFrom);
        startFrom --;
    }
    console.log(arr);
}

buildHeap(arr);