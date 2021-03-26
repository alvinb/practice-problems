/**
 * takes a number array that represents a number broken down into its digits and adds 1
 * @param digits 
 * @returns 
 */
const plusOne = (digits: number[]): number[] => {
  // // e.g. if length is 2, most sig fig is 10
  // const scale = Math.pow(10, digits.length-1);
  // const result = [];
  // for (let i = digits.length; i < 0; i--) {
  //   if(digits[i] + (scale))
  // }

  const num = parseInt(digits.join(''), 10) + 1;
  const stringArr = Number(num).toString().split(',')


  console.log(stringArr);

  return [];
}

plusOne([9,9,9])