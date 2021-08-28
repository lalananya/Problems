/**Given a binary array, sort it in linear time and constant space. The output should print all zeroes, followed by all ones. */

const arr = [1, 0, 1, 0, 1, 0, 0, 1];

const sortBinary = (arr)=>{
    let numberOfZeroes = 0;
    arr.forEach((ele)=>{
        if(ele === 0) numberOfZeroes ++;
    });

    for(let i=0;i<numberOfZeroes;i++){
        arr[i] = 0;
    }

    for(let i=numberOfZeroes;i<arr.length;i++){
        arr[i] = 1;
    }
    console.log(arr);
}

sortBinary(arr);