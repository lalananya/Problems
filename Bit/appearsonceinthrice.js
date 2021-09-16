/* Find the element that appears once ! */

const arr = [12, 12, 12, 1, 1, 1, 2, 3, 3, 3];

/**
 * First way to use a brute force method ~ O(n^2)
 * Second way to use a Set ot a Hashmap ~ O(n) time and space
 * Third way to use bit manipulation ~ O(n) time and O(1) space , you can use variables but not variables depending on n, thus contant space
 */

/** Constraints
 *  Each element repeats three times instead of one
 */

let res = 0;

for( let i=0 ;i<arr.length;i++){
    res = res ^ arr[i];
}

console.log(res); // the non repeating number



