/**
 * Find a (only one) local minimum in an array, local minima = when the element is less than its neighbours and
 * if it is a corner element to compare to only one its neighbours.
 */

const arr = [4,2,1,4,3,5,6,3,8,9];

const localMinima = (start,end)=>{
    let mid = (start+end)/2;
    if(arr[mid-1] < arr[mid]){
        end = mid-1;
        return localMinima(start,end);
    }
    else if(arr[mid+1] < arr[mid]){
        start = mid+1;
        return localMinima(start,end);
    }
    else {
        return arr[mid];
    }
}

console.log(localMinima(0,arr.length));

