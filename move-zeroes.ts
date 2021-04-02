const moveZeroes = (nums: number[]): number[] => {
  let start = false;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== 0) {
      start = true;
      continue;
    }

    if (nums[i] === 0 && start) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }

  return nums;
}

console.log(moveZeroes([0,1,0,3,12]))