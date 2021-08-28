/*Given an integer array, find the maximum product of two integers in it.*/

const arr = [-10, -3, 5, 6, -2];

const maxProduct = (arr)=>{
    arr.sort(); // use the best way to sort
    console.log(arr[arr.length-1]*arr[arr.length-2]);
}
maxProduct(arr);