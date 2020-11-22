function calculate(a) {
  return {
    a,

    add(b) {
      this.a += b;
      return this;
    },

    multiply(c) {
      this.a *= c;
      return this;
    },

    result() {
      return this.a;
    },
  };
}

calculate(3).add(2).multiply(2).result();
