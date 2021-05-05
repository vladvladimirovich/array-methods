let arr = [1, 2, 3, 4, 5, 6, 7, -1, 9, 10];
console.log("Array init = " + arr);
console.log(
  "Get first half from the array with slice:\n" + arr.slice(0, arr.length / 2)
);

console.log(
  "\nRemove first half of the array with splice:\n" +
    "removed objects: " +
    arr.splice(0, arr.length / 2) +
    "\noriginal array: " +
    arr
);

arr = arr.map((val) => val * 2);
console.log("\nMultiply each element by 2 with map():\n" + arr);

console.log("\nPrint each element on new line with forEach(): ");
arr.forEach(val => console.log(val));

console.log("\nGet the summ of elements from array with reduce():\n" 
+ arr.reduce((sum, val) => sum + val, 0));

console.log("\nSort the array elements with sort()\n" + arr.sort());

console.log("\nIs there any even elements? Check with some():\n" + arr.some(val => val % 2 === 0));

console.log("\nIs each item bigger than zero? Check with every()\n" + arr.every((val) => val > 0));