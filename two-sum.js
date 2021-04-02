const twoSum = (nums, target) => {
  const map = new Map();
  if (nums.length === 2) {
    return [0, 1];
  }
  for (let i = 0; i < nums.length; i++) {

    const complement = target - nums[i];
    const index = map.get(complement);
    if (map.has(complement) && index !== i) {
      return [i, index];
    }
    map.set(nums[i], i); 
  }

}

console.log(twoSums([3, 2, 4], 6));