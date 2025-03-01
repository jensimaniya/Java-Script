let array = [2, 3, 4, 5, 6, 9, 10, 3,1];
let min = array[0];
for (let i = 0; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}
console.log(min);
