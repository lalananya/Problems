const arr = [4,2,1,4,3,5,6,3,8,9];

const divide = (arr)=>{
    if(arr.length === 1)return arr;
    let mid = parseInt((0+arr.length)/2);
    let left = divide(arr.slice(0,mid));
    let right = divide(arr.slice(mid,arr.length));
    return merge(left,right);
};

const merge =  (arr_one, arr_two)=>{
    let result = [];
    let i = 0;
    let j = 0;
    let k = 0;
    while(i < arr_one.length && j< arr_two.length){
        if(arr_one[i] < arr_two[j]){
            result[k] = arr_one[i];
            k++;
            i++;
        }
        if(arr_two[j] <= arr_one[i]){
            result[k] = arr_two[j];
            k++;
            j++;
        }
    }

    while(i<arr_one.length){
        result[k] = arr_one[i];
        k++;
        i++;
    }

    while(j< arr_two.length){
        result[k] = arr_two[j];
        k++;
        j++;
    }
    return result;
};

console.log(divide(arr));