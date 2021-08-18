/*
Shift the given value occurence to end.
 */
var removeElement = function(nums, val) {
    let i = 0;
    let j = nums.length-1;
    //let count = 0;
    while(i < j){
        if(nums[i] === val){
            if(nums[j] !== val){
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                j -=1;
            }
            else j -=1;

        }
        else {
            i++;
        }
    }
    console.log(nums);
};

removeElement( [3,2,2,3],3);
removeElement( [1,2,2,4,5,6,7,8],2);
removeElement( [2,2,2,3],3);
removeElement( [0,0,1,1,0,4,0,5,6,7,2,2,3],0);
