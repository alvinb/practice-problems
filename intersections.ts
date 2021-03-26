/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1: number[], nums2: number[]): number[] => {
  if (nums1.length === 0 && nums2.length === 0) return [];

  const map: Record<string, number> = {};
  const intersections: number[] = [];
  // populate the map
  populateMap(nums1, map);
  console.log(map)
  //find intersections
  nums2.forEach(item => {
    let count = map[Number(item).toString()];
    if (count !== undefined && count > 0) {
      intersections.push(item);
      map[Number(item).toString()] = --count;
    }
  });

  return intersections;

}

const populateMap = (nums: number[], map: Record<string, number>): Record<string, number> => {
  
  nums.forEach((item) => {
    let count = map[Number(item).toString()];
    if (count === undefined) {
      map[Number(item).toString()] = 1;
    } else {
      map[Number(item).toString()] = ++count;
    }
  })

  return map;
}

console.log(intersect([1,2,2,1],[2,2]));