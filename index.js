// 1. Two Sum
const nums = [2, 7, 11, 15];
const target = 9;

var twoSum = function (nums, target) {
  let result;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
      }
    }
  }

  return result;
};

console.log(twoSum(nums, target));
