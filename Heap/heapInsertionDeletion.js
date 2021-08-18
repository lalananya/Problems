const arr = [50,40,45,30,20,35,10]; // a max heap

/* Complete Binary Tree */

/* Let's add a new element to this heap and maintain the complete binary structure */

const insert = (arr,n,val)=>{
    n = n+1; // in libararies they keep a provision to dynamically update the array
    arr[n] = val;
    let i = n;
    //backtracing until root or until parent is larger

    while(i>0){
    let parent = parseInt((i-1)/2);
    if(arr[parent] < arr[i]){
        let temp = arr[parent];
        arr[parent] = arr[i];
        arr[i] = temp;
        i = parent;
    }
    else return;
    }
}

/* while deleting too,we need to maintain a complete binary tree */

const a = [40,30,10,20,15]; // a max heap
const DeleteFromRoot = (a,n)=>{
    a[0] = a[n-1];
    n = n-1;
    let i = 0;
    while(i<n){
        let left = a[2*i + 1];
        let right = a[2*i + 2];
        let largest = left > right ? 2*i + 1 : 2*i + 2;
        if(a[i] < a[largest]){
            let temp = arr[largest];
            arr[largest] = arr[i];
            arr[i] = temp;
            i = largest;
        }
        else return;
    }
}
