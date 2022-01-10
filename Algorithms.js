const { Console } = require("console");

function largestOfFour(arr) {
  let answer = [];
  let max = 0;
  let len = 0;
  for (let i = 0; i <= 3; i++) {
    len = arr[i].length;
    for (let j = 0; j <= len - 1; j++) {
      max = Math.max(max, arr[i][j]);
    }
    answer.push(max);
    max = Number.NEGATIVE_INFINITY;
  }
  return answer;
}
console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);

// function findLongestWordLength(str) {
//   let ans = 0;
//   let arr = str.split(" ");
//   arr.map(function (word) {
//     ans < word.length ? (ans = word.length) : (ans = ans);
//   });
//   return ans;
// }

// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );

// function reverseString(str) {
//   let len = str.length;
//   let arr = str.split("");
//   let stopPoint = 0;
//   let temp = 0;
//   let increment = len - 1;
//   console.log(increment);
//   stopPoint = Math.floor(len / 2) - 1;
//   console.log(stopPoint);
//   for (let i = 0; i <= stopPoint; i++) {
//     temp = arr[i];
//     arr[i] = arr[increment];
//     arr[increment] = temp;
//     increment--;
//   }
//   console.log(arr);
//   str = arr.join("");
//   return str;
// }

// console.log(reverseString("hello"));

//********************************************************************* */
// function factorialize(num) {
//   if (num == 0) return 1;
//   return num * factorialize(num - 1);
// }

// factorialize(5);
