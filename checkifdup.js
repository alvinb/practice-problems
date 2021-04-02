const containsDuplicate = (nums) => {
  const map = {};

  if (nums.length < 2) return false;

  for (let i = 0; i < nums.length; i++) {
    const key = Number(nums[i]).toString();
    if (map[key] === nums[i]) {
      return true;
    }
    map[key] = nums[i];
    console.log(map);
  }
  return false;
};

containsDuplicate([0, 4, 5, 0, 3, 6]);