// myForEach

let exampleOfArray1 = [1, 3, 5 ,6 ,7 ,8, 43, 325];
console.log('Original array before using method', exampleOfArray1);

function myForEach(arr) {
    for (let i = 0; i < arr.length; i++) {
        //here after first arr[i] you can add your properties, for example you can square your original array
        arr[i] *= arr[i];
    }
    return arr;
}

console.log('Method myForEach: ', myForEach(exampleOfArray1));
console.log('Original array after using method', exampleOfArray1); //original array was change
console.log('');

// myMap

let exampleOfArray2 = [21, 15, 3 ,6, 5 ,51 ,7654, 463, 5, 5];
console.log('Original array before using method', exampleOfArray2);

function myMap(arr) {
    let newArr = [];
    //firstly we should copy original array
    for(let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }
    //and now we can change new array and don`t cary about original

    for (let i = 0; i < newArr.length; i++) {
        //here after first arr[i] you can add your properties,
        // for example you can add 10 to even element in your  original array
        newArr[i] += 10;
    }
    return newArr;
}


console.log('Method myMap: ', myMap(exampleOfArray2));
console.log('Original array after using method', exampleOfArray2); //original array was not change
console.log('');

// mySort

let exampleOfArray3 = [21, 15, 3 ,6 ,51 ,7654, 463, 5];
let str = 'sdfghjkablmnbvcx';

function mySort (arr, k, newArr, min) {
    if (newArr === undefined) {
        k = 0;
        newArr = [];
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < newArr[k] || newArr[k] === undefined) {
            if(arr[i] > min || min === undefined) {
                newArr[k] = arr[i];
            }
        }
    }
    if(k < arr.length) {
        min = newArr[k];
        k++;
        mySort(arr, k, newArr, min);
    }

    if (typeof newArr[0] === 'number') {
        return newArr;
    }else if (typeof newArr[0] === 'string'){
        return newArr.join('')
    } else {
        return newArr;
    }
}

console.log('Sort string ', mySort(exampleOfArray3));
console.log('Sort string ', mySort(str));
console.log('');

//myFilter

function myFilter(arr, filtred) {
    let result = [];
    let k = 0;
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] === filtred) {
            result[k] = arr[i];
            k++;

        }
    }
    return result;
}

console.log('myFirer ', myFilter(exampleOfArray2, 5 ));
console.log('');

//myFind
function myFind(arr, filtred) {
    let result;
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] === filtred) {
            return  result = arr[i];
        }
    }
}

console.log('myFind ', myFind(exampleOfArray2, 5 ));



