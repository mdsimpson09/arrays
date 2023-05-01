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