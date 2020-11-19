function sum (a) {
    function sum1(b) {
        function sum2(c) {
            function result (){
                return result.this
            }
            result.this = a + b + c
            return result
        }
        return sum2
    }
    return sum1
}

let res = sum(1)(2)(3)();
console.log(res);
