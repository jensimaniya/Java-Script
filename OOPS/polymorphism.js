class A {
  constructor() {}

  hello() {
    console.log("hello from A");
  }
}
class B extends A {
  constructor() {
    super();
  }
  hello() {
    console.log("hello from B");
  }
}
let a = new A();
a.hello();

let b = new B();
b.hello();
