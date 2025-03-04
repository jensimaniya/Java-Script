class Student {
  #name;

  constructor(name, number, grid, course) {
    this.#name = name;
    this.number = number;
    this.grid = grid;
    this.course = course;
  }

  getName() {
    console.log(this.#name);
  }

  setName(Name) {
    this.#name = Name; // Assign new value
  }
}

let std = new Student("jensi", 9879388, 8718, "full stack");

std.setName("nidhi"); // Pass the new name as an argument
std.getName(); // Now it will print "nidhi"
