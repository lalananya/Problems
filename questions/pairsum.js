/* Given an unsorted integer array, find all pairs with the given sum in it. */

const arr = [8, 7, 2, 5, 3, 1];
const target = 10;
const myset = new Set();
const findPairs = ()=>{
    arr.forEach((element)=>{
        myset.add(element);
    });

    arr.forEach((element)=>{
        let find = Math.abs(element - target);
        if(myset.has(find)){
            console.log(`${find}, ${element}`);
        }
    })
}

findPairs();

/* Brute Force method */
/* Sorting the array first and then double pointers at index and it root */
/* Using Hashing */

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set */
