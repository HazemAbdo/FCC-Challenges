function print(str) {
  console.log(str);
}

function sumPrimes(num) {
  // Prime number sieve
  let isPrime = Array(num + 1).fill(true);
  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      // i has not been marked false -- it is prime
      for (let j = i * i; j <= num; j += i) isPrime[j] = false;
    }
  }

  // Sum all values still marked prime
  return isPrime.reduce((sum, prime, index) => (prime ? sum + index : sum), 0);
}

// function sumPrimes(num) {
//   var sum = 0;
//   if (num < 2) return 0;
//   function isPrime(num) {
//     //We only need to check up to the square root because the square root
//     //of a number is the largest possible unique divisor.
//     for (var i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
//   for (var i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// }

print(sumPrimes(977));
// test here
// function sumFibs(num) {
//   var sum = 2;
//   var currFab = 1;
//   var prevFab = 1;
//   for (var i = 2; i <= num; i++) {
//     if (i === currFab + prevFab) {
//       prevFab = currFab;
//       currFab = i;
//       if (i % 2 !== 0) sum += i;
//     }
//   }
//   return sum;
// }
// print(sumFibs(4000000));
// function convertHTML(str) {
//   // Use Object Lookup to declare as many HTML entities as needed.
//   const htmlEntities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;",
//   };
//   // Using a regex, replace characters with it's corresponding html entity
//   //second argument in replace is a method that deals with the match character
//   return str.replace(/([&<>\"'])/g, (match) => htmlEntities[match]);
// }

// // test here
// print(convertHTML("Dolce & Gabbana"));

// function convertHTML(str) {
//   var newStr = "";
//   var pairs = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;",
//   };
//   //convert str to array

//   for (var i = 0; i < str.length; i++) {
//     if (pairs.hasOwnProperty(str[i])) {
//       print("hello");
//       newStr += pairs[str[i]];
//       console.log("convertHTML ~ pairs[str[i]]", pairs[str[i]]);
//     } else {
//       newStr += str[i];
//     }
//   }
//   console.log("convertHTML ~ arr", newStr);
//   return newStr;
// }

// convertHTML('Stuff in "quotation marks"');

//Gameeeeeeeeeeeeeeeeeeeeed
// function uniteUnique(...arr) {
//   return [...new Set(arr.flat())];
// }
// function uniteUnique(arr) {
//   //we use arguments when we don't know the # of parameters
//   var numberArray = [];
//   for (var i = 0; i < arguments.length; i++) {
//     for (const j of arguments[i]) {
//       numberArray.push(j);
//     }
//   }
//   //we can pass an array to set constructor
//   const numbersSet = new Set(numberArray);
//   //we can use spread operator with set
//   return [...numbersSet];
// }

// print(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// function fearNotLetter(str) {
//   let firstChar = str[0].charCodeAt(0);
//   let lastChar = str[str.length - 1].charCodeAt(0);
//   let lenWithMissing = lastChar - firstChar + 1;
//   //97 98 99 100 a b c d it is just an aritm. sequence
//   let assumedSum = (lenWithMissing / 2) * (firstChar + lastChar);

//   let actualSum = 0;
//   for (var i = 0; i < str.length; i++) {
//     actualSum += str.charCodeAt(i);
//   }
//   //the difference will be the missing letter
//   return assumedSum == actualSum
//     ? undefined
//     : String.fromCharCode(assumedSum - actualSum);
// }

// print(fearNotLetter("abce"));

// function returnPair(char) {
//   let returnedPair;
//   switch (char) {
//     case (char = "A"):
//       returnedPair = ["A", "T"];
//       break;
//     case (char = "T"):
//       returnedPair = ["T", "A"];
//       break;
//     case (char = "C"):
//       returnedPair = ["C", "G"];
//       break;
//     case (char = "G"):
//       returnedPair = ["G", "C"];
//       break;
//     default:
//       returnedPair = [];
//   }
//   return returnedPair;
// }
// function pairElement(str) {
//   let returnedArray = [];
//   for (char in str) {
//     print(str[char]);
//     returnedArray.push(returnPair(str[char]));
//   }
//   return returnedArray;
// }

// print(pairElement("GCG"));

// function myReplace(str, before, after) {
//   if (before[0] === before[0].toUpperCase()) {
//     after = after.charAt(0).toUpperCase() + after.slice(1);
//   } else {
//     after = after.charAt(0).toLowerCase() + after.slice(1);
//   }
//   return str.replace(before, after);
// }

// print(
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped")
// );

// function translatePigLatin(str) {
//   const vowels = /^[a i o u e]/i;
//   if (vowels.test(str)) {
//     return str + "way";
//   }
//   return str.replace(/(\w+?)([aeiou]\w+)/i, "$2$1") + "y";
// }

// print(translatePigLatin("cklmnopqonsonant"));

// function spinalCase(str) {
//   const regex = /\_|\s/g;
//   //To set a space between lower case letters and upper case ones
//   //helloWorld-->hello World
//   //this trick is to put - before upper case words
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//   return (str = str.replace(regex, "-").toLowerCase());
// }

// print(spinalCase("thisIsSpinalTap"));

// function whatIsInAName(collection, source) {
//   const arr = [];
//   // Only change code below this line
//   let keys = Object.keys(source);
//   console.log("whatIsInAName ~ source", source);
//   return collection.filter((obj) =>
//     keys.every((key) => obj[key] === source[key] && obj.hasOwnProperty(key))
//   );

//   // Only change code above this line
// }
// print(
//   whatIsInAName(
//     [
//       { first: "Romeo", last: "Montague" },
//       { first: "Mercutio", last: null },
//       { first: "Tybalt", last: "Capulet" },
//     ],
//     { last: "Capulet" }
//   )
// );
// function destroyer(arr, ...valsToremove) {
//   return arr.filter((item) => !valsToremove.includes(item));
// }
// print(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
// function destroyer(arr) {
//   //arguments is an array-like object containing the function's argument values
//   for (var i = 1; i < arguments.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//       if (arr[j] === arguments[i]) {
//         arr.splice(j, 1);
//         //we need to decrement j because we just removed an element so
//         //the index of the next element is now j instead of j+1
//         j--;
//       }
//     }
//   }
//   return arr;
// }

// print(destroyer([3, 5, 1, 2, 2], 2, 3, 5));

//make a set called unique
// function diffArray(arr1, arr2) {
//   let uniqueArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     uniqueArr.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) !== -1) {
//       //delete the element
//       uniqueArr.splice(uniqueArr.indexOf(arr2[i]), 1);
//     }
//     else{
//       uniqueArr.push(arr2[i]);
//     }
//   }
//   //convert set to array
//   return uniqueArr;
// }

// let newArr=diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// console.log("newArr", newArr);
// function sumAll(arr) {
//   let sumBetween = 0;
//   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sumBetween += i;
//   }
//   return sumBetween;
// }

// print(sumAll([1, 20]));
// function chunkArrayInGroups(arr, size) {
//   let newArr = [];
//   // quot = Math.round(arr.length / size);
//   // rem = arr.length % size;
//   // if (rem === 0) {
//     for (let i = 0; i < arr.length; i += size) {
//       newArr.push(arr.slice(i, i + size));
//     }
//   // } else {
//   //   for (let i = 0; i < arr.length - rem; i += size) {
//   //     newArr.push(arr.slice(i, i + size));
//   //   }
//   //   newArr.push(arr.slice(arr.length - rem, arr.length));
//   // }
//   return newArr;
// }

// print(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 5));

// function mutation(arr) {
//   let checkChars = new Array(26).fill(0);
//   let first = arr[0].toLowerCase();
//   let second = arr[1].toLowerCase();
//   for (let i = 0; i < first.length; i++) {
//     checkChars[first.charCodeAt(i) - 97] = 1;
//   }
//   for (let i = 0; i < second.length; i++) {
//     if (checkChars[second.charCodeAt(i) - 97] != 1) {
//       return false;
//     }
//   }
//   return true;
// }
// print(mutation(["hello", "neo"]));
// function getIndexToIns(arr, num) {
//   arr.push(num);
//   print(arr);
//   //as default sort function treats the array elements as strings
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   // print(arr);
//   return arr.indexOf(num);
// }

// print(getIndexToIns([3, 10, 5], 3));

// function bouncer(arr) {
//   let newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       print(arr[i]);
//       newArr.push(arr[i]);
//       print(newArr);
//     }
//   }
//   return newArr;
// }

// print(bouncer([false, null, 0, NaN, undefined, ""]));

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
