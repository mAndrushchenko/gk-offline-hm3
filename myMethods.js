//examples of array

const exampleOfArray1 = [1, 3, 5, 6, 7, 8, 43, 325];
const exampleOfArray2 = [9, 4, 3, 36, 5, 511, 76, 463, 1, 5];
const exampleOfArray3 = [21, 15, 3, 6, 85, 21, 463, 5, 5, 5, 5];
const str = ['s','d','f','g','h','j','k','a','b','l','m','n','b','v','c','x'];


// myForEach

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    this[i] = cb(this[i]);
  }
  return this;
};
// for all new arrays
exampleOfArray1.myForEach(el => el+2); // where original array was change

// myMap

Array.prototype.myMap = function (cb) {
  //We should copy original array and record it to new value
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr[i] = cb(this[i]);
  }
  return newArr;
};

// for all new arrays
exampleOfArray2.myMap(el => el*5) //Where original array was not change

// mySort


const mySort = new Function();

Array.prototype.mySort = function () {          //'sort' method based on swapping array`s values
  let k = 0;                                    //firstly we declare "k" value for repeating our method
  function sorting (arr) {                      //declare the function that sort aur array;
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        let max = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = max;
      }
    }
      if (k < arr.length) {                      //we don`t know where the smallest and the biggest value in tha array
      k++;                                       //we repeat our function "sorting" as many times as the length of array
      sorting(arr);
    }
  }
  sorting(this);
  return this;
};
// for all new arrays
exampleOfArray3.mySort();
str.mySort();

//myFilter

Array.prototype.myFilter = function (cb) {
  const result = [];
  let k = 0;                                        //let use our method myForEach in order to make a method myFilter
  this.myForEach(el => cb(el) ? result[k++] = el: el)
  return result;
};
// for all new arrays
exampleOfArray3.myFilter(el => el === 5);

//myFind
Array.prototype.myFind = function (cb) {
  let result;                            //method myFind return first value that return true from callback function "cb"
  this.myForEach(el => cb(el) ? result = el : el);
  return result;
};

// for all new arrays
exampleOfArray2.myFind(el => el === 76)

