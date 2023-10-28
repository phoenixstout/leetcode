/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const mp = {}
  
    for(let i = 0; i< nums.length; i++) {
      const diff = target - nums[i]
      if(diff in mp) return [i, mp[diff]]
      mp[nums[i]] = i
    }
  };

let res = twoSum([3,2,4], 6);

console.log(res);


