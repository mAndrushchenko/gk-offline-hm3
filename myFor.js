function myFor (a, b, cb) {
    if (a < b) {
        cb(a)
        a++
        one(a, b, cb)
    }
    else {
        return a
    }
}

const arr = ['a', 'b', 'c']

const logFunc = function (i) {
    console.log(arr[i])
}

myFor(0, arr.length, logFunc)