

//doubleValues Function that accepts array, 
//returns [] with the values doubled 
//event click on submit button    
function doubleValues(arr) {
    let doubledArr = [];
    arr.forEach(function(value) {
      doubledArr.push(value * 2);
    });
    return doubledArr;
  };

// const inputArr = [1, 2, 3, 4, 5];
// const doubledArr = doubleValues(inputArr);
// console.log(doubledArr);

//onlyEvenValues accepts array, returns blank with only even values
function onlyEvenValues(arr){
  let onlyEvenArr=[];
  arr.forEach(function(num){
      if(num% 2===0){
      onlyEvenArr.push(val);
      }
  });
  return onlyEvenArr;
};


//showsFirstAndLast accepts array of strings and returns a 
//new array of only first and last character of each string

function showFirstAndLast(arr){
  let firstLast = [];
  arr.forEach(function(num){ 
    firstLast.push(num[0] + num[num.length -1]);
  });
  return firstLast;
}

//addKeyAndValue accepts array of obj and a value and returns the arr
//passed to the func with new key and value added for each object
//3 arguments
function addKeyAndValue (arr, key, value){
  arr.forEach(function(num){
    num[key] = val;
  });
  return arr;
}
// function vowels(str){
//   let halfArr = str.split("");
//   let obj = {};
//   let vowel = "aeiou";
// }
// splitArr.forEach(function(letter) {
//   let lowerCasedLetter = letter.toLowerCase()
//   if (vowels.indexOf(lowerCasedLetter) !== -1) {
//     if (obj[lowerCasedLetter]) {
//       obj[lowerCasedLetter]++;
//     } else {
//       obj[lowerCasedLetter] = 1;
//     }
//   }
// });
// return obj;
// }

// halfArr.forEach(function(letter){
//   let LowerCase = letter.toLowerCase()
//   if (vowel.indexOf(lowerCase) !== -1){
//   if (obj[lowerCase]){
//     obj[lowerCase]++;
//   }else {
//     obj[lowerCase] = 1;
//   }
// }
// });
// return obj;
// };



//vowelCount accepts a string and returns an object with keys
//as the vowl and the values as the number of times the vowel 
//appears in the string
//case sensitive 

function vowelCount(str) {
  let splitArr = str.split("");
  let obj = {};
  const vowels = "aeiou";

  splitArr.forEach(function(letter) {
    let lowerCasedLetter = letter.toLowerCase()
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}

//MAP
//doubleValuesWithMap accepts array and returns new array with 
//all values in the array passed to function doubled 

function doubleValuesWithMap(arr){
  return arr.map(function(num){
    return num *2;
  });
}


//valTimesIndex accepts arr and returns new with each value 
//multipled by the index it is currently at in the arr
function valTimesIndex(arr){
  return arr.map(function(num, ind){
    return num * ind;
  });
}

//extractKey ccepts an arr of obj and some key and returns
//a new arr with value of that key in each obj
function extractKey(arr, key){
  return arr.map(function(num){
    return num[key];
  });
}


//extractFullName accepts arr of obj and returns new arr with 
//value of key with a name of first and the valu of a kay
//with the name of last in each obj concatenated together with space 

function extractFullName(arr){
return arr.map(function(num){
return num.first + " " + num.last;
});
}

///filter///

// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

function filterByValue(arr, key){
  return arr.filter(function(num){
    return num[key] !== undefined;
  });
}

// Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

function find(arr, value){
  return arr.filter(function(num){
    return num === value;
  }) [0];
}

// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

  function findInObj(arr, key, value){
    return arr.filter(function(val){
    return val[key] === value;
    }) [0];
  }

// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
function removeVowels(str) {
  const vowel = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function(val) {
      return vowel.indexOf(val) === -1;
    })
    .join("");
}
// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).
function doubleOddNumbers(arr) {
  return arr
    .filter(function(num) {
      return num % 2 !== 0;
    })
    .map(function(num) {
      return num * 2;
    });
  }
