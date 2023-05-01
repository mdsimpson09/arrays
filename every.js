// Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.


    // function hasOddNumber(arr){
    //     for (let i=0; i<arr.length; i++){
    //     if(callback(arr[i]) % 2 === 0){
    //     return false;
    //     }}   
    //    return true;     
    // }

    function hasOddNumber(arr){
        return arr.some(function(val){
        return val % 2 !==0;
        })
    };

// Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

function hasZero(number){
    return number.toString().split(' ').some(function(value){
    return value === '0';
});
}

// Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.

function hasOnlyOddNumbers(arr){
    return arr.every(function(value){
    return value %2 !==0;
    })
}



// Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
//this would be every

function hasNoDuplicates(arr){
    return arr.every(function(value){
        return arr.indexOf(value) === arr.lastIndexOf(value);
    });
}


// Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

function hasCertainKey(arr, key){
    return arr.every(function(value){
        return key in value;
    });
}

// Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

function hasCertainValue(arr, key, value){
    return arr.every(function(val){
        return val[key] === value;
    });
}

///FIND

// Write a function called removeUser which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array and return this object. If the object is not found, return undefined.
function removeUser(arr, username){
    let foundIndex = arr.findIndex(function(name){
    return name.username === username;
    });
    if(foundIndex === -1) return;
    return arr.splice(foundIndex, 1)[0];

// Write a function called findUserByUsername which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

function findUserByName(arr, username){
return arr.find(function(name){
    return name.username === username; 
});
}

/////REDUCE 

// Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

function extraValues(arr, key){
    return arr.reduce(function(accu, next){
    accu.push(next[key]);
    }, []);
}

// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(string){
    let vowel = 'aeiou';
    return string.split(' ').reduce(function(acc, next){
       let lowerCase = next.toLowerCase()
        if(vowel.indexOf(lowerCase) !== -1){
            if(acc[lowerCase]){
                acc[lowercase]++;
            } else {
                acc[lowerCase] = 1;
            }
        }
        return acc;
    }, {});
}


// Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

function addKeyAndValue(arr, key, val){
    return arr.reduce(function(acc, next, index){
        acc[index][key] = val;
        return acc;  
    }, arr);
}

// Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.

function partition(arr, callback){
    return arr.reduce(function(acc, next){
    if(callback(next)){
        acc[0].push(next);
    } else{
        acc[1].push(next);
    }
    return acc;
    }[[],[]]);
}