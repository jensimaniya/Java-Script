let course = "red and white";
let n = course.length;
let count = 0;
for (let i = 0; i < n; i++) {
  if (
    course[i] == "a" ||
    course[i] == "e" ||
    course[i] == "i" ||
    course[i] == "o" ||
    course[i] == "u"
  ) {
    count++;
  }
}
console.log(count);
