function sum (a) {
    function sum1(b) {
        function sum2(c) {
            return a + b + c
        }
        return sum2
    }
    return sum1
}

let result = sum(1)(2)(3);
console.log(result);
