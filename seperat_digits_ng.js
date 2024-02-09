// Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.
// Input: nums = [13,25,83,77]
// Output: [1,3,2,5,8,3,7,7]

function separating(nums) {

  let res = []
  let srting = ""

  for (let i=0; i<nums.length; i++) {
    string = nums[i].toString()
    for (let j=0; j<string.length; j++){
        res.push(parseInt(string[j]))
        }
    }
    return res
}

console.log(separating([13,25,83,77]));
