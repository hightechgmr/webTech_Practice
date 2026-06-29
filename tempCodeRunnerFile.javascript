var removeDuplicates = function(nums) {
    let temp = []
    let len = nums.length

    for(let i = 0; i < len; i++){
        if(!temp.includes(nums[i])){
            temp.push(nums[i])
        }
    }
    let k = temp.length
    return temp
};

let arrs = [0,0,1,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(arrs))