// push method
let arr = [1, 2, 3, 4, 5];
arr.push(6, 7, 8, 9, 10);
console.log(arr);

// pop method
let arr1 = [10, 20, 30, 40, 50];
arr1.pop();
console.log(arr1);

// shift method
let arr2 = [11, 22, 33, 44, 55];
arr2.shift();
console.log(arr2);

// unshift
let arr3 = [21, 22, 23, 24, 25];
arr3.unshift(19, 20);
console.log(arr3);

// splice
let arr4 = [100, 200, 300, 400, 500];
arr4.splice(2, 2, 1, 2);
console.log(arr4);

// reverce Array
let arr5 = [33, 25, 87, 54, 10];
console.log(arr5);
arr5.reverse();
console.log(arr5);

// sorthing array
let arr6 = [50, 30, 60, 20, 10];
console.log(arr6);
// arr6.sort();
arr6.sort((a, b) => a - b);
console.log(arr6);

// mearge
let arr7 = [1, 2, 3, 4, 5];
let arr8 = [6, 7, 8, 9, 10];
let arr9 = [...arr7, ...arr8];
console.log(arr9);



