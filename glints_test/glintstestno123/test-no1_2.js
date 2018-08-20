// 1. Write a function to get value from a nested object

//Honestly it's hard form me since I can't find the solution for this question
function safelyAccess(path, target) {
  try {
    if (typeof target !== 'object') {
      throw 'It must be an object';
    } else if (typeof path !== 'object') {
      throw 'the path must be array object';
    } else {
      return target[path[0]][path[1]];
    }
  } catch (error) {
    console.log(error);
  }
}

let obj = {
  a: {
    b: 1
  }
};

let arr = ['a', 'b'];
console.log(safelyAccess(arr, obj)); //result = 1

/////////////////////////////////////////////////////////////////////////////
// 2. Write a function called deepClone which takes an object and creates a object copy of it
function deepClone(deepClone) {
  try {
    var obj = deepClone;
    if (obj === '') {
      throw 'Cannot be Empty';
    } else if (obj === undefined) {
      throw 'Cannot be undefined !';
    } else if (typeof obj !== 'object') {
      throw 'Has to be object !';
    } else {
      var object = {
        real_object: obj,
        object_copied: { ...obj }
      };
    }
  } catch (error) {
    console.log(error);
  }

  //   obj.c = 1;
  return object;
}
let a = '1';
console.log(deepClone(obj));
