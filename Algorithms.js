function print(str) {
  console.log(str);
}

function bouncer(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      print(arr[i]);
      newArr.push(arr[i]);
      print(newArr);
    }
  }
  return newArr;
}

print(bouncer([false, null, 0, NaN, undefined, ""]));

// function frankenSplice(arr1, arr2, n) {
//   let arr3;
//   //As we want arr2 to stay the same, we need to copy it using slice
//   arr3 = arr2.slice("");
//   for (let i = 0; i < arr1.length; i++) {
//     //splice insert the element at the index n
//     arr3.splice(n, 0, arr1[i]);
//     n++;
//   }
//   return arr3;
// }
// print(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//to upper case in javascript
// function titleCase(str) {
//   let arr = str.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
//   }
//   str = arr.join(" ");
//   return str;
// }

// print(titleCase("I'm a little tea pot"));

// function booWho(bool) {
//   return bool === true || bool === false;
// }

// print(booWho(null));

// function findElement(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       return arr[i];
//     }
//   }
//   return undefined;
// }

// findElement([1, 2, 3, 4], num => num % 2 === 0);

// function truncateString(str, num) {
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }

// print(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// function repeatStringNumTimes(str, num) {
//   let temp = str;
//   for (let i = 0; i < num - 1; i++) {
//     str = str.concat(temp);
//   }
//   return str;
// }

// print(repeatStringNumTimes("abc", 3));
// function confirmEnding(str, target) {
//   let arr_str = str.split("");
//   let arr_target = target.split("");
//   print(arr_str);
//   print(arr_target);
//   let flag = true;
//   for (
//     let i = arr_str.length - arr_target.length;
//     i <= arr_str.length - 1;
//     i++
//   ) {
//     if (arr_str[i] !== arr_target[i - (arr_str.length - arr_target.length)]) {
//       print(arr_str[i] + " " + arr_target[i + 1 - arr_target.length]);
//       flag = false;
//       break;
//     }
//   }
//   return flag;
// }

// print(confirmEnding("Bastian", "n"));

// function largestOfFour(arr) {
//   let answer = [];
//   let max = 0;
//   let len = 0;
//   for (let i = 0; i <= 3; i++) {
//     len = arr[i].length;
//     for (let j = 0; j <= len - 1; j++) {
//       max = Math.max(max, arr[i][j]);
//     }
//     answer.push(max);
//     max = Number.NEGATIVE_INFINITY;
//   }
//   return answer;
// }
// console.log(
//   largestOfFour([
//     [17, 23, 25, 12],
//     [25, 7, 34, 48],
//     [4, -10, 18, 21],
//     [-72, -3, -17, -10],
//   ])
// );

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
