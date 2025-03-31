class student {
  constructor(name, number, grid, course) {
    this.name = name;
    this.number = number;
    this.grid = grid;
    this.course = course;
  }

  leave() {
    console.log(this.name, "leave");
  }

  printDetails() {
    console.log(
      `name:${this.name},number:${this.number},grid:${this.grid},course:${this.course}`
    );
  }
}

class vipStudent extends student {
  constructor(name, number, grid, course, fees) {
    super(name, number, grid, course);
    this.fees = fees;
  }
}

let std = new student("jensi", 9879388, 8718, "full stack");
let std2 = new student("nidhi", 98754, 7654, "front end");

// console.log(std);
// console.log(std2);

// std.leave();
// std2.leave();

// std.printDetails();
// std2.printDetails();

let vip = new vipStudent("yashvi", 1234567, 1004, "back end", 100000);
// data_type variable_name = new class_name(....data.....)

console.log(vip);
vip.printDetails();
vip.leave();
