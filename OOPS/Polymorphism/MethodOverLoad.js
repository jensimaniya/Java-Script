class Cal {
  constructor() {}

  Sub(a, b) {
    console.log(a, b);
    return a + b;
  }
  Sub(a, b, c) {
    return a + b + c;
  }
}

let cal = new Cal();
console.log(cal.Sub(10, 5));





