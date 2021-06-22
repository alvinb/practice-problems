const binarySearch = (haystack = [], needle) => {
  let low = 0;
  let high = haystack.length - 1;
  let mid = 0;
  let steps = 0;
  while (low <= high) {
    ++steps;

    console.log(`high: ${high}`)
    console.log(`low: ${low}`);
    console.log(`mid: ${mid}`);
    console.log('------')
    mid = Math.round((high + low) / 2);
    if (needle === haystack[mid]) {
      console.log(`steps: ${steps}`);
      return mid;
    } else if (needle < haystack[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  console.log(`steps: ${steps}`);
  return null;
}
console.log('starting');
const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 9);
console.log(result)
