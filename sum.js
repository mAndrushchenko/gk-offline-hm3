const sum = a => {
  this.a = a;
  return sum1;
},
sum1 = b => {
  this.b = b;
  return sum2;
},
sum2 = c => {
  this.answer = a + b + c;
  return result;
},
result = () => this.answer;

sum(1)(2)(3)();
